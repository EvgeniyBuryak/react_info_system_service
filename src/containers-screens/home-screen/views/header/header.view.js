import React from "react";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    font-family: 'Roboto-Black', sans-serif;
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0.05em;
    color: #0D5ADC;
`

const fontStyles = css`
    font-size: 12px;
    line-height: 14.06px;
    color: #3B4157;
`

const ComparisonTitle = styled(Title)`    
    letter-spacing: 0;
    ${fontStyles}
`

const CabinetTitle = styled(Title)`
    letter-spacing: 0.02em;
    ${fontStyles}
`

const HeaderView = () => {
    return (
        <Header>
            <Title>Каталог</Title>
            <ComparisonTitle>СРАВНЕНИЕ</ComparisonTitle>
            <CabinetTitle>Личный кабинет</CabinetTitle>         
        </Header>
    );
}

export default HeaderView;