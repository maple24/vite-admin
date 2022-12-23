import request from '@/utils/request';
import loginformInterface from '@/types/loginform';
import { AxiosResponse } from 'axios';
type token = {
    token: string
}

type authToken = {
    refresh: string,
    access: string
}
  
export function login(data: loginformInterface) {
    return request({
        url:'/api/v1/auth/login/' as string,
        method: <string>'post',
        data
      });
}

export function verifyToken(data: token) {
    return request({
        url: '/api/v1/auth/api-token-verify/' as string,
        method: <string>'post',
        data
    })
}

export function refreshToken(data: token) {
    return request({
        url: '/api/v1/auth/api-token-refresh/' as string,
        method: <string>'post',
        data
    })    
}

export function getUserList() {
    return request({
        url: '/api/v1/auth/user' as string,
        method: <string>'get',     
    })
}