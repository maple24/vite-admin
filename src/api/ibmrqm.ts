import request from '@/utils/request';

export function getAllResource(resourceType: string) {
  return request({
    url: `/api/rqm/allresources/${resourceType}`,
    // url: 'http://localhost:8000/rqm/' + resourceType,
    method: 'get',
  });
}
