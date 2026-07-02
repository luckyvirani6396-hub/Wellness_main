import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  },
);

export const submitContactForm = async (data: Record<string, string>) => {
  return api.post('/contact', data);
};

export const submitConsultationForm = async (data: Record<string, string>) => {
  return api.post('/consultation', data);
};

export const subscribeNewsletter = async (email: string) => {
  return api.post('/newsletter', { email });
};

export default api;
