<template>
    <div class="flex justify-center m-2">
        <div>
            <p class="font-bold">Device List</p>
            <div class="flex justify-end my-2">
                <el-button type="primary" @click="handleCreate">+ New device</el-button>
            </div>
            <el-table :data="filterTableData" style="width: auto" fit border>
                <el-table-column label="Name" prop="name" width="200" />
                <el-table-column label="Type" prop="type" width="200" />
                <el-table-column label="Comments" prop="comments" width="200" />
                <el-table-column align="comments" width="200">
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
        </div>
        <el-dialog v-model="dialogVisible" title="Device" width="30%" align-center draggable destroy-on-close>
            <device-form :device="deviceItem" @closeDialog="dialogVisible = false"></device-form>
        </el-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { fetchDeviceList, deleteDevice } from '@/api/agent'
import { ElMessageBox, ElMessage } from 'element-plus'
import { Device } from '@/types/agents'
import deviceForm from './deviceForm.vue'

const tableData = ref<Device[]>()
const search = ref('')
const dialogVisible = ref(false)
const deviceItem = ref<Device>()
onMounted(async () => {
    const response = await fetchDeviceList()
    tableData.value = response.data
})

const filterTableData = computed(() =>
    tableData.value?.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: Device) => {
    deviceItem.value = row
    dialogVisible.value = true
}
const handleDelete = (index: number, row: Device) => {
    ElMessageBox.confirm('Are you sure to delete this device?')
        .then(async () => {
            await deleteDevice(row.id)
            window.location.reload()
            ElMessage.success('Delete device successfully!')
        })
        .catch(() => {
            // catch error
        })
}
const handleCreate = () => {
    deviceItem.value = undefined
    dialogVisible.value = true
}

</script>