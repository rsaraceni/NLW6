# Istalação do firebase
- yarn add firebase
<br/><br/>

# Pasta para as config do firebase
- criar uma pasta /service dentro de /src
- dentro de /service criar firebase.ts para colocar as config de arquios externos
<br/><br/>

# Configuração do firebase
- Engrenagem
- Configurações do projeto
- Seus aplicativos / Select a opção Configurações
- Copie e cole no firebase.ts

# Colocar as credeciais dentro da raiz, assim será mantido em segurança
- criar na raiz um arquio .env.local
- esse arquivo não é enviado para o Github
- temos que criar as variaveis ambiente

# Import no index.tsx
- import './services/firebase'; 