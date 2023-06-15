import axios from 'axios';

export const server = 'http://192.168.0.32:8000'


export const getVocas = async () => {
    try {
        const response = await axios.get(server);
        const data = response.data;
        console.log(data);
    } catch (error) {
        // 에러 처리
    }
};

export const getVocaByID = async (id) => {
    try {
        const response = await axios.get(`${server}/vocas/${id}`);
        const data = response.data;
        console.log(data);
    } catch (error) {
        // 에러 처리
    }
};

export const getAllOfCount = async () => {
    try {
        const response = await axios.get(`${server}/vocas/allofcount`);
        const data = response.data;
        console.log(data)
    } catch (error) {
        // 에러 처리
    }
};