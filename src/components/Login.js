import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button,Form,FormGroup,Input, Label} from 'reactstrap';
import {FacebookLoginButton,GoogleLoginButton,GithubLoginButton} from 'react-social-login-buttons'
function App() {

    const history = useHistory();
    const goback = () =>{
        history.goBack();
    }
  return (
      <React.Fragment>
          <button className="back" onClick={goback}>&larr; Go Back</button>
    <Form className="login-form">
    <h1>
     <span className="font-weight-bold">Kickstartx</span>.com
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your Email"/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password"/>
      </FormGroup>
      <Button className="btn-lg btn-light btn-block">Login</Button>
      <div className="text-center pt-3">
           Or continue with Facebook or Google or Github
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <GoogleLoginButton className="mt-3 mb-3"/>
      <GithubLoginButton className="mt-3 mb-3" />
      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot password?">Forgot Password</a>
      </div>
    </Form>
    </React.Fragment>
  );
}

export default App;
