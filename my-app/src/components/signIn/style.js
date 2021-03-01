import React from 'react';
import styled from 'styled-components';



export const Container = styled.div`
    display : flex;
    flex-direction : column;
    margin-top: 50px;
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

`
export const InputField = styled.div`
    margin-top : 20px;
    margin-left : 100px;
`

export const Input = styled.input`
    height : 50px;
    width : 400px;
    padding-left : 10px;
    background-color: inherit;
    border-width: 0.5px 0.5px 0.5px 0.5px; 
    border-color: rgb(243, 243, 243);

`

export const Header = styled.div`
    display : flex;
    color : white;
    font-family: 'Times New Roman', Times, serif;
    margin-left: auto;
    margin-right: auto;
    margin-top : 15px;
    width: 4em;
    letter-spacing: 3px;  
    font-size: 20px;
`


export const RememberMe = styled.span`
    color : white;
`

export const Button = styled.button`
    margin-top : 30px;
    margin-left : 100px;
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
    margin-left : 100px;
    display: flex;
    flex-direction : row;


`
export const Links = styled.div`
    padding-right: 80px;
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
    width : 190px;
    padding-top : 50px;
    padding-bottom : 90px
`
