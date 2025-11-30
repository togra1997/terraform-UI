import axios from "axios";

const BASE_URL = "http://terraform-api:8000";

async function fetchData(prefix: string = "", data: any = null) {
  try {
    const response = await axios.get(`${BASE_URL}${prefix}`, { params: data });
    return response.data;
  } catch (err) {
    console.log("通信失敗:", err);
  }
}

export default fetchData;
