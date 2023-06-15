// Packages
import {useState, useEffect} from "react";
import axios from 'axios';

// Components
import Navbar from "../components/Navbar";
import {server} from "../services/api";


const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/vocas/allofcount`);
                const data = response.data;
                setCount(data);
                console.log(data)
            } catch (error) {
                // 에러 처리
            }
        };

        fetchData();
    }, []);

    return (
        <header className="container">
            <Navbar></Navbar>
            <hgroup>
                <h1>MasterE </h1>
                <h2>영어 단어를 쉽게 암기할 수 있도록 도와주는 서비스 입니다.</h2>
            </hgroup>
            <nav>
                <ul>
                    <li>
                        <a href="/quiz" role="button" className="secondary">시작하기</a>
                    </li>
                </ul>
            </nav>
            <div>전체 단어 수 : { count }</div>
        </header>
    )
};

export default Home;