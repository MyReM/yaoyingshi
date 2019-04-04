import request from '../config/axiosconfig'

export function getAllBox() {
    return request({
        url: '/boxCollect/getAllBox',
        method: 'get'
    })
} 

export function getAllTechnology() {
    return request({
        url: '/boxCollect/getAllTechnology',
        method: 'get'
    })
} 
