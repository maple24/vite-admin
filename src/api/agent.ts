import request from '@/utils/request';

export function fetchAgentList() {
    return request({
        url: '/api/v1/agent/executor' as string,
        method: 'get',
    });
}


// export function downloadRDP(ip: string) {
//     return request({
//         url: `/api/v1/agent/executor/${ip}/rdp`,
//         method: 'get',
//     });
// }

export const RDPURL = (ip: string | number) => {
    return `/api/v1/agent/executor/${ip}/rdp`
}

export function fetchTaskList() {
    return request({
        url: '/api/v1/agent/task' as string,
        method: 'get',
    });
}