import request from '@/utils/request';

export function fetchTestCase(resourceType: string) {
  return request({
    url: '/api/rqm/' + resourceType,
    method: 'get',
  });
}
