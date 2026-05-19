import axios from "axios";

const api = axios.create({
  baseURL: "https://api.oluwasetemi.dev/posts",
});

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data.data;
};

export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data.data;
};