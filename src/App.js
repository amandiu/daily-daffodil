import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Cart from './component/Cart'
import Contact from'./component/Contact'
import Profile from './component/Profile'
import Loader from './component/Loader'
import Alert from "./component/Alert";
import Navigation from './component/small_component/Navigation'
function App() { 
 // var v="Convert any RGB value to its Hex color code, along with corresponding HSL, HSV and CMYK values (including HTML/CSS values). Convert any RGB value to its Hex color code, along with corresponding HSL, ";
  //card has head,user,viewer,img,time
  return (
    <div className="App">
      <Header></Header>
      <div className="body">
        
      </div>
      <Footer></Footer>
      <Alert display='none' head='Alert' text='Your profile is hacked.'></Alert>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
