import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><strong> <Link to={"/"}> MasterE </Link> </strong></li>
                </ul>
                <ul>
                    <li><Link to={"/Login"}> 로그인 </Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
