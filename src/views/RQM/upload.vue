<template>
    <div>
        <el-upload ref="uploadRef" v-model:file-list="fileList" class="upload-demo" drag action="/api/rqm/upload"
            :headers="header" :autoUpload="false" :on-remove="handleRemove" :on-preview="handlePreview"
            :on-success="handleSuccess">
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500kb
                </div>
                <el-button class="ml-3" type="success" @click="submitUpload">
                    upload to server
                </el-button>
            </template>
        </el-upload>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { getToken } from '@/utils/auth';
import type { UploadProps, UploadUserFile, UploadInstance } from 'element-plus'
import { ElMessageBox, ElMessage } from 'element-plus'

const fileList = ref<UploadUserFile[]>()
const uploadRef = ref<UploadInstance>()
const token = getToken()
const header = reactive({
    Authorization: `Bearer ${token}`,
    "Content-Disposition": "attachment; filename=source.json"
})

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
    console.log(file.name, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleSuccess: UploadProps['onSuccess'] = () => {
    console.log();
}

const submitUpload = () => {
    if (fileList.value) {
        let tmp = <UploadUserFile[]>fileList.value.slice()
        fileList.value = []
        tmp.forEach((file) => {
            fileList.value?.push(file)
            header['Content-Disposition'] = `attachment; filename=${file.name}`
            uploadRef.value!.submit()
            fileList.value?.pop()
        })
        fileList.value = tmp.slice()
    }
}
</script>

<style scoped>

</style>