<template>
  <section class="jobs">
    <div class="jobs__container">
      <nav class="jobs__nav">
        <h1 class="jobs__klick">{{ job.title }}</h1>
        <vs-button
          color="primary"
          type="flat"
          icon="arrow_back_ios"
          :to="{ path: '/', hash: '#vagas' }"
          >Voltar</vs-button
        >
      </nav>
      <p class="jobs__location">{{ job.location }}, {{ job.hire }}</p>

      <div class="jobs__main">
        <h3 class="jobs__titles">Descrição da Vaga</h3>
        <p class="jobs__texts">{{ job.description }}</p>

        <h3 class="jobs__titles">Responsabilidades e Atribuições</h3>
        <p class="jobs__texts">{{ job.responsibilities }}</p>

        <h3 class="jobs__titles">Requisitos e Qualificações</h3>
        <p class="jobs__texts">{{ job.requeriments }}</p>
        <p class="jobs__texts" style="margin-top: 2rem">
          {{ job.requeriments_differential }}
        </p>

        <p class="jobs__texts" style="margin-top: 2rem">
          {{ job.requeriments_moreDifferential }}
        </p>

        <h3 class="jobs__titles">Informações Adicionais</h3>
        <p class="jobs__texts">{{ job.additional_informations }}</p>

        <div>
          <div>
            <vs-button
              class="
              animate__animated 
              animate__headShake
              animate__infinite 
              animate__slower"
              :to="`/formulario/${id}/${job.title}`"
              style="padding: 1.5rem 2rem;  margin-top: 2rem"
              color="primary"
              type="filled"
              >Candidatar-se para essa vaga</vs-button
            >
          </div>
        </div>
      </div>
    </div>
    <v-loading v-if="showLoading" />
  </section>
</template>

<script>
import VLoading from '@/components/VLoading'
import { mapState } from 'vuex'
export default {
  name: 'Jobs',
  components: { VLoading },
  props: ['id'],
  data: () => ({
    showLoading: false
  }),
  created() {
    this.$store.dispatch('setJob', this.id)
  },
  computed: {
    ...mapState({
      job: state => state.job
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.jobs {
  width: 100%;
  height: 100vh;
  animation: gradient 10s ease infinite;

  &__container {
    @include container;
    padding-bottom: 5rem;
  }

  &__nav {
    display: flex;
    padding: 5rem 0 0.625rem 0;
    justify-content: space-between;
    align-items: center;
  }

  &__klick {
    font-size: 3.6rem;
    font-weight: $bold;
    color: $colorAccent;
  }

  &__info {
    margin: 0.625rem 0;
  }

  &__jobTitle,
  &__location {
    font-size: 3rem;
    font-weight: $bold;
    color: $colorBase;
    margin-right: 2rem;
  }

  &__main {
    margin-top: 5rem;
  }

  &__titles {
    margin: 2rem 0;
    color: $colorAccent;
  }

  &__texts {
    max-width: 100rem;
    font-weight: $bold;
    line-height: 2.5rem;
    color: $colorBase;
  }
}
</style>
