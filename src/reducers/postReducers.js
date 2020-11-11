import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  LIKE,
  DELETE,
} from "../constants/postConstants";

const postReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log("Fetching a post");
      return action.payload;
    case CREATE:
      console.log("Creating a post");
      return [...posts, action.payload];
    case UPDATE:
    case LIKE:
      console.log("Updating a post/ like");
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      console.log("Deleting this post");
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default postReducer;
