import request from '@/utils/request';
import loginformInterface from '@/types/loginform';
import { Role } from '@/types/user';

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
        url: '/api/v1/auth/token-verify/' as string,
        method: <string>'post',
        data
    })
}

export function refreshToken(data: token) {
    return request({
        url: '/api/v1/auth/token-refresh/' as string,
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

export function getUserInfo() {
    return request({
        url: '/api/v1/auth/user/info' as string,
        method: <string>'get'
    })
}

export function deleteUser(id: string | number) {
  return request({
    url: `/api/v1/auth/user/${id}`,
    method: 'delete',
  })
}

export function getUserRole(id: string | number) {
    return request({
      url: `api/v1/auth/userrole/${id}`,
      method: 'get',
    })
  }
  
  export function deleteUserRole(id : string | number) {
    return request({
      url: `api/v1/auth/userrole/${id}`,
      method: 'delete',
    })
  }
  
  export function createUserRole(data: Role) {
    return request({
      url: 'api/v1/auth/userrole/',
      method: 'post',
      data
    })
  }