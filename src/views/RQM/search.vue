<template>
    <div>
        <div class="flex justify-center">
            <select id="server"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="type">
                <option value="default" selected>Choose a resourcetype</option>
                <option v-for="(item, index) in resourceTypes" :value="item" :key="index">
                    {{ item.toUpperCase() }}
                </option>
            </select>
            <button
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="fetchRQM(type)">
                Search
            </button>
        </div>
        <div class="flex justify-center" :class="{ hidden: isHidden }">
            <el-table :data="filterTableData" style="width: auto;" v-loading.fullscreen.lock="loading" border>
                <el-table-column label="ID" prop="id" width="120" />
                <el-table-column label="Name" prop="name" width="600" />
                <el-table-column align="right" width="200">
                    <template #header>
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                            :disabled="type === 'testcase' ? false : true">Check</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                            :disabled="!store.roles.includes('admin')">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="flex justify-center" :class="{ hidden: isHidden }">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                :page-sizes="[5, 10, 15, 20, 50, 100]" layout="sizes, prev, pager, next" :total="total" />
        </div>
        <el-dialog v-model="dialogVisible" title="TestScript" width="50%">
            <el-form label-position="left" label-width="100px" :model="formData" style="max-width: 1000px">
                <el-form-item label="Title">
                    <el-input v-model="formData.title" />
                </el-form-item>
                <el-form-item v-for="(item, index) in formData.scripts" :label="(index + 1).toString()" :value="item"
                    :key="index">
                    <span class="ml-3 w-35 text-green-600 inline-flex items-center">Description</span>
                    <el-input v-model="item.description" type="textarea" :autosize="{ minRows: 1, maxRows: 5 }" />
                    <span class="ml-3 w-35 text-red-600 inline-flex items-center">ExpectedResult</span>
                    <el-input v-model="item.expectedResult" type="textarea" :autosize="{ minRows: 1, maxRows: 5 }" />
                </el-form-item>
            </el-form>
            <div class="flex justify-end">
                <el-form-item>
                    <el-button :disabled="!store.roles.includes('admin')" @click="handleAddStep">Add Step</el-button>
                    <el-button :disabled="!store.roles.includes('admin')" @click="handleReduceStep">Reduce
                        Step</el-button>
                    <el-button type="primary" @click="handleUpdate"
                        :disabled="!store.roles.includes('admin') || isChange">Update</el-button>
                    <el-button type="info" @click="dialogVisible = false">Cancel</el-button>
                </el-form-item>
            </div>
        </el-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, watch, reactive } from 'vue'
import { getAllResource, getTestscript, updateTestscript } from '@/api/ibmrqm';
import { resourceInterface, resource, script } from '@/types/rqmresource';
import { ElMessageBox, ElMessage } from 'element-plus'
import { isObjectEqual } from '@/utils/common'
import { useUserStore } from '@/store/user';
import { cloneDeep } from 'lodash'
const store = useUserStore()

const currentPage = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(1)
const formData = reactive({
    id: '',
    title: '',
    scripts: <script[]>[]
})
const tmp = {
    title: '',
    scripts: <script[]>[]
}
const type = ref<string>('default');
const resourceTypes: string[] = ['testcase', 'testscript', 'testsuite', 'buildrecord'];
const data = ref<resourceInterface>();
const tableData = ref<resource[]>()
const loading = ref<boolean>()
const dialogVisible = ref<boolean>(false)
const search = ref('')

const isHidden = computed(() => tableData.value ? false : true)
const isChange = computed(() =>
    formData.title === tmp.title && isObjectEqual(formData.scripts, tmp.scripts)
)

watch([() => currentPage.value, () => pageSize.value], () => {
    if (data.value) tableData.value = data.value['data'].slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
})

async function fetchRQM(resourceType: string) {
    if (resourceTypes.indexOf(resourceType) === -1) {
        ElMessage.error('Please select a correct type!')
        return
    }
    loading.value = true
    try {
        const response = await getAllResource(resourceType);
        data.value = response.data;
        if (data.value) {
            total.value = data.value['number']
            tableData.value = data.value['data'].slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
        }
    } finally {
        loading.value = false
    }
}

const filterTableData = computed(() =>
    tableData.value?.filter(
        (data) =>
            !search.value ||
            data.name?.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = async (index: number, row: resource) => {
    loading.value = true
    try {
        const response = await getTestscript(row.id)
        dialogVisible.value = true
        // copy data
        formData.id = row.id.slice()
        formData.title = response.data.title.slice()
        formData.scripts = [...response.data.scripts]
        tmp.title = response.data.title.slice()
        tmp.scripts = cloneDeep(response.data.scripts)
    } finally {
        loading.value = false
    }
}
const handleDelete = (index: number, row: resourceInterface) => {
    console.log(index, row)
}
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

const handleUpdate = async () => {
    const data = {
        title: formData.title,
        scripts: formData.scripts
    }
    loading.value = true
    try {
        await updateTestscript(formData.id, data)
        dialogVisible.value = false
    } finally {
        await fetchRQM('testcase')
    }
    ElMessage.success('Update successfully!')
}

const handleAddStep = () => {
    formData.scripts.push({
        'description': '',
        'expectedResult': ''
    })
}

const handleReduceStep = () => {
    formData.scripts.pop()
}

</script>