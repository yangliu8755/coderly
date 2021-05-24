import axios from 'axios';

export default request(requestObj){
     let axiosInstance = axios.create({
          baseURL:'http://152.136.185.210:7878/api/m5/home'
     })
     return axiosInstance(requestObj)


}