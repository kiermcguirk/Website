import styled from 'styled-components';
import {Link} from 'react-scroll';





export const DevelopmentButtons = styled(Link)`

    background-image: ${(props) =>
    `url(${require(`../images/${props.image}`)})`};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({primary}) => (primary ? '10px' : '10px')};
    width: ${({primary}) => (primary ? '5px' : '10px')};
    background-color: transparent;
    margin: ${({primary}) => (primary ? '0px 10px' : '0px 0px')};
    
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10px 10px;
    border-radius: 20px;
    border-color: transparent;  
    border: 5px solid transparent;
    cursor: pointer;
    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: ${({primary}) => (primary ? '#fff' : 'none' )};
        transform: scale(1.2);

    }

`