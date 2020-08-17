import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import Routes from './routes';



function App() {
  const history = useHistory();
  const [path,setPath] = useState("");
  window.addEventListener("load",()=>{
    if(window.location.pathname === '/contact'){
      setPath(window.location.pathname)
    }
  });

  const checkPath = () =>{
    history.listen((location)=>{
      setPath(location.pathname)
    })
  }

  useEffect(()=>{
    checkPath();
  });

   const showContact = path;
   let _contact;
   if(showContact !== '/contact'){
         _contact = (<li><Link to="/contact">Login</Link></li>)
   }

  return (
    <div className="App">
      <div className="container">
          <nav>
            <ul>
              <li><Link to='/'>Kickstartx</Link></li>
            </ul>
            <ul>
              {_contact}
            </ul>
          </nav>
          <Routes />
      </div>
      
    </div>
  );
}

export default App;

