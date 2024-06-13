import { Link } from "react-router-dom";

function Nav (prop) {
    return( 
        <div>
            <Link to='/'>
                <div>Crypto Prices</div>
            </Link>
            <Link to='/currencies'>
                <div>Crypto Currencies</div>
            </Link>
        </div>
    )
}

export default Nav;