import axios from 'axios';
import React from 'react';

const axiosInstance= axios.create({
    baseURL: `https://quickhire-backend-psh81k20h-anik1.vercel.app/`
});

const useAxios = () => {
    return axiosInstance;
}
export default useAxios;