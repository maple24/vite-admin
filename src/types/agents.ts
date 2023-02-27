interface Agent {
    id: number,
    online: boolean,
    name: string,
    hostname: string,
    ip: string,
    creation_time: string,
    last_online_time?: string,
    comments?: string,
    location?: string,
    scripts?: string
}

interface Target {
    id: number,
    name: string,
    comments?: string,
    is_deleted?: boolean
}

interface Task {
    id: number,
    name: string,
    status: string,
    start_time?: string | null,
    end_time?: string | null,
    comments?: string | null,
    executor?: number | null,
    target?: number | null,
    reason?: string | null,
    is_scheduled?: boolean,
    schedule_time?: string | null,
    script?: string,
    params?: string,

    target_name?: string | null,
    duration?: string | null,
    creation_time?: string | null,
    created_by?: number | null,
    tags?: string[],
    created_by_account?: string | null,
    executor_ip?: string | null,
    executor_online?: boolean,
}

export type { Agent, Task, Target }