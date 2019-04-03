import request from '../config/axiosconfig'

export function getAll() {
    return request({
        url: '/boxCollect/getAll',
        method: 'get'
    })
} 
