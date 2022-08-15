import request from '@/utils/request'

// 登录
export function fetchLoginCellphone(data) {
    return request({
        url: '/login/cellphone',
        method: 'get',
        data: data
    })
}
// 登录状态
export function fetchLoginStatus(data) {
    return request({
        url: '/login/status',
        method: 'get',
        data: data
    })
}
// 首页-发现
export function fetchHomepageBlockPage(data) {
    return request({
        url: '/homepage/block/page',
        method: 'get',
        data: data
    })
}
// 首页-发现-圆形图标入口列表
export function fetchHomepageDragonBall(data) {
    return request({
        url: '/homepage/dragon/ball',
        method: 'get',
        data: data
    })
}
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

// 热搜列表(简略)
export function fetchSearchHot(data) {
    return request({
        url: '/search/hot',
        method: 'get',
        data: data
    })
}

// 歌单分类
export function fetchPlaylistCatlist(data) {
    return request({
        url: '/playlist/highquality/tags',
        method: 'get',
        data: data
    })
}
// 歌单 ( 网友精选碟 )
export function fetchTopPlaylist(data) {
    return request({
        url: '/top/playlist',
        method: 'get',
        data: data
    })
}
// 获取精品歌单
export function fetchTopPlaylistHighquality(data) {
    return request({
        url: '/top/playlist/highquality',
        method: 'get',
        data: data
    })
}

// 电台 banner
export function fetchDjBanner(data) {
    return request({
        url: '/dj/banner',
        method: 'get',
        data: data
    })
}
// 电台 - 推荐类型
export function fetchDjCategoryRecommend(data) {
    return request({
        url: '/dj/category/recommend',
        method: 'get',
        data: data
    })
}
// 电台 - 付费精选
export function fetchDjPaygift(data) {
    return request({
        url: '/dj/paygift',
        method: 'get',
        data: data
    })
}
// 电台个性推荐
export function fetchDjPersonalizeRecommend(data) {
    return request({
        url: '/dj/personalize/recommend',
        method: 'get',
        data: data
    })
}
// 电台 - 类别热门电台
export function fetchDjRadioHot(data) {
    return request({
        url: '/dj/radio/hot',
        method: 'get',
        data: data
    })
}
// 热门电台
export function fetchDjHot(data) {
    return request({
        url: '/dj/hot',
        method: 'get',
        data: data
    })
}

// 所有榜单
export function fetchToplist(data) {
    return request({
        url: '/toplist',
        method: 'get',
        data: data
    })
}
// 所有榜单内容摘要
export function fetchToplistDetail(data) {
    return request({
        url: '/toplist/detail',
        method: 'get',
        data: data
    })
}

// 歌手榜
export function fetchToplistArtist(data) {
    return request({
        url: '/toplist/artist',
        method: 'get',
        data: data
    })
}

// 新歌速递
export function fetchTopSong(data) {
    return request({
        url: '/top/song',
        method: 'get',
        data: data
    })
}
// 新碟上架
export function fetchTopAlbum(data) {
    return request({
        url: '/top/album',
        method: 'get',
        data: data
    })
}


// 获取歌单详情
export function fetchPlaylistDetail(data) {
    return request({
        url: '/playlist/detail',
        method: 'get',
        data: data
    })
}
// 歌单详情动态
export function fetchPlaylistDetailDynamic(data) {
    return request({
        url: '/playlist/detail/dynamic',
        method: 'get',
        data: data
    })
}
// 歌单评论
export function fetchCommentPlaylist(data) {
    return request({
        url: '/comment/playlist',
        method: 'get',
        data: data
    })
}
// 歌单收藏者
export function fetchPlaylistSubscribers(data) {
    return request({
        url: '/playlist/subscribers',
        method: 'get',
        data: data
    })
}

// 获取音乐 url
export function fetchSongUrl(data) {
    return request({
        url: '/song/url',
        method: 'get',
        data: data
    })
}

// 获取歌曲详情
export function fetchSongDetail(data) {
    return request({
        url: '/song/detail',
        method: 'get',
        data: data
    })
}
// 获取歌词
export function fetchLyric(data) {
    return request({
        url: '/lyric',
        method: 'get',
        data: data
    })
}
// 获取相似音乐
export function fetchSimiSong(data) {
    return request({
        url: '/simi/song',
        method: 'get',
        data: data
    })
}
// 相关歌单推荐
export function fetchRelatedPlaylist(data) {
    return request({
        url: '/related/playlist',
        method: 'get',
        data: data
    })
}
// 歌单评论
export function fetchCommentMusic(data) {
    return request({
        url: '/comment/music',
        method: 'get',
        data: data
    })
}

// 获取 mv 数据
export function fetchMvDetail(data) {
    return request({
        url: '/mv/detail',
        method: 'get',
        data: data
    })
}
// mv 地址
export function fetchMvUrl(data) {
    return request({
        url: '/mv/url',
        method: 'get',
        data: data
    })
}
// mv 评论
export function fetchCommentMv(data) {
    return request({
        url: '/comment/mv',
        method: 'get',
        data: data
    })
}
// 相似 mv
export function fetchSimiMv(data) {
    return request({
        url: '/simi/mv',
        method: 'get',
        data: data
    })
}

// 电台 - 详情
export function fetchDjDetail(data) {
    return request({
        url: '/dj/detail',
        method: 'get',
        data: data
    })
}
// 电台 - 节目
export function fetchDjProgram(data) {
    return request({
        url: '/dj/program',
        method: 'get',
        data: data
    })
}
// 电台 - 节目详情
export function fetchDjProgramDetail(data) {
    return request({
        url: '/dj/program/detail',
        method: 'get',
        data: data
    })
}
// 电台节目评论
export function fetchCommentDj(data) {
    return request({
        url: '/comment/dj',
        method: 'get',
        data: data
    })
}
// 电台订阅者列表
export function fetchDjSubscriber(data) {
    return request({
        url: '/dj/subscriber',
        method: 'get',
        data: data
    })
}