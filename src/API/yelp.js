import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer eFW76Lc3hxT2YKQZYBXXUcnXblFShdkbVnTpfR5B2Zne1W5ncIDnW37akHyYSE7vjnZ8BK9VAsOQdF_K-v2jky1OwTcvrd6p7O7YwGrRNyod0zD6xlLA3bG0dn7lYHYx",
  },
});
