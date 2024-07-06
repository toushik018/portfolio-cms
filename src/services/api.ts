import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://tayeb-com-backend.vercel.app/api',
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

export const createDescription = async (descriptionData: any) => {
    try {
        const response = await axiosInstance.post('/description', descriptionData);
        return response.data;
    } catch (error) {
        console.error('Error creating description:', error);
        throw error;
    }
};


export const createProject = async (projectData: any) => {
    try {
        const response = await axiosInstance.post('/project', projectData);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};