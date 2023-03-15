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

        <el-form-item label="Target" prop="target">
            <el-select v-model="ruleForm.target" placeholder="Target">
                <el-option v-for="item in targetsOption" :key="item.id" :label="item.device_name"
                    :value="item.id"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="Script" prop="script">
            <el-select v-model="ruleForm.script" placeholder="Script">
                <el-option v-for="item in scripts" :key="item.name" :label="item.name" :value="item.name"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="Params" prop="params">
            <el-input v-model="ruleForm.params" type="text" />
            <p class="text-gray-400 text-sm">eg. "-f log.txt -v 1"</p>
        </el-form-item>

        <el-form-item label="Is scheduled?" prop="is_scheduled">
            <el-switch v-model="ruleForm.is_scheduled" />
        </el-form-item>

        <el-form-item label="Plan" v-show="ruleForm.is_scheduled">
            <input type="date" v-model="ruleForm.date" class="border rounded-md">
            <span class="text-gray-500 mx-6">-</span>
            <input type="time" v-model="ruleForm.time" class="border rounded-md">
        </el-form-item>

        <el-form-item label="Comments" prop="comments">
            <el-input v-model="ruleForm.comments" type="textarea" />
        </el-form-item>

        <div :class="{ hidden: props.task !== undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Create
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </div>
        <div :class="{ hidden: props.task === undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef, props.task!.id)">
                    Update
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">
                    Undo
                </el-button>
            </el-form-item>
        </div>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'
import { createTask, fetchAgentList, updateTask, fetchTargetList } from '@/api/agent';
import { Agent, Task, Target } from '@/types/agents'

const agents = ref<Agent[]>()
const targets = ref<Target[]>()
const ruleFormRef = ref<FormInstance>()
const props = defineProps<{
    task: Task | undefined
}>()
const emit = defineEmits<{
    (e: 'closeDialog'): void
}>()

const scripts = computed(() => {
    if (agents.value && ruleForm.executor) return JSON.parse(agents.value[ruleForm.executor - 1].scripts!)
})

const targetsOption = computed(() => {
    if (targets.value && ruleForm.executor) {
        return targets.value.filter((currentValue) => {
            return currentValue.executor === ruleForm.executor
        })
    }
})
// computed value cannot be v-model, since it is passive value and not gonna be changed
// current solution: destroy dialog when closing, so every time a new dialog will be mounted
// otherwise the props has to been watched to make changes
const ruleForm = reactive({
    id: props.task?.id as number,
    name: props.task?.name as string,
    executor: props.task?.executor as number | undefined,
    target: props.task?.target as number | undefined,
    date: undefined,
    time: undefined,
    is_scheduled: props.task?.is_scheduled,
    tags: [],
    comments: props.task?.comments,
    script: props.task?.script,
    params: props.task?.params
})

onMounted(async () => await getList())

async function getList() {
    const agentList = await fetchAgentList({ 'ordering': 'id' })
    agents.value = agentList.data
    const targetList = await fetchTargetList({})
    targets.value = targetList.data
}

const submitForm = async (formEl: FormInstance | undefined, id: string | number | undefined = undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ElMessageBox.confirm('Are you sure to create/update this task?')
                .then(async () => {
                    const data = {
                        id: ruleForm.id,
                        name: ruleForm.name,
                        status: 'Idling', // default
                        executor: ruleForm.executor,
                        comments: ruleForm.comments,
                        target: ruleForm.target,
                        is_scheduled: ruleForm.is_scheduled,
                        schedule_time: (ruleForm.date && ruleForm.time) ? (ruleForm.date + ' ' + ruleForm.time) : undefined,
                        script: ruleForm.script,
                        params: ruleForm.params,
                        reason: null
                    }
                    id === undefined ? await createTask(data) : await updateTask(id, data)
                    ElMessage.success('Create/Update task successfully!')
                    emit("closeDialog")
                    // window.location.reload()
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
    target: [
        {
            required: true,
            message: 'Please select target',
            trigger: 'change',
        },
    ],
    script: [
        {
            required: true,
            message: 'Please select script',
            trigger: 'change',
        },
    ],
    date: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    time: [
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
</script>