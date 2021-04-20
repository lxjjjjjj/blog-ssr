import { DETAIL_DATA } from "./constants";
const detailData = data => ({
  type:DETAIL_DATA,
  payload:data
})
export const getDetailData = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/detailData')
      .then((res) => {
        const data = res.data;
        return dispatch(detailData(data))
      }).catch(() => {});
  };
}