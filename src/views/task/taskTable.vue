<template>
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <div class="p-4 flex justify-between">
            <div>
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search" v-model="search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items">
                </div>
            </div>
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="handleAddtask">
                    <span>+</span>
                    Add task
                </button>
            </div>
        </div>
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500" v-loading="loading">
            <!-- table head -->
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">
                        <p class="inline-flex items-center">
                            Task
                            <button @click="sort('name')">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                                    fill="currentColor" viewBox="0 0 320 512">
                                    <path
                                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                </svg>
                            </button>
                        </p>
                    </th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Bench</th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">
                        <p class="inline-flex items-center">
                            Start time
                            <button @click="sort('start_time')">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true"
                                    fill="currentColor" viewBox="0 0 320 512">
                                    <path
                                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                </svg>
                            </button>
                        </p>
                    </th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Duration</th>
                    <!-- <th scope="col" class="px-6 py-4 font-bold text-gray-900">Tags</th> -->
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Comments</th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Created by</th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Status</th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900">Action</th>
                    <th scope="col" class="px-6 py-4 font-bold text-gray-900"></th>
                </tr>
            </thead>
            <!-- table body -->
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                <tr class="hover:bg-gray-50" v-for="item in filteredTasks" :key="filteredTasks?.indexOf(item)">
                    <!-- name -->
                    <td class="px-6 py-4 font-normal text-gray-900">
                        {{ item.name }}
                    </td>
                    <!-- bench -->
                    <td class="px-6 py-4">
                        <div class="relative">
                            <p class="p-1">
                                {{ item.executor_ip }}
                            </p>
                            <span class="absolute left-0 top-0 h-2 w-2 rounded-full ring ring-white"
                                :class="{ 'bg-green-400': item.executor_online === true, 'bg-gray-400': item.executor_online === false, hidden: item.executor_ip === undefined }"></span>
                        </div>
                    </td>
                    <!-- start time -->
                    <td class="px-6 py-4">{{ item.start_time }}</td>
                    <!-- duration -->
                    <td class="px-6 py-4">{{ item.duration }}</td>
                    <!-- tags -->
                    <!-- <td class="px-6 py-4">
                        <div class="flex gap-2">
                            <span
                                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                v-for="tag in item.tags" :key="item.tags?.indexOf(tag)">
                                {{ tag }}
                            </span>
                        </div>
                    </td> -->
                    <!-- comments -->
                    <td class="px-6 py-4">{{ item.comments }}</td>
                    <!-- created by -->
                    <td class="px-6 py-4">{{ item.created_by_account }}</td>
                    <!-- status -->
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-base font-semibold"
                            :class="[statusColor(item.status).fontColor, statusColor(item.status).bbgColor]">
                            {{ item.status }}
                        </span>
                    </td>
                    <!-- actions -->
                    <td class="px-6 py-4">
                        <button type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Run</button>
                        <button type="button"
                            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Stop</button>
                    </td>
                    <!-- task management -->
                    <td class="px-6 py-4">
                        <div class="flex justify-end gap-4">
                            <button x-data="{ tooltip: 'View' }" class="text-black" @click="handleView">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6" x-tooltip="tooltip">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                            <button x-data="{ tooltip: 'Edite' }" class="text-blue-500" @click="handleEdit(item)">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6" x-tooltip="tooltip">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button x-data="{ tooltip: 'Delete' }" class="text-red-500" @click="handleDelete(item.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6" x-tooltip="tooltip">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- pagination -->
        <div class="flex justify-end m-2">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                :page-sizes="[5, 10, 15, 20, 50, 100]" background layout="sizes, prev, pager, next" :total="total" />
        </div>

        <!-- dialog -->
        <el-dialog v-model="dialogVisible" :title="dialogTitle" width="30%" align-center draggable destroy-on-close>
            <task-form :task="taskItem"></task-form>
        </el-dialog>

    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { Task } from '@/types/agents'
import { statusColor } from '@/utils/color'
import taskForm from './taskForm.vue'
import { fetchTaskList, deleteTask } from '@/api/agent'
// import { tasks } from './mock' // mock data for development

const dialogVisible = ref<boolean>(false)
const dialogTitle = ref<string>()
const search = ref<string>('')
const loading = ref<boolean>(false)
const currentSort = ref<keyof Task>('name')
const currentSortDir = ref<string>('asc')
const pageSize = ref<number>(5)
const currentPage = ref<number>(1)
const total = ref<number>(0)
const tasks = ref<Task[]>()
const taskItem = ref<Task>()

onMounted(async () => await startSetInterval())

watch([() => currentPage.value, () => pageSize.value], async () => await getTasks())

const taskQuery = computed(() => {
    return {
        page: currentPage.value,
        limit: pageSize.value,
        name: undefined,
        ip: undefined,
        location: undefined,
        online: undefined,
        ordering: 'id'
    }
})

function sort(sortKey: keyof Task) {
    if (sortKey === currentSort.value) {
        currentSortDir.value = currentSortDir.value === 'asc' ? 'desc' : 'asc';
    }
    currentSort.value = sortKey;
}

const sortedTasks = computed(() => {
    return tasks?.value?.sort((a: Task, b: Task) => {
        let modifier = 1;
        if (currentSortDir.value === 'desc') modifier = -1;
        // Type narrowing does not work on a property of an object without assigning the property to an intermediate variable.
        // assigning to a constant to workaround
        const value1 = a[currentSort.value]
        const value2 = b[currentSort.value]
        if (value1 && value2) return value1 > value2 ? 1 * modifier : -1 * modifier
        return 0;
    })
    // for client-side pagination
    // .filter((row, index) => {
    //     let start = (currentPage.value - 1) * pageSize.value;
    //     let end = currentPage.value * pageSize.value;
    //     if (index >= start && index < end) return true;
    // });
})

const filteredTasks = computed(() => {
    return sortedTasks?.value?.filter(task => {
        const name = task.name.toString().toLowerCase();
        const bench = task.executor_ip?.toLowerCase();
        const created_by = task.created_by_account?.toLowerCase()
        const status = task.status.toLowerCase()
        const comments = task.comments?.toLowerCase()
        const searchTerm = search.value.toLowerCase();

        return name.includes(searchTerm) ||
            status.includes(searchTerm) ||
            bench?.includes(searchTerm) ||
            created_by?.includes(searchTerm) ||
            comments?.includes(searchTerm);
    })
})

async function getTasks() {
    try {
        const response = await fetchTaskList(taskQuery.value)
        tasks.value = response.data.results
        total.value = response.data.count
    } catch {
        throw 'Fail to get task list!'
    }
}

async function startSetInterval() {
    await getTasks()
    setInterval(async () => {
        await getTasks()
    }, 2000)
}

async function handleDelete(id: string | number) {
    ElMessageBox.confirm('Are you sure to delete this task?')
        .then(async () => {
            await deleteTask(id)
            ElMessage.success('Delete task successfully!')
            await getTasks()
        })
        .catch(() => {
            // catch error
        })
}

async function handleAddtask() {
    taskItem.value = undefined
    dialogTitle.value = "Add a task"
    dialogVisible.value = true
}

async function handleEdit(task: Task) {
    taskItem.value = task
    dialogTitle.value = "Edit task"
    dialogVisible.value = true
}

async function handleView() {
}

</script>

<style scoped>

</style>