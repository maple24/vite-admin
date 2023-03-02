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
      <el-row :gutter="40">
        <el-col :span="6" v-for="item in agents" :key="item.id">
          <el-card shadow="hover" class="my-2 p-2">
            <div class="flex justify-between">
              <div>
                <font-awesome-icon icon="fa-solid fa-server" class="mr-2" />
                <button class="underline hover:text-blue-500" @click="">
                  <span>{{ item.name }}</span>
                </button>
              </div>
              <div>
                <el-tooltip content="In Use!" placement="top">
                  <font-awesome-icon icon="fa-solid fa-ban" class="mx-2 text-red-600" v-show="item.is_active" />
                </el-tooltip>
                <el-tooltip content="Agent Center" placement="top">
                  <button @click="handleClick(item.name)">
                    <font-awesome-icon icon="fa-solid fa-desktop" :class="{ 'text-blue-500': item.online === true }" />
                  </button>
                </el-tooltip>
              </div>
            </div>
            <el-divider class="border-4"
              :class="{ 'border-green-500': item.online === true, 'border-red-700': item.online === false }"></el-divider>
            <ul class="list-disc mx-4">
              <li>
                IP:
                <el-tooltip content="Remote Desktop" placement="top">
                  <button @click="hanldeDownload(item.id)" :disabled="!item.is_active">
                    <span class="font-sans font-bold hover:text-blue-500 underline">{{
                      item.ip
                    }}</span>
                  </button>
                </el-tooltip>
              </li>
              <li>Location: <span class="font-sans font-bold">{{ item.location }}</span></li>
              <li>Last seen: <span class="font-sans font-bold">{{ item.last_online_time?.replace('T', ' ') }}</span></li>
              <li>Comments: <span class="font-sans font-bold">{{ item.comments }}</span></li>
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
import { Agent } from '@/types/agents'
import { useRouter } from 'vue-router';
import { RDPURL } from '@/api/agent';
import { downloadbyURL } from '@/utils/common';
const router = useRouter()
const loading = ref<boolean>(true)
const agents = ref<Agent[]>()
const total = computed(() => agents.value ? agents.value.length : 0)
const onlines = computed(() => {
  let count = 0
  agents.value?.forEach(agent => {
    count = agent.online === true ? count + 1 : count
  })
  return count
})
const offlines = computed(() => total.value ? total.value - onlines.value : 0)

onMounted(async () => await startSetInterval())

async function getAgentList() {
  try {
    const response = await fetchAgentList()
    agents.value = response.data
  }
  finally {
    loading.value = false
  }
}

async function startSetInterval() {
  // set interval without delay for the first time
  await getAgentList()
  setInterval(async () => await getAgentList(), 2000)
}

function handleClick(hostname: string) {
  router.push({ name: 'agent', query: { agent: hostname } })
}

function hanldeDownload(ip: string | number) {
  const url = RDPURL(ip)
  downloadbyURL(url, `${ip}.rdp`)
}
</script>

<style scoped></style>