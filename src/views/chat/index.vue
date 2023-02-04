<template>
    <div>
        <div>
            <textarea ref="textArea" name="" id="ws" cols="100" rows="10" class="border overflow-scroll"
                readonly>{{ text }}</textarea>
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
import { ref } from 'vue'
import { getToken } from '@/utils/auth';
import { useUserStore } from '@/store/user';
const store = useUserStore()
const text = ref('')
const message = ref()
const textArea = ref<HTMLElement | null>(null);

const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/chat/'
    + "?token="
    + getToken()
);

client.onopen = () => {
    console.log("connected to the server")
    client.send(JSON.stringify({
        'purpose': 'chat',
        'message': `(${store.name}): Entered room`
    }))
}

client.onmessage = (event) => {
    console.log(event.data)
    const data = JSON.parse(event.data)
    text.value += data.message + '\n'
}

function onSubmit() {
    const current = new Date();
    const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    const dateTime = cDate + ' ' + cTime;
    client.send(JSON.stringify({
        'purpose': 'chat',
        'message': `${dateTime} (${store.name}): ${message.value}`
    }))
    message.value = ''
    if (textArea.value?.scrollHeight) textArea.value.scrollTop = textArea.value?.scrollHeight;
}
</script>

<style scoped>

</style>