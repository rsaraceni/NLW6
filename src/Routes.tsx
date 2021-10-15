import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext';

function RoutesApp() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Route path="/" exact={true} component={Home} />
				<Route path="/rooms/new" component={NewRoom} />
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default RoutesApp;
