import request from '@/utils/request';
import { testScript } from '@/types/rqmresource';

export function getAllResource(resourceType: string) {
  return request({
    url: `/api/rqm/allresources/${resourceType}`,
    method: 'get',
  });
}

export function getTestscript(id: string) {
  return request({
    url: `/api/rqm/testscript/${id}`,
    method: 'get',
  });
}

export function updateTestscript(id: string, data: testScript) {
  return request({
    url: `/api/rqm/testscript/${id}`,
    method: 'put',
    data
  });
}
