import axios from "axios";

//const baseUrl = "https://youtube.googleapis.com/youtube/v3";
const baseUrl = "http://127.0.0.1:8080";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: baseUrl,
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: query,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
