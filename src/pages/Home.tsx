//quando for um botão e não um link tem que importar do React o useHistory
import { useHistory } from 'react-router';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/UseAuth';

import '../styles/auth.scss';
import '../styles/button.scss'

export function Home(){
   //defina dentro do componente uma const(precisa estar dentro do componente)
   //toda function que começa com use é um Hook no React e todo Hook precisa estar dentro do componente,
   //pois ele faz uso de informações de dentro do componente
   const history = useHistory();

   const { user, signInWithGoogle } = useAuth()

   //para o botão logar e criar uma sala
   async function handleCreateRoom(){
      if(!user){
        await signInWithGoogle()
      }

      //chamo a const history e mando para a rota que eu quero enviar o user
      //envio para criação de sala logo após o login
      history.push('/rooms/new')
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
