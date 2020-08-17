import React,{ useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
const Main = () =>{

    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
    const [joined,setJoined] = useState("");
    const history = useHistory()

    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getFullYear()+1) + '-' +today.getDate();
            history.push(`/thanks/${joined}`,date)
        }
    }
    return(
        <React.Fragment>
        <header>
            <div data-aos="fade-right">
                <h1>We teach &amp; Mentor <br/> and create your future</h1>
                <p></p>
                <Link to='/contact'>Sign up</Link>
            </div>
        </header>
        <main>
            <section className="services">
                <h2>Why we should work together?</h2>
                <div className="service-container" data-aos="fade-right">
                  <div className="service-card service-one"></div>
                  <div className="service-description">
                      <h3>Learning</h3>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className="service-container" data-aos="fade-right">
                  <div className="service-card service-two"></div>
                  <div className="service-description">
                      <h3>Mentorship</h3>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
                <div className="service-container" data-aos="fade-right" >
                  <div className="service-card service-three"></div>
                  <div className="service-description">
                      <h3>Proof of Concept</h3>
                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  </div>
                </div>
            </section>
            <section>
                <h2>Join our newsletter to get latest updates</h2>
                <form className="newsletter" onSubmit={join}>
                      <input type="email" placeholder="Your email goes here" onChange={(e)=>setJoined(e.target.value)}/>
                      <input type="submit" value="Join Now!!"/>
                </form>
            </section>
        </main>
        <div className="footer">
        <div className="main-footer">
           <div className="container">
            <div className="row">
                    <div className="col">
                                 <i className="fa fa-phone" aria-hidden="true"></i>
                                 <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                 <i className="fa fa-instagram" aria-hidden="true"></i>
                                 <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                 <i className="fa fa-github" aria-hidden="true"></i>
                                 <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                 <i className="fa fa-soundcloud" aria-hidden="true"></i>
                         
                    </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                           &copy;{new Date().getFullYear()} Kickstartx| All rights reserved | Privacy
                </p>
            </div>
          </div>
    </div>
    </div>
    </React.Fragment>
    )
}
export default Main;