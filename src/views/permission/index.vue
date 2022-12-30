<template>
    <div>
        <el-table :data="filterTableData" style="width: 100%">
            <el-table-column label="Account" prop="account" width="200" />
            <el-table-column label="Username" prop="username" width="120" />
            <el-table-column label="Email" prop="email" width="200" />
            <el-table-column label="Office" prop="office" width="120" />
            <el-table-column label="Last Login" prop="last_login" width="500" />
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
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { getUserList } from '@/api/user';
interface User {
    account: string | null
    username: string | null
    email: string | null
    office: string | null
    last_login: string | null
}
const tableData = ref<User[]>();

onMounted(async () => {
    const response = await getUserList()
    tableData.value = response.data
})

const search = ref('')
const filterTableData = computed(() =>
    tableData.value?.filter(
        (data) =>
            !search.value ||
            data.username?.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

</script>