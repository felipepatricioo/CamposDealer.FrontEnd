import './style.css';
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="main">
           <div className="background">
           </div>
           <div id="loginHome">
                <img className="mainLogo" alt="campos-logo" src="https://play-lh.googleusercontent.com/iHtQ3yIWIhNZF_j_UusZeHlg3wXl3oc5Z8nwlkboHqCpd_Hgrd6pg71cLbuGznMjR-w=w240-h480-rw">
                </img>
                <h1>Faça login para acessar as funcionalidades de gerenciamento!</h1>
                <div > 
                    <Link role="button" className="btn btn-primary" to="/login">
                        Login
                    </Link>
                </div>
           </div>
        </div>
    );
}