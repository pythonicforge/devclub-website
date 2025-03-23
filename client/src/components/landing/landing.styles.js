import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LandingContainer = styled.div`
    // border: 1px solid #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -1.5rem;
     @media (max-width: 920px){
       margin: -2.5rem;
    }

    @media (max-width: 815px){
       margin: 2.5rem;
    }
`;

export const ImageContainer = styled.div`
// border: 1px solid black;
`

export const Image = styled.img`
    width: 200px;
    height: auto;
    // border: 1px solid black;
     @media (max-width: 920px){
        width: 150px;
        height: auto;
    }
    @media (max-width: 490px){
        width: 100px;
        height: auto;
    }
`

export const ImageContainer2 = styled.div`
// border: 1px solid black;
height: fit-content;
margin: -2.8rem;
`

export const Image2 = styled.img`
    width: 900px;
    height: auto;
    // border: 1px solid black;
    @media (max-width: 920px){
        width: 450px;
        height: auto;
    }
    
    @media (max-width: 490px){
        width: 300px;
        height: auto;
    }
`

export const ImageContainer3 = styled.div`
// border: 1px solid black;
height: fit-content;
margin: -2.8rem;

@media(max-width: 920px){
    margin: -1rem;
}
@media(max-width: 490px){
    margin: 0.2em;
}
`

export const Image3 = styled.img`
    width: 600px;
    height: auto;
    animation: ${floatAnimation} 2s ease-in-out infinite;
    // border: 1px solid black;
    @media (max-width: 920px){
        width: 400px;
        height: auto;
    }
    
    @media (max-width: 490px){
        width: 250px;
        height: auto;
    }
`

export const ImageContainer4 = styled.div`
// border: 1px solid black;
height: fit-content;
margin: -7rem;

@media(max-width: 920px){
    margin: -4rem;
}
@media(max-width: 490px){
    margin: -3.5rem;
}
`

export const Image4 = styled.img`
    width: 1000px;
    height: auto;
    // border: 1px solid black;
    @media (max-width: 920px){
        width: 500px;
        height: auto;
    }
    
    @media (max-width: 490px){
        width: 310px;
        height: auto;
    }
`


export const HeroSubHeading = styled.p`
    text-align: center;
    font-family: ${({ theme }) => theme.typography.font};
    font-size: ${({ theme }) => theme.typography.sizes.md};
    margin: ${({ theme }) => theme.typography.sizes.xs} 0 ${({ theme }) => theme.typography.sizes.xs} 0;
    // border: 1px solid black;
    @media (max-width: 920px){
        margin: 0.5rem 0 1.15rem 0;
        font-size: 0.6rem;
    }

    @media (max-width: 490px){
        margin: 0.5rem 0 1.5rem 0;
        font-size: 0.45rem;
    }
`

export const HeroHeadingLine1 = styled.h1`
    text-align: center;
    font-family: ${({ theme }) => theme.typography.font};
    font-size: 6rem;
    margin: -2rem;
    padding: 0;
    // border: 1px solid black;
    @media (max-width: 920px){
        font-size: 3rem;
        // margin: 0rem 0 0 0;
    }
    @media (max-width: 490px){
        font-size: 2rem;
        // margin: 0rem 0 0 0;
    }
`

export const HeroHeadingLine2 = styled.h1`
    text-align: center;
    font-family: ${({ theme }) => theme.typography.font};
    font-size: 6rem;
    margin: -1.5rem 0 -1rem 0;
    // border: 1px solid black;
    @media (max-width: 920px){
        font-size: 3rem;
        margin: 0.2rem 0 1rem 0;
    }
    @media (max-width: 490px){
        font-size: 2rem;
        margin: 1rem 0 1.8rem 0;
    }
`