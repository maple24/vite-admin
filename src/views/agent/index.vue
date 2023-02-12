<template>
    <div>
        <el-tabs v-model="activeName" type="border-card" stretch @tab-click="handleClick">
            <el-tab-pane label="Log" name="log">
                <Log :agent="agentStore.hostname" />
            </el-tab-pane>
            <el-tab-pane label="Terminal" name="terminal">
                <!-- why not use store directly in subcomponent, why props if using global state??? -->
                <Terminal :agent="agentStore.hostname" :user="userStore.name" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAgentStore } from '@/store/agent'
import type { TabsPaneContext } from 'element-plus'
import Terminal from './terminal.vue'
import Log from './log.vue'
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const agentStore = useAgentStore()

const activeName = ref('log')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style scoped>

</style>