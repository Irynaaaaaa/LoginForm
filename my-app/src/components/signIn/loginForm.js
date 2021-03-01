import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
import {InputField} from './style';
import {Input} from './style';
import {Header} from './style';
import {RememberMe} from './style';
import {Button} from './style';
import {UserTip} from './style';
import {Links} from './style';
import {Footer} from './style';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <Header> Sign in</Header>
          <InputField>
                <Input type='email' id='email' value={email} placeholder = 'Email Address*' onChange={(e) => setEmail(e.target.value)} />
             </InputField>
          <InputField>
            <Input type='password' id='password' value={password} placeholder = 'Password*' onChange={(e) => setPassword(e.target.value)} />
          </InputField>
          <InputField>
                <input type = 'checkbox' id = 'checkbox'/>
                <RememberMe> Remember me</RememberMe>
          </InputField>
          <Button>
              Sign in
          </Button>
            <UserTip>
                <Links>
                    <Link to = "#">Forgot your password?</Link>
                </Links>
                    <Links>
                        <Link to="signUp" >Don't have an account? Sign Up</Link>
                    </Links>
                 
            </UserTip>
            <Footer>
                Copyright © Your Website 2021
            </Footer>
          </div>
      );

}