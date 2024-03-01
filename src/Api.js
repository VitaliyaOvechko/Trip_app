import axios from "axios";

const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "C3AWHEBXXJZL4RXM5ENL4SKMQ";

export const getWeatherForToday = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherForWeek = async (city, startDay, endDay) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${city}/${startDay}/${endDay}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json
`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
