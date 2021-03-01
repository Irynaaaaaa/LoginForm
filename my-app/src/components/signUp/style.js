import React from 'react';
import styled from 'styled-components';



export const Container = styled.div`
    display : flex;
    flex-direction : column;
    margin-top: 20px;
    width: 600px;
    margin-left: auto;
    margin-right: auto ;
    background-color: rgba(12, 11, 11, 0.932);
`

export const ImageDiv = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto ;
    margin-top : 30px;
`

export const Image = styled.div`
    margin-left: auto;
    margin-right: auto ;
    display: inline-block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding-left: 17px;
    padding-top : 17px;
    background-color: rgb(255, 205, 225);
    
`
export const UserData = styled.div`
    margin-left : 100px;

`
export const InputField = styled.div`
    display : flex;
    flex-direction : row;
    margin-top : 20px;
`

export const Input = styled.input`
    height : 50px;
    width : 400px;
    padding-left : 10px;
    background-color: inherit;
    border: 0.5px solid ${props => props.validated ? 'rgb(83, 83, 89)' : 'red'};

`

export const Header = styled.div`
    display : flex;
    color : white;
    font-family: 'Times New Roman', Times, serif;
    margin-left: auto;
    margin-right: auto;
    margin-top : 15px;
    width: 9em;
    letter-spacing: 3px;  
    font-size: 20px;
`


export const Acceptation = styled.div`
    color : white;
    font-size : 14px;
`

export const Button = styled.button`
    margin-top : 30px;
    height : 40px;
    width : 410px;
    background-color: rgba(50, 182, 116, 0.904);
    border: inherit;
    border-radius: 5px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
`

export const UserTip = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction : row;


`
export const Links = styled.div`
    padding-left: 80px;
    font-size : 14px;
    color : rgba(135, 221, 236, 0.904);
`

export const Footer = styled.div`
    display : flex;
    color : rgba(188, 198, 201, 0.808);
    font-family: 'Times New Roman', Times, serif;
    font-size : 12px;
    margin-left: auto;
    margin-right: auto;
    width : 250px;
    padding-top : 50px;
    padding-bottom : 50px
`
export const FirstLastName = styled.div`
    display: flex;
    flex-direction : row;
    
`
export const InputFirstLast = styled.input`
    width : 185px;
    height : 50px;
    padding-left : 10px;
    background-color: inherit;
    border: 0.5px solid ${props => props.validated ? 'rgb(83, 83, 89)' : 'red'};
    margin-right : 15px;
`