<template>
  <div class="loader" v-if="!isLoaded">
    <div style="background: #f8722c" class="cube"></div>
    <div style="background: #F18457" class="cube"></div>
    <div style="background: #EF8375" class="cube"></div>
    <div style="background: #EA809D" class="cube"></div>

    <h1 style="color: #3f3d56">KlickJobs</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoaded: false
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.isLoaded = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  z-index: 999;
}

.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;

  &:first-child {
    animation: left 1s infinite;
  }

  &:nth-child(4) {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateY(-60px);
  }

  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateY(-60px);
  }

  50% {
    transform: translateX(0);
  }
}
</style>
