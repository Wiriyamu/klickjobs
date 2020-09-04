<template>
  <section id="vagas" class="jobs">
    <div class="jobs__container">
      <h1 class="jobs__title">Venha fazer parte do nosso time</h1>

      <ul class="jobs__list">
        <li v-for="job in jobs" :key="job.id" class="jobs__job">
          <router-link
            style="color: #f8722c; font-weight: 700"
            :to="`/vagas/${job.id}`"
            >{{ job.title }} - {{ job.location }}</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jobs',
  props: {
    jobs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.jobs {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  &__container {
    @include container;
    padding-top: 2.5rem;
    padding-bottom: 5rem;
  }

  &__title {
    padding: 5rem 0;
    font-size: 3.6rem;
    color: $colorBase;

    @media screen and (max-width: 960px) {
      max-width: 50rem;
    }

    @media screen and (max-width: 400px) {
      text-align: center;
    }
  }

  &__list {
    flex-direction: column;
  }

  &__job {
    padding-bottom: 2rem;
  }
}
</style>
