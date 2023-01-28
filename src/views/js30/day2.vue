<template>
    <div>
        <h1>
            Day2: CSS+JS clock
        </h1>
        <svg>
            <circle cx="100" cy="75" r="50" fill="blue" />
        </svg>
        <div class="circle" style="width: 100px; height: 100px;"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.circle {
    background-color: blue;
    border-radius: 50%;
}
</style>