<template>
    <div>
        <div class="m-5 round">
            <textarea ref="textArea" name="" id="ws" rows="20"
                class="border-2 overflow-y-auto w-full rounded-lg border-black" readonly>{{ text }}</textarea>
        </div>
        <div class="text-end">
            <button @click="emit('closeDialog')">close</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    taskID: number | string | undefined
}>()
const emit = defineEmits<{
    (e: 'closeDialog'): void
}>()
const text = ref<string>('')

const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/log/'
)

client.onopen = () => {
    console.log("Connected to log channel.");
    text.value += props.taskID === null ? '\n' + 'No task selected!' : `Task ${props.taskID} connected to log channel!`
}

client.onclose = () => {
    text.value += '\n' + "Disconnected!"
    console.log("Disconnected.");
}

client.onmessage = (event) => {
    const message = JSON.parse(event.data)
    if (message.args.task_id === props.taskID) {
        text.value += '\n' + message.args.content
    }
}
</script>

<style scoped></style>