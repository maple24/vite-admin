interface Agents {
    id: number,
    online: boolean,
    name: string,
    hostname: string,
    ip: string,
    created_time: string,
    last_online_time?: string,
    comments?: string,
    location?: string
}

export type { Agents }