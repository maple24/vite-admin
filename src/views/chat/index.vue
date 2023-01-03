<template>
    <div class="block">
        <textarea name="" id="ws" cols="30" rows="10" class="outline"></textarea>
        <input type="text">
        <button>submit</button>
    </div>
</template>

<script setup lang="ts">
// const client = new WebSocket(
//     'wss://echo.websocket.org'
// );
const client = new WebSocket(
    'ws://'
    + location.host
    + '/api/ws'
    + '/1/'
);

client.onopen = () => {
    console.log("connected to the server")
    client.send(JSON.stringify({
        'message': 'opened'
    }))
}

client.onmessage = (event) => {
    console.log(event.data)
    const data = JSON.parse(event.data)
    document.querySelector("#ws")!.textContent += '\n' + data.message + '\n'
}   
</script>

<style scoped>

</style>