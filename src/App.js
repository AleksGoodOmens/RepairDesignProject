import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import PageNotFound from './components/Pages/pageNotFound/PageNotFound';
import HomePage from './components/Pages/HomePage/HomePage';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Navigation />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
