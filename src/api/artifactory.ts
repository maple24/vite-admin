import request from '@/utils/request';

export function fetchLatestVersion() {
  return request({
    url: 'http://127.0.0.1:8000/artifactory/latest' as string,
    method: 'get',
  });
}
