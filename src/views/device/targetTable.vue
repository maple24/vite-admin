<template>
    <div class="flex justify-center m-2">
        <div>
            <p class="font-bold">Target on Agent</p>
            <div class="flex justify-between my-2">
                <el-select v-model="executor" placeholder="Select an agent">
                    <el-option v-for="item in agents" :key="item.id" :label="item.hostname" :value="item.id" />
                </el-select>
                <el-button type="primary" @click="handleCreate">+ New target</el-button>
            </div>
            <el-table :data="filterTableData" style="width: auto" fit border>
                <el-table-column label="Agent" prop="executor_name" width="200" />
                <el-table-column label="Device" prop="device_name" width="200" />
                <el-table-column label="Status" prop="status" width="200" />
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
        <el-dialog v-model="dialogVisible" title="Target" width="30%" align-center draggable destroy-on-close>
            <target-form :target="targetItem" @closeDialog="dialogVisible = false"></target-form>
        </el-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, onMounted, watch } from 'vue'
import { fetchAgentList, fetchTargetList } from '@/api/agent'
import { Agent, Target } from '@/types/agents';
import targetForm from './targetForm.vue';

const tableData = ref<Target[]>()
const executor = ref('')
const agents = ref<Agent[]>()
const dialogVisible = ref<boolean>(false)
const targetItem = ref<Target>()
const search = ref('')

onMounted(async () => {
    const agentList = await fetchAgentList({})
    agents.value = agentList.data
    const targetList = await fetchTargetList({})
    tableData.value = targetList.data
})

watch(() => executor.value, async () => {
    const response = await fetchTargetList({ executor: executor.value })
    tableData.value = response.data
})

const filterTableData = computed(() =>
    tableData.value?.filter(
        (data) =>
            !search.value ||
            data.device_name?.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: Target) => {
    targetItem.value = row
    dialogVisible.value = true
}
const handleDelete = (index: number, row: Target) => {
    console.log(index, row)
}
const handleCreate = () => {
    targetItem.value = undefined
    dialogVisible.value = true
}

</script>