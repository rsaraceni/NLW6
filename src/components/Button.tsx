//import do typescript para o React de todos os atributos q um btn pode receber
import { ButtonHTMLAttributes } from 'react'

//aqui tipamos todas as propriedades do botão
//<HTMLButtonElement> é o elemento global
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
   return(
      //aqui chamamos todas as propriedades do botão
      <button className="button" {...props} />
   )
}