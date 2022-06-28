import client from '../client';

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    return (async () => {
      try {
        const response = await client.get(
          `/videos?part=snippet&chart=mostPopular&maxResults=22&type=video&key=${this.key}`,
        );
        const data = response.data;
        console.log(data);
        const items = data.items;
        console.log(items);
        return items;
        // items사용하면됨
      } catch (e) {
        console.log(e);
      }
    })();
  }
  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=22&q=${query}&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .catch(error => console.log('error', error));
  }
}

export default Youtube;
