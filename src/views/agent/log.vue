<template>
    <div>
        <textarea ref="textArea" rows="30"
            class="w-full overflow-scroll border border-gray-800 rounded-lg p-2 text-white bg-gray-900 font-mono text-sm resize-none focus:outline-none">
            {{ text }}
        </textarea>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAgentStore } from '@/store/agent';
const store = useAgentStore()

const text = ref<string>('Welcome to agent log channel!')
const textArea = ref<HTMLElement | null>(null);
const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/log/'
)

watch(
    () => store.hostname,
    () => {
        if (store.hostname === '') {
            text.value += '\n' + 'No host seleced!'
        } else {
            text.value += '\n' + `${store.hostname} connected to the channel!`
        }
    }
);

client.onopen = () => {
    if (store.hostname === '') {
        text.value += '\n' + 'No host seleced!'
    } else {
        text.value += '\n' + `${store.hostname} connected to the channel!`
    }
}

client.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (data.message.hostname === store.hostname) {
        text.value += '\n' + data.message.content
        if (textArea.value?.scrollHeight) textArea.value.scrollTop = textArea.value?.scrollHeight;
    }
}

</script>

<style scoped>

</style>