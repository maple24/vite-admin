import request from '@/utils/request';

export async function fetchPosts() {
  return request({
    url: '/todos/1',
    method: 'get',
  });
}
