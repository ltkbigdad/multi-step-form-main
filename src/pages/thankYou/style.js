import styled from 'styled-components'

export const Container = styled.div`    
    background: var(--Alabaster);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 60%;
    border-radius: 10px;
    position: absolute;
    margin-top: 92px;
    -webkit-box-shadow: 0px 5px 11px 4px #8A8A8A; 
    box-shadow: 0px 5px 11px 4px #8A8A8A;

`

export const Content = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

  

    p{
        width: 90%;
        margin-top: 20px;
        text-align: center;
        
    }

`

export const IconContainer = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
    border-radius: 50%;
    background: var(--Strawberry-red);


`

export const IconContent = styled.div`     
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--Alabaster);
    

  img{
    width: 20px;
  }
    

`

