//aqui declaramos o type das props
type ButtonProps = {
   //neste caso usamos ?(opcional) para caso não tem nada, não vai gerar erro podendo carregar vazio
   text?: string;

   //se for chamar um array 
   //tipagem generic
   text2: Array<string>;
   //ou
   text3: string[];
}

//children propriedade pré nomeado pelo React
//todo o conteudo dentro de um component chama children dentro do React 

//na function vai o mesmo nome do component com Letra maiuscula
//entre() colocamos o objeto props: chamado o type dele
export function Button(props: ButtonProps){
   return(
      //vai chamar a props.test se não vem Default
      //sempre colocar entre { }
      <button>{props.text || 'Default'}</button>
   )
}
