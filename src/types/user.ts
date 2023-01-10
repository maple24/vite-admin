type role = 'admin' | 'visitor' | 'editor';

interface UserInfo {
    name: string
    roles: role[]
    projectDomains: []
    projects: []
    is_superuser: boolean
}

interface User {
    id: number
    account: string | null
    username: string | null
    email: string | null
    office: string | null
    last_login: string | null
    roles: Roles[]
    is_superuser: boolean
}

interface Role {
    user: number
    role: role
}

interface Roles extends Role {
    id: number
}

export type { UserInfo, User, Role };
