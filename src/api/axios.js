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
// 设置cookie
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + (expiredays* 24 * 60 * 60 * 1000));
    document.cookie = c_name + "=" + value + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
// 获取cookie
export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
} 
// 删除cookie
export function delCookie (name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval){
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
}
//图片转换成base64不进行压缩,需要传进去raw地址
export function imgBase(path,reject){
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
            imgResult = reader.result;
        };
        reader.onerror = function(error) {
            reject(error);
        };
        reader.onloadend = function() {
            resolve(imgResult);
        };
    });
}

//cans压缩图片然后用转成base64格式
export function imgCompress(path,obj){
    let _this = this  //这里的this 是把vue的实例对象指向改变为_this 
    var img = new Image();
    img.src = path.url;
    img.onload = function(){
        var that = this;  //这里的this 是把img的对象指向改变为that 
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
            quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        console.log(base64)
        var urlFile = _this.convertBase64UrlToBlob(base64)  //这个地方的处理是为了把压缩的base64转化为对象，获得压缩后图片的大小size，方便对压缩后的图片再次进行判断；
        console.log(urlFile)
        if(urlFile.size/1024 > 1025){
            _this.$msgbox("图片过大，请重新上传图片")
        }else{
            _this.partitionBase = base64.split(",")[1]
            _this.imgType ="."+urlFile.type.split("/")[1]
        }
    }
    //此处函数对压缩后的base64经过处理返回{size: "", type: ""} 
    convertBase64UrlToBlob =(urlData) =>{
        var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }
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
    return y + '/' + m + '/' + d+' '+h+':'+minute+':'+second;
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