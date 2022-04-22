import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
    margin-top: 63px;
`

const Title = styled.div`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #828286;

    margin-bottom: 126px;
`

const Label = styled.label`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 18px;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #0D5ADC;
    ${'' /* align-items: top; */}
`

const CustomCheckbox = styled.input`
    /* для элемента input c type="checkbox" */
    position: absolute;
    z-index: -1;
    opacity: 0;

    /* для элемента label, связанного с .custom-checkbox */
    $+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    /* создание в label псевдоэлемента before со следующими стилями */
    &+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }    

    /* стили при наведении курсора на checkbox */
    &:not(:disabled):not(:checked)+label:hover::before {
      border-color: #b3d7ff;
    }

    /* стили для активного чекбокса (при нажатии на него) */
    &:not(:disabled):active+label::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе */
    &:focus+label::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    &:focus:not(:checked)+label::before {
      border-color: #80bdff;
    }

    /* стили для чекбокса, находящегося в состоянии checked */
    &:checked+label::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    &:disabled+label::before {
      background-color: #e9ecef;
    }
`

const MobilesView = () => {
    return (
        <ContentWrapper>
            <Title>Смартфоны</Title>
            <CustomCheckbox type="checkbox" id="show-differences" name="show-differences" value="no" />
            <Label htmlRor="show-differences">Показать различия</Label>
        </ContentWrapper>
    );
}

export default MobilesView;