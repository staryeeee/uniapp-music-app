import {
    APP_VERSION,
	
	WXMINI_TOKEN_KEY
} from '@/config/index'

export function getHeaders() {
    let headers = {}
    try {
        let token = uni.getStorageSync(WXMINI_TOKEN_KEY)
       
        if (token) {
            headers['X-Zhao-Token'] = token
        }
    } catch (e) {
        console.log(e)
    }
    return headers
}