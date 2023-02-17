<template>
    <div>
        <el-tabs v-model="activeName" type="border-card" stretch @tab-click="handleClick">
            <el-tab-pane label="Log" name="log">
                <Log :agent="agent" />
            </el-tab-pane>
            <el-tab-pane label="Terminal" name="terminal">
                <!-- why not use store directly in subcomponent, why props if using global state??? -->
                <Terminal :agent="agent" :user="userStore.name" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Terminal from './terminal.vue'
import Log from './log.vue'
import { useUserStore } from '@/store/user';
import { useRoute } from 'vue-router';
const route = useRoute()
const agent = computed(() => {
    if (route.query.agent) return route.query.agent as string
    else return null
})
const userStore = useUserStore()

const activeName = ref('log')

const handleClick = (tab: TabsPaneContext, event: Event) => {
}
</script>

<style scoped>

</style>