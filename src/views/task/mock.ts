import { ref } from 'vue'
import { Task } from '@/types/agents'

export const tasks = ref<Task[]>([
    {
        id: 1,
        duration: "1066.00 m",
        name: "test2",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Error",
        start_time: "2023-02-08T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: true,
        created_by: 1,
        created_by_account: "maple",
        tags: ["daily", "scheduled"],
        comments: "qvta"
    },
    {
        id: 2,
        duration: "1066.00 m",
        name: "random",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Running",
        start_time: "2023-02-07T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["weekly", "stability"],
        comments: "Do not terminate!"
    },
    {
        id: 3,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 4,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 5,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 5,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 6,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 7,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Completed",
        start_time: "2023-02-09T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    },
    {
        id: 8,
        duration: "1066.00 m",
        name: "test1",
        creation_time: "2023-02-08T08:17:08.762333Z",
        status: "Canceled",
        start_time: "2023-02-06T16:59:00Z",
        end_time: null,
        schedule_time: null,
        executor: 3,
        executor_ip: "10.161.229.42",
        executor_online: false,
        created_by: 1,
        created_by_account: "maple",
        tags: ["today", "name"],
        comments: "qvta"
    }
])