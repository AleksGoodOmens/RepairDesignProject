import { Route, Router, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Control from './components/sections/control/Control';
import Front from './components/sections/front/Front';
import Gallery from './components/sections/gallery/Gallery';
import Projects from './components/sections/projects/Projects';
import Repairs from './components/sections/repairs/Repairs';
import PageNotFound from './components/pageNotFound/PageNotFound';
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
