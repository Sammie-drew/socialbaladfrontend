import axios from "axios";

const baseUrl = "https://socialbalad.herokuapp.com/post";

export const fetchPost = () => axios.get(baseUrl);
export const createPost = (newPost) => axios.post(baseUrl, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${baseUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${baseUrl}/${id}`);
export const likePost = (id) => axios.patch(`${baseUrl}/${id}/likepost`);
