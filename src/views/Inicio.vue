<template>
  <main class="inicio">
    <v-header />
    <v-sobre />
    <v-time />
    <v-vagas :jobs="jobs" />
    <v-convite />
    <v-footer />
    <router-view />
  </main>
</template>

<script>
import VHeader from '@/components/home/VHeader'
import VSobre from '@/components/sobre/VSobre'
import VTime from '@/components/time/VTime'
import VVagas from '@/components/vagas/VVagas'
import VConvite from '@/components/convite/VConvite'
import VFooter from '@/components/footer/VFooter'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Inicio',
  components: { VHeader, VSobre, VTime, VVagas, VConvite, VFooter },
  created() {
    this.setJobs()
  },
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  methods: {
    ...mapActions(['setJobs'])
  }
}
</script>
