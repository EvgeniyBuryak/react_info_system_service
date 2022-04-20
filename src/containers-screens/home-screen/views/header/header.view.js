import React from "react";
import styled, { css } from "styled-components";
import iconImage from './assets/images/Vector.png';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 101px;
`

const Title = styled.div`
    font-family: 'Roboto-Black', sans-serif;
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0.05em;
    color: #0D5ADC;
`

const RightPartOfHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const fontStyles = css`
    ${'' /* font-family: 'Roboto-Black', sans-serif; */}
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

    margin-left: 48px;
    padding-right: 19px;        
`

const IconAvatar = styled.div`
    width: 20px;
    height: 20.02px;
    background-image: url(${iconImage});
`

const HeaderView = () => {
    return (
        <Header>
            <Title>Каталог</Title>
            <RightPartOfHeader>
                <ComparisonTitle>СРАВНЕНИЕ</ComparisonTitle>                
                <CabinetTitle>Личный кабинет</CabinetTitle>
                <IconAvatar />
            </RightPartOfHeader>
        </Header>
    );
}

export default HeaderView;