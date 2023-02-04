<template>
  <div>
    <div class="m-5">
      <el-card>
        <template #header>
          <div class="card-header">
            <span class="font-extrabold">Status</span>
          </div>
        </template>
        <div class="flex text-center">
          <div class="border rounded-md mx-16 w-60 bg-slate-200">
            <h1 class="my-2 font-bold">Total</h1>
            <p class="text-black font-bold">{{ total }}</p>
          </div>
          <div class="border rounded-md mx-16 w-60 bg-slate-200">
            <h1 class="my-2 font-bold">Online</h1>
            <p class="text-green-700 font-bold">{{ onlines }}</p>
          </div>
          <div class="border rounded-md mx-16 w-60 bg-slate-200">
            <h1 class="my-2 font-bold">Offline</h1>
            <p class="text-red-700 font-bold">{{ offlines }}</p>
          </div>
        </div>
      </el-card>
    </div>
    <div class="m-5" v-loading="loading">
      <el-row :gutter="50">
        <el-col :span="6" v-for="item in agents" :key="item.id">
          <el-card shadow="hover" class="my-2 p-2">
            <font-awesome-icon icon="fa-solid fa-server" class="mr-2" />
            <button class="underline hover:text-blue-500" @click="handleClick(item.name)">
              <span>{{ item.name }}</span>
            </button>
            <el-divider class="border-4"
              :class="{ 'border-green-500': item.online === true, 'border-red-700': item.online === false }"></el-divider>
            <ul class="list-disc mx-4">
              <li>IP: {{ item.ip }}</li>
              <li>Comments: {{ item.comments }}</li>
              <li>Location: {{ item.location }}</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fetchAgentList } from '@/api/agent'
import { onMounted, computed } from 'vue';
import { Agents } from '@/types/agents'
import { useRouter } from 'vue-router';
import { useAgentStore } from '@/store/agent'
const store = useAgentStore()
const router = useRouter()
const loading = ref<boolean>(true)
const agents = ref<Agents[]>()
const total = computed(() => agents.value ? agents.value.length : 0)
const onlines = computed(() => {
  let count = 0
  agents.value?.forEach(agent => {
    count = agent.online === true ? count + 1 : count
  })
  return count
})
const offlines = computed(() => total.value ? total.value - onlines.value : 0)

onMounted(async () => {
  await getAgentList()
})

async function getAgentList() {
  setInterval(async () => {
    try {
      const response = await fetchAgentList()
      agents.value = response.data
    } catch {
      throw "Fail to get agent list!"
    } finally {
      loading.value = false
    }
  }, 2000)
}

function handleClick(hostname: string) {
  router.push({ name: 'agent' })
  store.hostname = hostname
}
</script>

<style scoped>

</style>