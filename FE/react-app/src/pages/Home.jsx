import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import useCount from "../services/useCount";

const Home = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const count = useCount();


    return (
        <header className="container">
            <Navbar isLoggedIn={false}/>
            <hgroup>
                <h1>MasterE</h1>
                <h2>영어 단어를 쉽게 암기할 수 있도록 도와주는 서비스입니다.</h2>
            </hgroup>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login" role="button" className="secondary">시작하기</Link>
                    </li>
                </ul>
            </nav>
            <br/>
            <div>데이터베이스 전체 단어 수: {count}</div>
            <div>가입한 유저 수: {0}</div>
        </header>
    );
};

export default Home;
