import request from '@/utils/request';

export function fetchTestCase(resourceType: string) {
  return request({
    url: 'http://127.0.0.1:8000/rqm/' + resourceType,
    method: 'get',
  });
}
