import request from '@/utils/request';
import { Task } from '@/types/agents'


export function fetchAgentList() {
    return request({
        url: '/api/v1/agent/executor' as string,
        method: 'get',
    });
}

export const RDPURL = (ip: string | number) => {
    return `/api/v1/agent/executor/${ip}/rdp`
}

export function fetchTaskList(query: {}) {
    return request({
        url: '/api/v1/agent/task' as string,
        method: 'get',
        params: query
    });
}

export function createTask(data: Task) {
    return request({
        url: '/api/v1/agent/task/' as string,
        method: 'post',
        data
    });
}

export function deleteTask(id: number | string) {
    return request({
        url: `/api/v1/agent/task/${id}` as string,
        method: 'delete',
    });
}

export function getTask(id: number | string) {
    return request({
        url: `/api/v1/agent/task/${id}` as string,
        method: 'get',
    });
}

export function updateTask(id: number | string, data: Task) {
    return request({
        url: `/api/v1/agent/task/${id}/` as string,
        method: 'put',
        data
    });
}