<template>
    <div class="flex justify-center">
        <el-table :data="filterTableData" style="width: auto" size="small" border fit v-loading="loading">
            <el-table-column label="Account" prop="account" width="350" />
            <el-table-column label="Username" prop="username" width="100" />
            <el-table-column label="Email" prop="email" width="250" />
            <el-table-column label="Office" prop="office" width="60" />
            <el-table-column label="Last Login" prop="last_login" width="200" />
            <el-table-column label="Role" prop="tableRole" width="150" />
            <el-table-column align="right" width="200">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                        :disabled="!store.is_superuser">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="UserPermission" v-model="dialogVisible" width="30%">
            <el-form :model="form" label-width="120px">
                <el-form-item label="Account">
                    <el-input v-model="form.account" :disabled="true" />
                </el-form-item>
                <el-form-item label="Email">
                    <el-input v-model="form.email" :disabled="true" />
                </el-form-item>
                <el-form-item label="Username">
                    <el-input v-model="form.username" :disabled="true" />
                </el-form-item>
                <el-form-item label="Role">
                    <el-checkbox-group v-model="form.role">
                        <el-checkbox label="admin" name="type"></el-checkbox>
                        <el-checkbox label="visitor" name="type"></el-checkbox>
                        <el-checkbox label="editor" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div class="flex justify-end">
                <el-form-item>
                    <el-button type="primary" @click="handleUpdate">Update</el-button>
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                </el-form-item>
            </div>
        </el-dialog>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { getUserList, createUserRole, deleteUserRole, deleteUser } from '@/api/user';
import { User } from '@/types/user';
import { ElMessageBox, ElMessage } from 'element-plus'
import { useUserStore } from '@/store/user';
const store = useUserStore()

type role = 'admin' | 'visitor' | 'editor';

interface TableUser extends User {
    tableRole?: string
    role?: role[]
}

const tableData = ref<TableUser[]>();
const loading = ref<boolean>(false)
const search = ref<string>('')
const dialogVisible = ref<boolean>(false)
const form = ref<TableUser>({
    id: -1,
    account: 'hello',
    username: '',
    email: '',
    office: '',
    last_login: '',
    roles: [],
    is_superuser: false
})

async function getUserInfo() {
    try {
        loading.value = true
        const response = await getUserList()
        tableData.value = [...response.data]
        tableData.value.forEach(user => {
            let roles = [] as role[];
            user.roles?.forEach(role => {
                roles.indexOf(role.role) === -1 ? roles.push(role.role) : console.log('This role already exists')
            })
            user.tableRole = roles.join(' | ')
            user.role = roles
        });
        loading.value = false
    } catch (e) {
        console.log(e)
        loading.value = false
    }
}

onMounted(async () => {
    await getUserInfo()
})

const filterTableData = computed(() =>
    tableData.value?.filter(
        (data) =>
            !search.value ||
            data.username?.toLowerCase().includes(search.value.toLowerCase())
    )
)

const handleEdit = (index: number, row: TableUser) => {
    dialogVisible.value = true
    form.value = { ...row }
}

const handleDelete = (index: number, row: TableUser) => {
    ElMessageBox.confirm(
        'This action will permanently delete the user. Continue?',
        'Warning',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
        }
    )
        .then(async (action) => {
            if (action === 'confirm') {
                await deleteUser(row.id)
                await getUserInfo()
                ElMessage({
                    type: 'success',
                    message: 'Delete completed',
                })
            }
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Delete canceled',
            })
        })
}

const handleUpdate = async () => {
    dialogVisible.value = false
    try {
        // foreach does not support await since it does not return value
        loading.value = true

        if (form.value.role && form.value.id) {
            for (const ro of form.value.role) {
                let obj = form.value.roles.find(e => e.role === ro);
                obj === undefined ? await createUserRole({ 'user': form.value.id, 'role': ro }) : console.log('role exists');
            }
            for (const e of form.value.roles) {
                form.value.role.indexOf(e.role) === -1 ? await deleteUserRole(e.id) : console.log('role exists');
            }
            window.location.reload()
        }
    } catch (e) {
        console.log(e);
    }
}

</script>