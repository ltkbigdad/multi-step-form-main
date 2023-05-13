import {Link} from "react-router-dom"
import { Ul, Card, ListBox, IconNumberBox, TextBox} from "./style"



export const SideBar = () => {
    return(
        <>      
            
        
            <Ul>
                <li>                 
                    <Link to='/'>
                        <Card>
                            <ListBox>
                                <IconNumberBox>
                                    <p className="iconNumber">1</p>
                                </IconNumberBox>
                                <TextBox>
                                    <p className="textStep">step1</p>
                                    <p className="textOption">Your Info</p>
                                </TextBox>
                            </ListBox>
                        </Card>
                    </Link>
                </li>
                        
                <li> 
                    <Link to='/selectplan'>
                        <Card>
                            <ListBox>
                                <IconNumberBox>
                                    <p className="iconNumber">1</p>
                                </IconNumberBox>
                                <TextBox>
                                    <p className="textStep">step1</p>
                                    <p className="textOption">Your Info</p>
                                </TextBox>
                            </ListBox>
                        </Card>
                    </Link>
                </li>
                <li> 
                    <Link to='/addon'>
                        <Card>
                            <ListBox>
                                <IconNumberBox>
                                    <p className="iconNumber">1</p>
                                </IconNumberBox>
                                <TextBox>
                                    <p className="textStep">step1</p>
                                    <p className="textOption">Your Info</p>
                                </TextBox>
                            </ListBox>
                        </Card>
                    </Link>
                </li>
                <li> 
                    <Link to='/finishing'>
                        <Card>
                            <ListBox>
                                <IconNumberBox>
                                    <p className="iconNumber">1</p>
                                </IconNumberBox>
                                <TextBox>
                                    <p className="textStep">step1</p>
                                    <p className="textOption">Your Info</p>
                                </TextBox>
                            </ListBox>
                        </Card>
                    </Link>
                </li>
            </Ul> 
        </>
    )
}

