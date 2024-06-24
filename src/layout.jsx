import {React} from 'react';
import { Link, Route,  } from 'react-router-dom';


const Layout =()=>{

    return(
        <nav>
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="random">random</Link></li>
                <li><Link to="explore">explorer</Link></li>
                <li><Link to="paginate">paginate</Link></li>
                <li><Link to="dark">dark mode</Link></li>
                 <li><Link to="status">status bar</Link></li>
            </ul>
        </nav>
       
    )
}

export default Layout;