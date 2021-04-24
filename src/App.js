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
import AddNews from './component/user/AddNews'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import Axios from 'axios'


var themeColor='red';
export const Color=(p)=>{
  themeColor=p;
}

function App() { 

  var [post, setPost]=useState(null)
  var [inputt, setInput]=useState(null)
  var [data, setData]=useState(null)
  useEffect(() => {
    var getPost=async()=>{
      await Axios({
        method: "GET",
        url: "http://127.0.0.1:8000/"
      }).then(response=>{
        console.log(response.data);
        setPost(response.data);
      })
    }
    getPost()
  }, [])

  //card has head,user,viewer,img,time
  return (
    <div className="App">
      <Header color={themeColor}></Header>


        <Router>
          <Switch>
            <Route path='/view'>
              <CartView></CartView>
            </Route>
            <Route path='/search'>
              <div className='body'></div>
            </Route>
            <Route path='/addnews'>
              <div className='body'>
              <AddNews></AddNews>
              </div>
            </Route>
            <Route path='/login'>
              <div className='body'>
              <SignIn display='flex'></SignIn>
              </div>
            </Route>
            <Route path='/video'>
              <div className='body'>
                <h4>Upcomming...</h4>
              </div>
            </Route>
            <Route path='/popular'>
            <div className='body'>
                <h4>Upcomming...</h4>
              </div>
            </Route>
            <Route path='/live'>
              <div className='body'>
                <h4>Upcomming...</h4>
              </div>
            </Route>
            <Route path='/details'>
              <div className='body'>
              <CartView data={data}></CartView>
              </div>
            </Route>
            <Route path='/'>
              {
                post!==null ? (
                  <div className='body'>
                    {
                    post.map((data,i)=>(
                      <Link to='/details' onClick={() => setData(data)}><Cart data={data} key={i}></Cart></Link>
                    ))
                  }
                  </div>
                ) :(<div className='body'>
                  <h4>No Data Avaible</h4>
                </div>)
              }
            </Route>
          </Switch>
        </Router>


      <Footer></Footer>
      <SearchBar></SearchBar>
      <Navigation login='false' color={themeColor}></Navigation>
      <Theme></Theme>
      <Alert display='none' head='Alert' text='Your profile is hacked.'></Alert>
      <Loader display='none'></Loader>
    </div>
  );
}

export default App;
