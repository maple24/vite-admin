interface Agent {
    id: number,
    online: boolean,
    name: string,
    hostname: string,
    ip: string,
    creation_time: string,
    last_online_time?: string,
    comments?: string,
    location?: string
}

interface Task {
    id: number,
    duration: string | null,
    name: string,
    creation_time: string | null,
    status: string,
    start_time: string | null,
    end_time: string | null,
    scheduled_time: string | null,
    comments: string | null,
    executor: number | null,
    created_by: number | null,
    tags?: string[],
    created_by_account: string | null,
    executor_ip: string | null,
    executor_online: boolean,
}

export type { Agent, Task }