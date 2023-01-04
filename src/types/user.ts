type role = 'admin' | 'visitor';

interface userInfo {
    name: string
    roles: role[]
    projectDomains: []
    projects: []
    is_superuser: boolean
}
export type { role, userInfo };
