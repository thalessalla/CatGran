import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/carrinho/CartComponent';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home';
import NotFound from './pages/notFound';
import {SignUpForm} from './pages/signup/signup';
import {Login} from "./pages/login/login";



function App() {
  return (
   <>
   
   <Provider store={store}>
   <Router>
    <Header />
   <Routes>
        <Route path="/userPage" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />   
        <Route path="/cadastrar" element={<SignUpForm />} />   
        <Route path="/" element={<Login />} />   
        <Route path="*" element={<NotFound/>}> </Route>  
   </Routes>     
    </Router>
    <Footer />
   </Provider>

     
   </>
  );
}

export default App;
