<template>
  <section id="convite" class="invite">
    <div class="invite__container">
      <h1 class="invite__title">Convite do nosso CEO</h1>
      <div>
        <video class="invite__boxVideo" controls="controls">
          <source
            class="invite__video"
            src="../../assets/video/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Invite'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.invite {
  width: 100%;

  &__container {
    @include container;
  }

  &__title {
    text-align: center;
    padding: 5rem 0 2rem 0;
    font-size: 3.6rem;
    color: $colorBase;
  }

  &__boxVideo {
    position: relative;
    width: 100%;
  }

  &__video {
    position: absolute;
    width: 100%;
    height: 100vh;
  }
}
</style>
