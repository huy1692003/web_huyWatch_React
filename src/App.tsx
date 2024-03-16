import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Header from './components/client/Header';

import Footer from './components/client/Footer';
import { publicRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div id="Main_Page">
                    <Routes>
                        {publicRoutes.map<any>((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        })}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
