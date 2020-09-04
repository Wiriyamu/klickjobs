<template>
  <div id="app">
    <VLoading />
    <router-view />
  </div>
</template>

<script>
import VLoading from '@/components/VLoading'
export default {
  components: { VLoading }
}
</script>
