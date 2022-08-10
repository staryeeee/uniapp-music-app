import {
    APP_VERSION,
	
	UNIAPP_COOKIE_KEY,
	UNIAPP_TOKEN_KEY
} from '@/config/index'

export function getAuth() {
    let auth = {
		version: APP_VERSION
	}
    try {
        let cookie = uni.getStorageSync(UNIAPP_COOKIE_KEY),
			token = uni.getStorageSync(UNIAPP_TOKEN_KEY)
       
        if (cookie) {
            auth['cookie'] = cookie
        }
		if (token) {
		    auth['token'] = token
		}
    } catch (e) {
        console.log(e)
    }
    return auth
}