import request from '@/utils/request';

export function fetchLatestVersion() {
  return request({
    url: '/api/artifactory/latest' as string,
    method: 'get',
  });
}
