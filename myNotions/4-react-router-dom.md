# Instalando react-router-dom
- yarn add react-router-dom

# Se estiver usando typescript, tem que instalar outro pacote como dependência de dev.
- yarn add @types/react-router-dom -D


# A importação na App.tsx e propriedades
- import { BrowserRouter, Route } from 'react-router-dom';

-- dentro de {} BrowserRouter vamos colocar em volta da aplicação em App.tsx

-- para cada pagina coloca um componente chamado <Route path="/" component={Home} />
-- Exemplo: 
- <Route path="/" exact component={Home} />
- <Route path="/rooms/new" component={NewRoom} />

- o exact para manter a home como caminho exato
- exact={true} por padrão quando não passa o booleano é sempre true = exact
- exact={false}