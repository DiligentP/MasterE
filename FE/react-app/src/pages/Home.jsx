import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { server } from "../services/api";

const Home = () => {
    const [count, setCount] = useState(0);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/vocas/allofcount`);
                const data = response.data;
                setCount(data.count);
            } catch (error) {
                // 에러 처리
            }
        };

        fetchData();
    }, []);

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
