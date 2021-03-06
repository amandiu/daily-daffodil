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
import Theme from './component/small_component/Theme'
import SearchBar from './component/small_component/SearchBar'
function App() { 

  //card has head,user,viewer,img,time
  return (
    <div className="App">
      <Header></Header>
      <div className="body">
        
      </div>
      <Footer></Footer>
      <SearchBar></SearchBar>
      <Navigation></Navigation>
      <Theme></Theme>
      <Alert display='none' head='Alert' text='Your profile is hacked.'></Alert>
    </div>
  );
}

export default App;
