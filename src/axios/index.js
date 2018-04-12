import axios from 'axios';
import Qs from 'qs';


var axios_instance = axios.create({
    baseURL: '',
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }]
})

// 添加请求拦截器
axios_instance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('auth');
        if (token) {
            config.headers.authorization = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

// 添加响应拦截器
axios_instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === '401') {  //过期失效
            // router.replace({
            //     path: '/login',
            //     // param: {redirect: router.currentRoute.fullPath}
            // })
        }
        return Promise.reject(error);
    }
);
export default axios_instance;