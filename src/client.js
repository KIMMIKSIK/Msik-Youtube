import axios from 'axios';
// 따로 이렇게 key까지 갖추어서 만들어두면 dependency injection주입을 하는 클래스조차 키를 모르게 만들 수 있다.
const client = axios.create({
  baseURL: process.env.REACT_APP_API,
  params: { key: process.env.REACT_APP_YOUTUBE_KEY },
});

export default client;
