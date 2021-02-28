//const baseUrl = "https://youtube.googleapis.com/youtube/v3";
const baseUrl = "http://127.0.0.1:8080";

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `${baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `${baseUrl}/search?part=snippet&maxResults=20&q=${query}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;
