//useEffect é Hook para disparo de efeitos colaterais
//usado quando eu quero disparar uma função sempre que algo acontecer 
//(Ex: uma informação mudou ou sempre que esse componete for mostrado em tela)
import { createContext, useState, useEffect } from 'react'

import RoutesApp from './Routes';
import { auth, firebase } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

//tipagem
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

//passa o formato da informação dentro do contexto
//createContext(''); e uma string
//createContext({}); é um objeto vazio
//se estou enviado um objeto tenho que definir como objeto
export const AuthContext = createContext({} as AuthContextType);

function App() {
  //criar um estado
  const [user, setUser] = useState<User>();

  //ele recebe 2 parametro
  //1º qual função quero executar
  //2º quando eu quero executar essa função e sempre vai ser um array[]
  //dentro do vetor coloco qual informação quero ficar monitorando
  useEffect(() => {}, []);

  async function signInWithGoogle() {
    //autenticação do usuário
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    //abre o login do Google como popup e mantem o user na tela do App
    //passa comom parametro o provider
    //depois do user logado, vai apresentar um resultado

    //se a autenticação deu certo
    if(result.user){
      //busca algums dados desse user
      //displayName: apelido
      //photoURL: avatar
      //uid: id
      const { displayName, photoURL, uid} = result.user;
      
      //se user não tiver nome ou uma foto, dispara uma msg de erro
      if(!displayName || !photoURL){
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
      //acesso o componete com .Provider p/ acessar uma propriedade do componente AuthContext
      //todo provider precisa receber um value, o valor do Context

      //1 par de {} define que vai ser um js dentro
      //2 pares de {{ }} define que vai ter um objeto dentro
      <AuthContext.Provider value={{ user, signInWithGoogle}}>
        <RoutesApp />
      </AuthContext.Provider>
  );
}

export default App;
