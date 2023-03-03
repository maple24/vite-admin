<template>
    <el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" class="demo-ruleForm" size="default" status-icon>
        <el-form-item label="Name" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>

        <el-form-item label="Comments" prop="comments">
            <el-input v-model="ruleForm.comments" type="textarea" />
        </el-form-item>

        <el-form-item label="Location" prop="location">
            <el-select v-model="ruleForm.location" placeholder="location">
                <el-option value="Sgh"></el-option>
                <el-option value="Szh"></el-option>
                <el-option value="Wx"></el-option>
            </el-select>
        </el-form-item>

        <div>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef, props.agent!.id)">
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
import { updateAgent } from '@/api/agent';
import { Agent, Target } from '@/types/agents'

const ruleFormRef = ref<FormInstance>()
const props = defineProps<{
    agent: Agent | undefined
}>()
const emit = defineEmits<{
    (e: 'closeDialog'): void
}>()

// computed value cannot be v-model, since it is passive value and not gonna be changed
// current solution: destroy dialog when closing, so every time a new dialog will be mounted
// otherwise the props has to been watched to make changes
const ruleForm = reactive({
    id: props.agent?.id,
    name: props.agent?.name,
    comments: props.agent?.comments,
    location: props.agent?.location,
})


const submitForm = async (formEl: FormInstance | undefined, id: string | number) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            ElMessageBox.confirm('Are you sure to update this agent?')
                .then(async () => {
                    if (ruleForm) {
                        const data = {
                            id: ruleForm.id as number,
                            name: ruleForm.name as string,
                            comments: ruleForm.comments,
                            location: ruleForm.location
                        }
                        await updateAgent(id, data)
                        ElMessage.success('Update agent successfully!')
                        emit("closeDialog")
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