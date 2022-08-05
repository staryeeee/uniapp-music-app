import request from '@/utils/request'

// BANNER
export function fetchBanner(data) {
    return request({
        url: '/banner',
        method: 'get',
        data: data
    })
}
// 推荐歌单
export function fetchPersonalized(data) {
    return request({
        url: '/personalized',
        method: 'get',
        data: data
    })
}
// 推荐 mv
export function fetchPersonalizedMV(data) {
    return request({
        url: '/personalized/mv',
        method: 'get',
        data: data
    })
}
// 独家放送列表
export function fetchPersonalizedPrivatecontentList(data) {
    return request({
        url: '/personalized/privatecontent/list',
        method: 'get',
        data: data
    })
}
// 推荐新音乐
export function fetchPersonalizedNewsong(data) {
    return request({
        url: '/personalized/newsong',
        method: 'get',
        data: data
    })
}
// 推荐电台
export function fetchPersonalizedDjprogram(data) {
    return request({
        url: '/personalized/djprogram',
        method: 'get',
        data: data
    })
}
// 推荐节目
export function fetchProgramRecommend(data) {
    return request({
        url: '/program/recommend',
        method: 'get',
        data: data
    })
}