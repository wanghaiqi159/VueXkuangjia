import axios from 'axios'

axios.defaults.timeout = 10000,

axios.defaults.baseURL = '',
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
if (process.env.NODE_ENV === 'production') {
    // 为生产环境修改配置...
    console.log("这是打包")
} else {
    // 为开发环境修改配置...
    console.log("这是开发")
}
export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });
}
export function post(url, params) {
    return new Promise((resolve, reject) => {
        // QS序列化操作，要不然后台拿不到我们的数据
          axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data) 
        })
    });
}
// 时间戳转换
export function timestamp(inputTime){
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}

// 设置请求拦截器
axios.interceptors.request.use(config=>{
    // config.headers.Authorization = 本地的token
    return config
})
// 设置响应拦截器
axios.interceptors.response.use(res=>{
    return res
},err=>{
    //出错的时候设置跳转到哪里
    return Promise.reject(err)
})
export default axios