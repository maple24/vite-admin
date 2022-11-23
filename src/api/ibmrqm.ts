import request from '@/utils/request';

export function fetchTestCase(resourceType: string) {
  return request({
    url: '/api/rqm/' + resourceType,
    // url: 'http://localhost:8000/rqm/' + resourceType,
    method: 'get',
  });
}
