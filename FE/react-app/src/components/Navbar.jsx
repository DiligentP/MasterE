import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li><strong> <Link to={"/"}> MasterE </Link> </strong></li>
                </ul>
                <ul>
                    { props.isLoggedIn ?
                        <li><Link to={"/Mypage"}> 내정보 </Link></li> :
                        <li><Link to={"/Login"}> 로그인 </Link></li>
                    }

                </ul>
            </nav>
        </>
    )
}

export default Navbar;
