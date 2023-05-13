import { Container, Content, IconContainer, IconContent} from './style'
import iconCheck from '../../assets/images/iconCheck.svg'

export const ThankYou = () => {
    return(
        <>
            <Container>
                <Content>
                
                <IconContainer>
                    <IconContent>
                     <img src={iconCheck} alt='ícone' />
                    </IconContent>
                </IconContainer>
                
                <h1>Obrigado!</h1>
                <p>Obrigado por confirmar sua inscrição! Esperamos que você se divirta usando nossa plataforma. Se você precisar de suporte, sinta-se à vontade para nos enviar um e-mail em support@loremgaming.com.</p>
                </Content>
            </Container>
        </>
    )
}