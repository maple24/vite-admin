import request from '@/utils/request';

export function fetchAgentList() {
    return request({
        url: '/api/v1/agent/executor' as string,
        method: 'get',
    });
}