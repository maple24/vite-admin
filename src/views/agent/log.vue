<template>
    <div>
        <textarea ref="textArea" rows="30"
            class="w-full overflow-y-auto border border-gray-800 rounded-lg p-2 text-white bg-gray-900 font-mono text-sm resize-none focus:outline-none">
            {{ text }}
        </textarea>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// import { WS_log as client} from '@/api/ws'
const props = defineProps<{
    agent: string | undefined | null
}>()
const text = ref<string>('Welcome to agent log channel!')
const textArea = ref<HTMLElement | null>(null);
const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/log/'
)

watch(
    () => props.agent,
    () => {
        text.value = 'Welcome to agent log channel!'
        text.value += props.agent === null ? '\n' + 'No host selected!' : '\n' + `${props.agent} connected to the channel!`
    }
);

client.onopen = () => {
    console.log("Connected to log channel.");
    text.value += props.agent === null ? '\n' + 'No host selected!' : '\n' + `${props.agent} connected to the channel!`
}

client.onclose = () => {
    text.value += '\n' + "Disconnected!"
    console.log("Disconnected.");
}

client.onmessage = (event) => {
    const message = JSON.parse(event.data)
    if (message.args.hostname === props.agent) {
        text.value += '\n' + message.args.content
        if (textArea.value?.scrollHeight) textArea.value.scrollTop = textArea.value?.scrollHeight;
    }
}

</script>

<style scoped>

</style>