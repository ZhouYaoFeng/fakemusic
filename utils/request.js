// 发送 ajax请求
import config from './config'

export default (url, data = {}, method = 'GET') => {
    return new Promise((resolve,reject) => {
        wx.request({
            url: config.host+url,
            data: data,
            method: method,
            success: (res) => {
                resolve(res.data)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}