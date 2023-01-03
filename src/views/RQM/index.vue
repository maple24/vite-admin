<template>
    <div>
        <div class="flex">
            <select id="server"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="type">
                <option selected>Choose a resourcetype</option>
                <option v-for="(item, index) in resourceTypes" :value="item" :key="index">
                    {{ item }}
                </option>
            </select>
            <button
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="fetchRQM(type)">
                Search
            </button>
        </div>
        <el-table :data="filterTableData" style="width: 100%" v-loading="loading">
            <el-table-column label="ID" prop="id" width="120" />
            <el-table-column label="Name" prop="name" width="500" />
            <el-table-column align="right" width="200">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="small" type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
            :page-sizes="[100, 200, 300, 400]" layout="sizes, prev, pager, next" :total="1000" />
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import { getAllResource } from '@/api/ibmrqm';
import { resourceInterface } from '@/types/rqmresource';

const currentPage = ref(1)
const pageSize = ref(10)

const type = ref<string>('');
const resourceTypes: string[] = ['testcase', 'testscript', 'testsuite'];
const tableData = ref<resourceInterface>();
const loading = ref<boolean>()

async function fetchRQM(resourceType: string) {
    loading.value = true
    // const response = await getAllResource(resourceType);
    // tableData.value = response.data;
    tableData.value = {
        'success': true,
        'message': 'helloworld',
        'number': 10,
        'data': [
            {
                'id': '1',
                'name': 'hello'
            },
            {
                'id': '2',
                'name': 'maple'
            },
            {
                'id': '3',
                'name': 'asd'
            },
            {
                'id': '4',
                'name': '231'
            },
            {
                'id': '5',
                'name': 'hello'
            },
            {
                'id': '6',
                'name': 'hello'
            },
            {
                'id': '7',
                'name': 'hello'
            },
            {
                'id': '8',
                'name': 'hello'
            },
            {
                'id': '9',
                'name': 'hello'
            },
            {
                'id': '10',
                'name': 'hello'
            }
        ]
    }
    loading.value = false
}

const search = ref('')
const filterTableData = computed(() =>
    tableData.value?.data.filter(
        (data) =>
            !search.value ||
            data.name?.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: resourceInterface) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: resourceInterface) => {
    console.log(index, row)
}

</script>