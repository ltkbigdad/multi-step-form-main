import {Link} from "react-router-dom"

export const SideBar = () => {
    return(
        <ul>
            <li> <Link to='/'>Your info</Link></li>
            <li> <Link to='/selectplan'>Select Plan</Link></li>
            <li> <Link to='/addon'>Add-Ons</Link></li>
            <li> <Link to='/finishing'>Summary</Link></li>
        </ul>
    )
}

