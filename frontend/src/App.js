import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import TestScreen from './screens/TestScreen';
import CartScreen from './screens/CartScreen';
// import TestScreen from "./screens/TestScreen";

function App() {
  return (

  <Router>  
    <div>
    <Header/>
     <main className="py-3">
       <Container>
       <Routes>
        <Route path='/' element={<HomeScreen />} exact/>
        <Route path='/product/:id' element={<ProductScreen />} />
        {/* <Route path='/' element={<TestScreen/>} /> */}
       <Route path='/cart/:id?' element={<CartScreen />} />
      </Routes>
         </Container>
    </main>
     <Footer />
   </div>
 </Router>  
  );
}

export default App;


// npm install react-router-dom react-router-bootstrap
// npm install react-bootstrap bootstrap