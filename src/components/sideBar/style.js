import styled from 'styled-components';
import bgSbMobile from '../../assets/images/bgSbMobile.svg';
import bgSdDesktop from '../../assets/images/bgSdDesktop.svg'



export const Ul = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    
    background-image: url(${bgSbMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 170px;

    @media(min-width: 1023px) {
        width: 250px;
        height: 90%;
        border-radius: 10px;
        margin-left: 20px;
        background-image: url(${bgSdDesktop});
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

    }

    
`
export const Card = styled.div`
    margin-top: 30px;
    border: 1px solid red;

    
    @media(min-width: 1023px) {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    
`

export const ListBox = styled.div`
    display: flex;

    :hover{
        
        .iconNumber{
            color: var(--Marine-blue);
        }
    }

    @media(min-width: 1023px) {
        justify-content: flex-start;
        align-items: center;
    }

    
    
`

export const IconNumberBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid var(--White);
   width: 30px;
   height: 30px;   
   border-radius: 50px;
   
   

   .iconNumber{
    color: var(--White);
    font-weight: bold;
    
   }

   :hover{
        background: black;
        
    }

  

   

  
    
`

export const TextBox = styled.div`
   display: none;

   @media(min-width: 1023px) {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 18px;
        color: var(--White);

        .textStep{
            font-weight: 400;
            
        }
    }
`