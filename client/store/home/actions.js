// import axios from 'axios';
import { HOME_DATA } from "./constants";

// warning: 这里必须要设置上baseURL，否则在服务端发出请求时，会把端口打到 80 端口去
// axios.defaults.baseURL = 'http://localhost:3001';

//普通action
const homeData = data => ({
  type: HOME_DATA,
  payload: data
});

//异步操作的action(采用thunk中间件)
export const getHomeData = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/homedata')
      .then((res) => {
        const data = res.data;
        return dispatch(homeData(data))
      }).catch(() => {});
  };
}