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
// import { WS_log as client} from '@/api/ws'
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
        text.value = 'Welcome to agent log channel!'
        text.value += store.hostname === '' ? '\n' + 'No host selected!' : '\n' + `${store.hostname} connected to the channel!`
    }
);


client.onopen = () => {
    console.log("Connected to log channel.");
    text.value += store.hostname === '' ? '\n' + 'No host selected!' : '\n' + `${store.hostname} connected to the channel!`
}

client.onclose = () => {
    text.value += '\n' + "Disconnected!"
    console.log("Disconnected.");
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