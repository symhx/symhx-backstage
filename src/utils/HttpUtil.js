import axios from 'axios';
import querystring from 'querystring';
import lockrUtil from './LockrUtils';
import config from './config';

const timeoutMsg = () => {
    this.$message.warning({
        message: '请求超时，请检查网络',
        center: true
    });
};

const http = {
    apiGet (url, config) {
        return new Promise((resolve, reject) => {
            axios.get(url, config).then((response) => {
                resolve(response.data);
            }, (response) => {
                reject(response);
                timeoutMsg();
            });
        });
    },
    apiUpload (url, data, file) {
        return new Promise((resolve, reject) => {
            let config = {
                headers: {'Content-Type': 'multipart/form-data'}
            };
            let param = new FormData(); // 创建form对象
            param.append('file', file, file.name);// 通过append向form对象添加数据
            for (let key in data) {
                param.append(key, data[key]);// 通过append向form对象添加数据
            }
            axios.post(url, param, config).then((response) => {
                resolve(response.data);
            }).catch((response) => {
                resolve(response);
                timeoutMsg();
            });
        });
    },
    apiDownload (url, data, fileName) {
        return new Promise((resolve, reject) => {
            let config = {
                responseType: 'blob'
            };
            data = querystring.stringify(data);
            axios.post(url, data, config).then((response) => {
                resolve(response.data);
                const content = response.data;
                const elink = document.createElement('a'); // 创建a标签
                elink.download = fileName; // 文件名
                elink.style.display = 'none';
                const blob = new Blob([content]);
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click(); // 触发点击a标签事件
                document.body.removeChild(elink);
            }).catch((response) => {
                resolve(response);
                timeoutMsg();
            });
        });
    },
    apiPost (url, data, config) {
        return new Promise((resolve, reject) => {
            // data = querystring.strin￿gify(data);
            axios.post(url, data, config).then((response) => {
                resolve(response.data);
            }).catch((response) => {
                resolve(response);
                timeoutMsg();
            });
        });
    }
};

const HttpUtils = {
    http
};

const appendHeaders = (headers) => {
    if (!headers.Authorization) {
        let header = {
            Authorization: lockrUtil.getData("token")
        };
        Object.assign(headers, header);
    }
};

HttpUtils.install = function (Vue, options) {
    axios.defaults.baseURL = config.devHost;
    axios.defaults.timeout = 1000 * 360;
    axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
    axios.defaults.withCredentials = true;

    // 请求拦截（配置发送请求的信息）
    axios.interceptors.request.use(function (config) {
        // 处理请求之前的配置
        appendHeaders(config.headers);
        return config;
    }, function (error) {
        // 请求失败的处理
        return Promise.reject(error);
    });
    // 响应拦截（配置请求回来的信息）
    axios.interceptors.response.use(function (response) {
        // 处理响应数据
        return response;
    }, function (error) {
        // 处理响应失败
        return Promise.reject(error);
    });
    Vue.prototype.$http = http;
};

export default HttpUtils;
