import http from 'axios'
import Mock from 'mockjs'

// 模拟数据
Mock.mock('/logo', 'get', {
    'logo': 'https://avatars0.githubusercontent.com/u/8694401?s=400&u=a0010ebd31a36f1f5391c488a8812361f0028763&v=4',
});

// 真实请求
var axios = http.create({
    baseURL: 'https://avatars0.githubusercontent.com',
    timeout: 2000,
    withCredentials: false,
    headers: {
        'token': '23423-zis3s3t5ftr3ioxzoc896das68d6as8c7t'
    },
});

export const getLogo = () => {
    return http.get('/logo', {});
}