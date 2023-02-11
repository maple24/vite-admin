<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" size="default"
        status-icon>
        <el-form-item label="Name" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>

        <el-form-item label="Agent" prop="executor">
            <el-select v-model="ruleForm.executor" placeholder="Agent">
                <el-option v-for="item in agents" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>


        <el-form-item label="Is scheduled?" prop="is_scheduled">
            <el-switch v-model="ruleForm.is_scheduled" />
        </el-form-item>

        <!-- <el-form-item label="Plan" required>
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date" placeholder="Pick a date"
                        style="width: 100%" />
                </el-form-item>
            </el-col> -->
        <!-- <el-col class="text-center" :span="2">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="Pick a time"
                        style="width: 100%" />
                </el-form-item>
            </el-col> -->
        <!-- </el-form-item> -->

        <el-form-item label="Comments" prop="comments">
            <el-input v-model="ruleForm.comments" type="textarea" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'
import { createTask } from '@/api/agent';
import { Agent } from '@/types/agents'

const ruleFormRef = ref<FormInstance>()
const props = defineProps<{
    agents: Agent[] | undefined
}>()
const ruleForm = reactive({
    id: undefined as number | undefined,
    name: '' as string,
    executor: undefined as number | undefined,
    date1: '',
    date2: '',
    is_scheduled: false,
    tags: [],
    comments: '',
})

const agents = computed(() => props.agents)

const rules = reactive<FormRules>({
    name: [
        { required: true, message: 'Please input task name', trigger: 'blur' },
        { min: 1, max: 10, message: 'Length should be 1 to 10', trigger: 'blur' },
    ],
    executor: [
        {
            required: true,
            message: 'Please select agent',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    tags: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    comments: [
        { required: false, message: 'Please input comments', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ElMessageBox.confirm('Are you sure to create this task?')
                .then(async () => {
                    const data = {
                        id: 0, // placeholder
                        name: ruleForm.name,
                        status: 'Idling', // default
                        executor: ruleForm.executor
                    }
                    await createTask(data)
                    ElMessage.success('Create task successfully!')
                    window.location.reload()
                })
                .catch(() => {
                    // catch error
                })
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>