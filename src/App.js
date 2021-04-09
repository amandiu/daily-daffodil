
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Cart from './component/Cart'
import CartView from './component/CartView'
import Contact from'./component/Contact'
import Profile from './component/Profile'
import Loader from './component/Loader'
import Alert from "./component/Alert";
import Navigation from './component/small_component/Navigation'
import Theme from './component/small_component/Theme'
import SearchBar from './component/small_component/SearchBar'
import SignIn from './component/user/SignIn'


var themeColor='red';

function App() { 

  //card has head,user,viewer,img,time
  return (
    <div className="App">
      <Header color={themeColor}></Header>
      <div className="body">
        

      </div>
      <Footer></Footer>
      <SearchBar></SearchBar>
      <Navigation login='true'></Navigation>
      <Theme></Theme>
      <SignIn display='none'></SignIn>
      <Alert display='none' head='Alert' text='Your profile is hacked.'></Alert>
      <Loader display='none'></Loader>
    </div>
  );
}

export default App;
