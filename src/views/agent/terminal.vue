<template>
    <div>
        <div class="p-6 bg-gray-800 text-white rounded-lg">
            <div v-for="line in lines" :key="line.id" class="bg-gray-900 rounded-lg p-4 mb-2">
                <div v-if="line.type === 'input'" class="text-xs font-medium text-gray-500">{{ loginName }}</div>
                <div v-if="line.type === 'input'" class="text-sm font-medium text-gray-100">
                    <pre>{{ line.text }}</pre>
                </div>
                <div v-if="line.type === 'output'" class="text-sm font-medium text-gray-100">
                    <pre>{{ line.text }}</pre>
                </div>
            </div>
            <div class="bg-gray-900 rounded-lg p-4">
                <div class="text-xs font-medium text-gray-500">{{ loginName }}</div>
                <input autofocus ref="inputFeild"
                    class="text-sm font-medium text-gray-100 bg-transparent border-0 outline-none w-full" type="text"
                    v-model="inputValue" @keyup.enter="handleSubmit" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useUserStore } from '@/store/user';
import { useAgentStore } from '@/store/agent';
const agentStore = useAgentStore()
const userStore = useUserStore()

const inputFeild = ref<HTMLElement | null>()
const props = defineProps<{
    agent: string
}>()
interface lineText {
    id: number
    type: string
    text: string
}
const loginName = computed(() => {
    return userStore.name + "@" + props.agent + ":~$"
})
const inputValue = ref<string>('')
const id = ref<number>(1)
const lines = ref<lineText[]>([])
const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/log/'
)

function handleSubmit() {
    if (agentStore.hostname === '') {
        lines.value.push({ id: id.value + 1, type: 'output', text: 'No host selected!' })
        inputValue.value = ''
        return
    }

    if (inputValue.value === '') return

    if (inputValue.value === 'clear' || inputValue.value === 'cls') {
        lines.value = []
        inputValue.value = ''
    }
    else {
        client.send(JSON.stringify({
            purpose: 'terminal',
            message: {
                hostname: agentStore.hostname,
                command: inputValue.value
            }
        }))
        lines.value.push({ id: id.value, type: 'input', text: inputValue.value })
        inputValue.value = ''
        id.value += 1
    }
}

watch(
    () => agentStore.hostname,
    () => {
        lines.value = []
        inputValue.value = ''
        if (agentStore.hostname === '') {
            lines.value.push({ id: id.value + 1, type: 'output', text: 'No host selected!' })
        } else {
            lines.value.push({ id: id.value + 1, type: 'output', text: `${agentStore.hostname} connected to the channel!` })
        }
    }
);

client.onopen = () => {
    if (agentStore.hostname === '') {
        lines.value.push({ id: id.value + 1, type: 'output', text: 'No host selected!' })
    } else {
        lines.value.push({ id: id.value + 1, type: 'output', text: `${agentStore.hostname} connected to the channel!` })
    }
}

client.onmessage = ((event) => {
    const data = JSON.parse(event.data)
    if (data.message.output && data.message.hostname === agentStore.hostname) {
        lines.value.push({ id: id.value + 1, type: 'output', text: data.message.output })
        id.value += 1
    }
})

</script>

<style scoped>

</style>