<template>
    <div>
        <div class="m-5 round">
            <textarea ref="textArea" name="" id="ws" rows="20"
                class="border-2 overflow-y-auto w-full rounded-lg border-black" readonly>{{ text }}</textarea>
        </div>
        <div class="border m-5 rounded-lg">
            <div class="p-2 bg-gray-200">
                <input id="chat-message-input" type="text" size="100" placeholder="Type a message..."
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    v-model=message @keyup.enter="onSubmit" autofocus>
            </div>
            <button class="bg-blue-500 text-white py-2 px-4 rounded-full float-right mt-2 hover:text-gray-400"
                @click="onSubmit">submit</button>
        </div>
        <!-- <div class="p-4 bg-gray-200">
                    <input type="text"
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        placeholder="Type a message..." v-model="message">
                    <button class="bg-blue-500 text-white py-2 px-4 rounded-full float-right mt-2"
                        @click="addMessage">Send</button>
                </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getToken } from '@/utils/auth';
import { useUserStore } from '@/store/user';
// import { WS_log as client } from '@/api/ws'
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
        'method': 'chat',
        'args': `(${store.name}): Entered room`
    }))
}

client.onmessage = (event) => {
    const data = JSON.parse(event.data)
    text.value += data.args + '\n'
}

function onSubmit() {
    const current = new Date();
    const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    const dateTime = cDate + ' ' + cTime;
    client.send(JSON.stringify({
        'method': 'chat',
        'args': `${dateTime} (${store.name}): ${message.value}`
    }))
    message.value = ''
    if (textArea.value?.scrollHeight) textArea.value.scrollTop = textArea.value?.scrollHeight;
}
</script>

<style scoped>

</style>