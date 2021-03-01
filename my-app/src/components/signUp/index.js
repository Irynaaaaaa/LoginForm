import React from 'react';
import {Container} from './style';
import {ImageDiv} from './style';
import {Image} from './style';
import {UserData} from './style';
import LogForm from './logForm';

export default () =>{

    return(
        <Container>
            <ImageDiv>
                <Image>
                 <img src = 'https://www.flaticon.com/svg/vstatic/svg/565/565547.svg?token=exp=1613912015~hmac=91e9c40a69e3894cc87876ad71845ce0' width = {30} />
                </Image>
            </ImageDiv>
            <UserData>
                <LogForm>
                </LogForm>
            </UserData>
        </Container>
    )
}