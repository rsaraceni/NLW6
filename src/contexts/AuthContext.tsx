//useEffect é Hook para disparo de efeitos colaterais
//usado quando eu quero disparar uma função sempre que algo acontecer 
//(Ex: uma informação mudou ou sempre que esse componete for mostrado em tela)
import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase';

type User = {
   id: string;
   name: string;
   avatar: string;
}

type AuthContextType = {
   user: User | undefined;
   signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
   children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
   //criar um estado
   const [user, setUser] = useState<User>();

   //ele recebe 2 parametro
   //1º qual função quero executar
   //2º quando eu quero executar essa função e sempre vai ser um array[]
   //dentro do vetor coloco qual informação quero ficar monitorando

   //deixando o array vazio, a function vai disparar uma unica vez 
   //onAuthStateChanged: é um evento de escuta como eventListener
   //Esse useEffect vai ficar monitorando no firebase se já existente esse login feito para o usuario
   useEffect(() => {
      //se coloca o eventListener em uma variavel para depois poder desligar esse evento de escuta
      const unsubscribe = auth.onAuthStateChanged(user => {
         if (user) {
            const { displayName, photoURL, uid } = user;

            if (!displayName || !photoURL) {
               throw new Error("Missing information from Google Account.");
            }

            //se está ok, então preencho os dados
            setUser({
               id: uid,
               name: displayName,
               avatar: photoURL
            })
         }
      })

      return () => {
         unsubscribe();
      }
   }, []);

   async function signInWithGoogle() {
      //autenticação do usuário
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await auth.signInWithPopup(provider);
      //abre o login do Google como popup e mantem o user na tela do App
      //passa comom parametro o provider
      //depois do user logado, vai apresentar um resultado

      //se a autenticação deu certo
      if (result.user) {
         //busca algums dados desse user
         //displayName: apelido
         //photoURL: avatar
         //uid: id
         const { displayName, photoURL, uid } = result.user;

         //se user não tiver nome ou uma foto, dispara uma msg de erro
         if (!displayName || !photoURL) {
            throw new Error("Missing information from Google Account.");
         }

         //se está ok, então preencho os dados
         setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
         })
      }
      console.log(result);
   }

   return (
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
         {props.children}
      </AuthContext.Provider>
   );
}
