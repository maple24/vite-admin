<template>
    <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm" size="default" status-icon>
        <el-form-item label="Name" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>

        <el-form-item label="Comments" prop="comments">
            <el-input v-model="ruleForm.comments" type="textarea" />
        </el-form-item>

        <el-form-item label="Type" prop="type">
            <el-select v-model="ruleForm.type" placeholder="type">
                <el-option value="Web Camera"></el-option>
                <el-option value="Data Acquisition Device"></el-option>
                <el-option value="Switch Box"></el-option>
                <el-option value="Digital Cockpit Head Unit"></el-option>
                <el-option value="Phone"></el-option>
                <el-option value="Machine"></el-option>
                <el-option value="Others"></el-option>
            </el-select>
        </el-form-item>

        <div :class="{ hidden: props.device !== undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Create
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </div>
        <div :class="{ hidden: props.device === undefined }">
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef, props.device!.id)">
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
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'
import { createDevice, updateDevice } from '@/api/agent'
import { Device } from '@/types/agents'

const ruleFormRef = ref<FormInstance>()
const props = defineProps<{
    device: Device | undefined
}>()
const emit = defineEmits<{
    (e: 'closeDialog'): void
}>()

// computed value cannot be v-model, since it is passive value and not gonna be changed
// current solution: destroy dialog when closing, so every time a new dialog will be mounted
// otherwise the props has to been watched to make changes
const ruleForm = reactive({
    id: props.device?.id as number,
    name: props.device?.name as string,
    comments: props.device?.comments as string,
    type: props.device?.type as string,
})

const submitForm = async (formEl: FormInstance | undefined, id: string | number | undefined = undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ElMessageBox.confirm('Are you sure to update this device?')
                .then(async () => {
                    if (ruleForm) {
                        const data = {
                            id: ruleForm.id,
                            name: ruleForm.name,
                            comments: ruleForm.comments,
                            type: ruleForm.type
                        }
                        id === undefined ? await createDevice(data) : await updateDevice(id, data)
                        ElMessage.success('Update/Create device successfully!')
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