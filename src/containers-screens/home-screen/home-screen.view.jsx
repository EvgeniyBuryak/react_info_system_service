import React from "react";
import HeaderView from "./views/header/header.view";
import MobilesView from "./views/mobiles/mobiles.view";
import styled from 'styled-components';

const HorizontalLine = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0 0 1em;    
    padding: 0;
`

const Wrapper = styled.div`
    width                   : 77vw;
    margin                  : 0 auto;
`;

const HomeScreen = () => {
    return (
        <div>
            <Wrapper>
                <HeaderView />
            </Wrapper>
            <HorizontalLine />
            <Wrapper>
                <MobilesView />
            </Wrapper>
        </div>
    );
}

export default HomeScreen;