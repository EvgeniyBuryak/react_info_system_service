import React from 'react';
import styled from 'styled-components';
import A72 from './images/A72 1.png';

const Image = styled.img`
    background-image: url(A72);
`

const TemplateMobile = ({ image }) => {
    return(
        <div>
            <span>123</span>
            <Image />
            <img src='${A72}' />
        </div>
    );
}

export default TemplateMobile;