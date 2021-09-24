/*
   Essa function é uma mensagem de boas vindas para o usuario como parametro está o user

   Incluir na mensagem de boas-vindas, a cidade e UF do usuário
*/


/*----------------------------------------------
Com Javascript
----------------------------------------------*/
function showWelcomeMessageJavascript(userJs) {
   console.log(userJs);

   //se realmente não souber a tipagem correta, com o JavaScript podemos executar o codigo
   //sem que apareca aulgum aviso e após executar teremos um erro na aplicação
   return `Welcome ${userJs.name} (${userJs.city})`;
}




/*----------------------------------------------
Com TypeScript 
----------------------------------------------*/
//Aqui é feita a tipagem
type User ={
   name: string;

   //obj address
   address:{
      city: string;
      uf: string;
   }
}

function showWelcomeMessageTypeScript(userTs: User) {

   //obs.: estamos procurando city dentro de userTs, mas ele faz parte do obj address
   //dessa forma o TypeScript vai avisar o erro e no JavaScript não é mostrado o erro antes da execução

   //forma errada
   //return `Welcome ${userTs.name} (${userTs.city})`;

   //forma correta
   return `Welcome ${userTs.name} (${userTs.address.city} - ${userTs.address.uf})`;
}

//quando chamar essa funcion dentro dela podemos dar um,
//ctrl + espace e vai mostrar as informações que a function espera
showWelcomeMessageTypeScript({
   //ex: se eu tentar passar um number em name o TS já vai mostrar o erro,
   //pois o name é só do tipo string
   name: 'Rogério',
   address:{
      city: 'São Paulo',
      uf: 'SP'
   }
})