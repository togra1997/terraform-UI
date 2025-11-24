import axios from "axios";

const BASE_URL = "http://192.168.11.8:8000";

async function fetchData(prefix: string = "", data: any = null) {
  try {
    const response = await axios.get(`${BASE_URL}${prefix}`, { params: data });
    return response.data;
  } catch (err) {}
}

export default fetchData;
