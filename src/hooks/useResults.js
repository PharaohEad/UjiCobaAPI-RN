import { useEffect, useState } from "react";
import yelp from "../API/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Api GET");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log("");
      setErrorMessage("Something went wrong !");
    }
  };

  //salah
  //searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
