import request from '@/utils/request';
import type { UploadUserFile } from 'element-plus'

export function uploadFile(data: UploadUserFile) {
  return request({
    url: '/api/v1/app/file',
    method: 'post',
    data
  });
}

export function downloadFile(filename: string) {
  return request({
    url: `/api/v1/app/file/${filename}`,
    method: 'get',
  });
}