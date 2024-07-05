import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const createBlog = async (blogData: any) => {
    try {
        const response = await axiosInstance.post('/blog', blogData);
        return response.data;
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

export const createSkill = async (skillData: any) => {
    try {
        const response = await axiosInstance.post('/skills', skillData);
        return response.data;
    } catch (error) {
        console.error('Error creating skill:', error);
        throw error;
    }
};


