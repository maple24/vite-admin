<template>
    <div>
        <div class="p-6 bg-gray-800 text-white">
            <div v-for="line in lines" :key="line.id" class="bg-gray-900 rounded-lg p-4 mb-2">
                <div v-if="line.type === 'input'" class="text-xs font-medium text-gray-500">{{ loginName }}</div>
                <div v-if="line.type === 'input'" class="text-sm font-medium text-gray-100">{{ line.text }}</div>
                <div v-if="line.type === 'output'" class="text-sm font-medium text-gray-100">{{ line.text }}</div>
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
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user';
const store = useUserStore()

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
    return store.name + "@" + props.agent + ":~$"
})

const inputValue = ref<string>('')
const id = ref<number>(1)
const lines = ref<lineText[]>([])

function handleSubmit() {
    if (inputValue.value === '') return

    if (inputValue.value === 'clear' || inputValue.value === 'cls') {
        lines.value = []
        inputValue.value = ''
    }
    else {
        lines.value.push({ id: id.value, type: 'input', text: inputValue.value })
        lines.value.push({ id: id.value + 1, type: 'output', text: 'This is the output for the command: ' + inputValue.value })
        inputValue.value = ''
        id.value += 2
    }
}

</script>

<style scoped>

</style>