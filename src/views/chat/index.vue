<template>
    <div>
        <div>
            <textarea name="" id="ws" cols="100" rows="10" class="border" readonly>{{ textArea }}</textarea>
        </div>
        <div>
            <input id="chat-message-input" type="text" size="100"
                class="border focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                v-model=message @keyup.enter="onSubmit" autofocus>
        </div>
        <button class="border rounded-md" @click="onSubmit">submit</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user';
const store = useUserStore()

const current = new Date();
const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
const dateTime = cDate + ' ' + cTime;

const textArea = ref('')
const message = ref()

const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/1/'
);

client.onopen = () => {
    console.log("connected to the server")
    client.send(JSON.stringify({
        'message': `${dateTime} (${store.name}): Entered room`
    }))
}

client.onmessage = (event) => {
    console.log(event.data)
    const data = JSON.parse(event.data)
    textArea.value += data.message + '\n'
}

function onSubmit() {
    client.send(JSON.stringify({
        'message': `${dateTime} (${store.name}): ${message.value}`
    }))
    message.value = ''
}

</script>

<style scoped>

</style>