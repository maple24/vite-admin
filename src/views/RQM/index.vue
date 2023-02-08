<template>
    <div class="m-5">
        <el-tabs v-model="activeName" type="" stretch @tab-click="handleClick">
            <el-tab-pane label="Search" name="search">
                <Search />
            </el-tab-pane>
            <el-tab-pane label="Create" name="create">
                <Create />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Search from './search.vue'
import Create from './upload.vue'

const activeName = ref('search')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style scoped>

</style>