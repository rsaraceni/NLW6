import { useState } from "react";

export function Button(){
   //let counter = 0;
   //criar o estado
   //o couter está dentro de [] pq retorna 2 posições 
   //desestruturar o array em 2 var isoladas

   const [counter, setCounter] = useState(0);

   //imutabilidade: a partir do momento que uma variavel foi criada dentro do estado de um component, ela não sofre alterações
   //sempre cria uma nova informação baseada naquela informação anterior
   function increment() {
      //setou um novo valor, porem baseado no que já tinha antes
      setCounter(counter + 1);
   }

   return(
      //todos os atributos no React é no formato camelcase
      //toda vez que clica no btn chama a function increment e o seu counter e add + 1
      <button onClick={increment}>
         {counter}
      </button>
   )
}
