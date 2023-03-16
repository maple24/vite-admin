<template>
    <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm" size="default" status-icon>
        <el-form-item label="Device" prop="device">
            <el-select v-model="ruleForm.device" placeholder="Select a device">
                <el-option v-for="item in devices" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="Agent" prop="executor">
            <el-select v-model="ruleForm.executor" placeholder="Select an agent">
                <el-option v-for="item in agents" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
        </el-form-item>

        <div :class="{ hidden: props.target !== undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Create
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </div>
        <div :class="{ hidden: props.target === undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef, props.target!.id)">
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
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'
import { createTarget, updateTarget, fetchAgentList, fetchDeviceList } from '@/api/agent'
import { Target, Agent, Device } from '@/types/agents'

const ruleFormRef = ref<FormInstance>()
const props = defineProps<{
    target: Target | undefined
}>()
const emit = defineEmits<{
    (e: 'closeDialog'): void
}>()
const agents = ref<Agent[]>()
const devices = ref<Device[]>()

onMounted(async () => {
    const agentList = await fetchAgentList({})
    agents.value = agentList.data
    const deviceList = await fetchDeviceList()
    devices.value = deviceList.data
})

// computed value cannot be v-model, since it is passive value and not gonna be changed
// current solution: destroy dialog when closing, so every time a new dialog will be mounted
// otherwise the props has to been watched to make changes
const ruleForm = reactive({
    id: props.target?.id as number,
    device: props.target?.device as number,
    executor: props.target?.executor as number,
})

const submitForm = async (formEl: FormInstance | undefined, id: string | number | undefined = undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ElMessageBox.confirm('Are you sure to update this target?')
                .then(async () => {
                    if (ruleForm) {
                        const data = {
                            id: ruleForm.id,
                            device: ruleForm.device,
                            executor: ruleForm.executor,
                        }
                        id === undefined ? await createTarget(data) : await updateTarget(id, data)
                        ElMessage.success('Update/Create target successfully!')
                        emit("closeDialog")
                        window.location.reload()
                    }
                    else {
                        console.log("No data avaliable!");
                    }
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
</script>