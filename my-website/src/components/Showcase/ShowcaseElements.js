import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'
export const ShowcaseContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-bottom: 10%;
    @media screen and (max-width: 760px){
        height: 1100px;

    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ShowcaseWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const NavCard = styled(LinkR)`
    text-decoration: none; /* Remove the underline */
    text-decoration: none; /* Remove the underline */
    &:visited {
    color: black; /* Set the visited link text color */
  }
`

export const ShowcaseCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 240px;
    padding: 23px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

    }
`



export const ShowcaseIcon = styled.img`
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    margin-bottom: 10px;
`

export const ShowcaseH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ShowcaseH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`

export const ShowcaseP = styled.p`
    font-size: 1rem;
    text-align: center;

`