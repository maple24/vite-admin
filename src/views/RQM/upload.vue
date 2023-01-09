<template>
    <div class="flex justify-center">
        <div class="mx-16 border shadow-md flex-col self-center">
            <div class="flex justify-center">
                <font-awesome-icon icon="fa-solid fa-file-arrow-down" class="text-8xl text-red-500" />
            </div>
            <el-button class="m-2" type="success" @click="handleDownload('template.json')">
                <font-awesome-icon icon="fa-solid fa-download" class="mx-2" />
                Download template
            </el-button>
        </div>
        <div class="border shadow-md flex-col self-center">
            <el-upload ref="uploadRef" v-model:file-list="fileList" class="upload-demo" drag action="/api/rqm/upload"
                :headers="header" :autoUpload="false" :on-remove="handleRemove" :on-preview="handlePreview"
                :on-success="handleSuccess" :limit=3 :on-exceed="handleExceed" :before-remove="beforeRemove">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        txt/json files with a size less than 500kb are prefered
                    </div>
                    <div class="flex justify-center">
                        <el-button type="success" @click="submitUpload">
                            <font-awesome-icon icon="fa-solid fa-upload" class="mx-2" />
                            Upload to server
                        </el-button>
                    </div>
                </template>
            </el-upload>
            <el-divider />
            <div class="flex justify-center">
                <el-button type="success" @click="">
                    Generate testcase
                    <font-awesome-icon icon="fa-solid fa-square-up-right" class="mx-2" />
                </el-button>
            </div>
            <div>
                <textarea name="" id="" cols="100" rows="10" class="border">Logs:</textarea>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { getToken } from '@/utils/auth';
import { downloadFile } from '@/api/utils'
import { download } from '@/utils/file'
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
    ElMessage.success(`Remove ${file.name} successfully!`)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
    console.log(uploadFile)
}

const handleSuccess: UploadProps['onSuccess'] = () => {
    ElMessage.success("Upload successfully!")
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfert of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
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

const handleDownload = async (filename: string) => {
    const response = await downloadFile(filename)
    const data = JSON.stringify(response.data, null, 4);

    // Create a Blob object
    const blob = new Blob([data], { type: 'application/json' });

    // Create an object URL
    const url = URL.createObjectURL(blob);

    // Download file
    download(url, filename);

    // Release the object URL
    URL.revokeObjectURL(url);

    ElMessage.success(`Download ${filename} successfully!`)
}

</script>

<style scoped>

</style>