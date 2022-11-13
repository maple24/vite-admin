import request from '@/utils/request';

// https://github.com/vuejs/core/issues/4960 await in <script setup>
export function fetchPosts() {
  return request({
    url: '/todos/1' as string,
    method: 'get',
  });
}
