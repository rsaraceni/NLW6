import { useHistory } from 'react-router';

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';
import '../styles/button.scss'

export function Home(){
   const history = useHistory();

   //para o link do buttom
   function handleCreateRoom(){

      //autenticação do usuário
      const provider = new firebase.auth.GoogleAuthProvider();

      //abre o login do Google como popup e mantem o user na tela do App
      //passa comom parametro o provider
      //depois do user logado, vai apresentar um resultado
      auth.signInWithPopup(provider).then(result => {

         console.log(result);
      })

      //history.push('/rooms/new')
   }

   return(
      <div id="page-auth">
         <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas da sua audiência em tempo-real</p>
         </aside>
      
         <main>
            <div className="main-content">
               <img src={logoImg} alt="Letmeask" />

               <button onClick={handleCreateRoom} className="create-room">
                  <img src={googleIconImg} alt="Logo do Google" />
                  Crie sua sala com o Google
               </button>

               <div className="separator">ou entre em uma sala</div>

               <form>
                  <input 
                     type="text"
                     placeholder="Digite o código da sala"
                  />

                  <Button type="submit">
                     Entrar na sala
                  </Button>
               </form>
            </div>
         </main>
      </div>
   )
}
