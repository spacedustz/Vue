import axios from 'axios';

export const fetchFrame = async (): Promise<any[]> => {
    try {
        const response = await axios.get('http://localhost:8081/csv');
        return response.data;
    } catch (error) {
        console.error('Error Fetching Frame Data: ', error);
        return [];
    }
}

export const fetchVideo = async (): Promise<string> => {
    try {
        const response = await axios.get('http://localhost:18080/api/video');
        return response.data;
    } catch (error) {
        console.error('비디오 가져오기 실패:', error);
    }
}

export const fetchJson=  async (): Promise<any> => {
    try {
        const response = await axios.get('http://localhost:18080/api/json')
        return response.data;
    } catch (error) {
        console.error('Json 데이터 가져오기 실패', error);
    }
}