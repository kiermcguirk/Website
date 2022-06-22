import styled from 'styled-components';
import {Link} from 'react-scroll';
import PythonImg from '../images/python-logo.png';
import JavaImg from '../images/java-logo.png';
import ReactImg from '../images/react-logo.png';




export const DevelopmentButtons = styled(Link)`
    /* border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;*/
    background-image: ${(props) =>
    `url(${require(`../images/${props.image}`)})`};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    width: 5vw;
    background-color: transparent;
    margin: 0px 5px;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10px 10px;
    border-radius: 20px;
    border-color: transparent;  
    border: 5px solid transparent;
    cursor: pointer;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${({primary}) => (primary ? '#fff' : '#fff' )};

    }

`