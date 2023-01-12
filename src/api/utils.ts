import request from '@/utils/request';
import type { UploadUserFile } from 'element-plus'

export function uploadFile(data: UploadUserFile) {
  return request({
    url: '/api/rqm/upload',
    method: 'post',
    data
  });
}

export function downloadFile(filename: string) {
  return request({
    url: `/api/rqm/download/${filename}`,
    method: 'get',
  });  
}