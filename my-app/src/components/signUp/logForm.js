import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserData } from '../signIn/style';
  
import {InputField} from './style';
import {Input} from './style';
import {Header} from './style';
import {Acceptation} from './style';
import {Button} from './style';
import {UserTip} from './style';
import {Links} from './style';
import {Footer} from './style';
import {FirstLastName} from './style';
import {InputFirstLast} from './style';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    

    const [emailValidation, setEmailValidation] = useState (true);
    const [passwordValidation, setPasswordValidation] = useState(true);
    const [firstNameValidation, setFirstNameValidation] = useState(true)
    const [lastNameValidation, setlastNameValidation] = useState(true)
    
    const validation = () => {
      const regex  = new RegExp('^\s*$', 'g')

      setFirstNameValidation(setFirstNameValidation => setFirstNameValidation = !regex.test(firstName));
      setlastNameValidation(secondNameState => secondNameState = !regex.test(lastName));
      if(emailValidation){
          setEmailValidation(emailValidation => emailValidation = !regex.test(email));
      }
      if(passwordValidation){
          setPasswordValidation(passwordValidation => passwordValidation = !regex.test(password));
      }
      if(emailValidation  && passwordValidation && firstNameValidation && lastNameValidation){
          localStorage.setItem(JSON.stringify(email), { 
              password: password,
              email: email,
              firstName: firstName,
              lastName: lastName,
  })
      }
      else{
          alert("wrong data for validation");
      }
  }

    return (
        <div>
            <Header> Sign in</Header>
            <UserData>
              <FirstLastName>
                  <InputField>
                      <InputFirstLast type='text' id='firstName' value={firstName} placeholder = 'First Name*' onChange={(e) => setfirstName(e.target.value)} validated = {firstNameValidation}/>
                  </InputField>
                  <InputField>
                      <InputFirstLast type='text' id='lastName' value={lastName} placeholder = 'Last Name*' onChange={(e) => setlastName(e.target.value)} validated = {lastNameValidation} />
                  </InputField>
                </FirstLastName>
          <InputField>
                <Input type='email' id='email' value={email} placeholder = 'Email Address*' onChange={value => setEmail(email => {email = value.target.value;

                    const regex  = new RegExp('...@..\...');
                    setEmailValidation(emailValidation => emailValidation = regex.test(email));
                    return email;
                })} validated = {emailValidation} />
             </InputField>
          <InputField>
            <Input type='password' id='password' value={password} placeholder = 'Password*' onChange={value => setPassword(password => {
                password = value.target.value;
                const regex  = new RegExp('........')
                setPasswordValidation(passwordValidation => passwordValidation = regex.test(password));
                return password;

            })} validated={passwordValidation}/>
          </InputField>
          <InputField>
                <input type = 'checkbox' id = 'checkbox'/>
                <Acceptation> I want to receive inspiration, marketing <br/>promotions and updates via mail </Acceptation>
          </InputField>
          <Button onClick = {() => validation()}>
              Sign up
          </Button>
            <UserTip>
                    <Links>
                        <Link to ="/signIn">Already have an account? Sign In</Link>
                    </Links>
            </UserTip>
            </UserData>
            <Footer>
                Copyright © Your Website 2021
            </Footer>
          </div>
      );

}

