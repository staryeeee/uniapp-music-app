import {
    API_SERVER,
	UNIAPP_KEY
} from '@/config/index'
import {
    getAuth
} from '@/utils/index'

export default function request(options) {
    return new Promise((resolve, reject) => {
		let auth = getAuth(),
			url = API_SERVER + options.url
		if (auth.cookie) {
			url += '?cookie=' + encodeURIComponent(auth.cookie)
		}
		if (auth.cookie && auth.token) {
			url + '&'
		}
		if (auth.token) {
			url += 'token=' + auth.token
		}
        uni.request({
            url,
            method: options.method,
            data: options.method.toLowerCase() !== 'get' ? JSON.stringify(options.data) : options.data,
            header: {},
            timeout: 10000,
            dataType: options.dataType || 'json',
            responseType: options.responseType || 'text',
            cache: 'no-cache',
			withCredentials: false,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data)
                } else {
                    reject(res.data.detail || '请求失败，请稍后再试!')
                }
            },
            fail(err) {
                if (err.status == 401 || err.status == 403) {
                    try {
                        uni.clearStorageSync()
                    } catch(e) {
                        console.log(e);
                    }
                }
                reject(err.statusText || '请求失败，请稍后再试!')
            }
        })
    })
}
