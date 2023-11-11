// Single file for TMDb API requests
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzEyNTgwNWQzZTI3NGQzYjllODk0ZjZhNjM1YjNiNyIsInN1YiI6IjY1M2I1ZWMwZTg5NGE2MDBjNTE1NGYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7bjvRBuAbE57O1E4_p_rp837ZCqIIs9uh8sd7A6g3c";
// const API_KEY='93125805d3e274d3b9e894f6a635b3b7'
const headers = {
  Authorization: "Bearer " + API_KEY,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

