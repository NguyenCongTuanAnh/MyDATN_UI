import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import DefaultLayout from './component/GlobalStyles/layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    ></Route>
                    <Route
                        path="/admin"
                        element={
                            <DefaultLayout>
                                <Admin />
                            </DefaultLayout>
                        }
                    ></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
