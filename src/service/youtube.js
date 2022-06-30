import client from '../client';

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  // mostPopular는 async,await을 사용하였고 axios라이브러리로 네트워크 통신을 사용하였습니다.
  // axios는 기본적으로 json으로 변환된 데이터를 반환해준다. 또 axios.create를 사용하면 baseURL을 통해 기본 중복되는 주소를 통일시킬 수 있다.
  // axios는 주소의 parameter도 따로 params를 설정해서 가독성을 높일 수도 있다.이것이 fetch와의 차이점이라고 생각한다.
  // 예전 브라우저는 xmlhttprequest를 사용 최신 브라우저라면 fetch를 사용하며 접근성이 좋다.
  mostPopular() {
    return (async () => {
      try {
        const response = await client.get('videos', {
          params: { part: 'snippet', chart: 'mostPopular', maxResults: 20 },
        });
        const data = response.data;
        console.log(data, '처음받는 데이터입니다.');
        const items = data.items;
        console.log(items, '처음 받는 items입니다.');
        return items;
      } catch (e) {
        console.log(e);
      }
    })();
  }
  // search는 fetch함수를 사용한 프로미스로 비동기 네트워크 통신을 사용하였습니다.
  async search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
      .catch(error => console.log('error', error));
  }
}

export default Youtube;
