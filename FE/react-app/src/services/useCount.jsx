import {useEffect, useState} from "react";
import axios from "axios";
import {server} from "../services/api";

const useCount = () => {
    const [count, setCount] = useState(0);

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

    return count;
}

export default useCount;