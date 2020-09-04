<template>
  <section class="form">
    <div class="form__container">
      <nav class="form__nav">
        <div>
          <h1 class="form__apply">Candidate-se a essa vaga</h1>
          <h3 class="form__title">{{ title }}</h3>
        </div>
        <vs-button
          color="#fff"
          type="flat"
          icon="arrow_back_ios"
          :to="`/vagas/${id}`"
          >Voltar</vs-button
        >
      </nav>

      <form @submit.prevent class="form__form">
        <div class="form__box">
          <label class="form__label">Nome Completo *</label>
          <input
            @change="$v.candidate.name.$touch()"
            v-model.trim="candidate.name"
            placeholder="Insira seu nome completo"
            class="form__input"
            type="text"
          />
          <p class="form__error" v-if="$v.candidate.name.$error">
            O nome é obrigatório!
          </p>
        </div>

        <div class="form__box">
          <label class="form__label">Email *</label>
          <input
            @change="$v.candidate.email.$touch()"
            v-model.trim="candidate.email"
            placeholder="Insira seu melhor email"
            class="form__input"
            type="email"
          />
          <p class="form__error" v-if="$v.candidate.email.$error">
            Insira um email válido!
          </p>
        </div>

        <div class="form__box">
          <label class="form__label">Queremos te conhecer melhor!</label>
          <textarea
            style="resize: none"
            class="form__input"
            placeholder="Seria legal saber um pouco mais sobre você (ex: Portifólio, Linkedin, Github, Projetos Voluntários, etc). "
            v-model="candidate.additionalInformations"
            cols="30"
            rows="10"
          />
        </div>

        <div class="form__box">
          <label class="form__label">Seu Currículo *</label>
          <input
            @change="$v.candidate.curriculum.$touch()"
            v-model.trim="candidate.curriculum"
            placeholder="Adicione um link para encontrarmos seu curriculo"
            name="text"
            class="form__input"
            type="text"
          />

          <p class="form__error" v-if="$v.candidate.curriculum.$error">
            O currículo é obrigatório!
          </p>

          <div>
            <vs-button
              @click="popupActivo = true"
              color="warning"
              type="flat"
              icon="help"
              >Não consigo enviar meu Currículo</vs-button
            >
            <vs-popup
              title="Não consigo enviar meu Currículo, o que eu faço?"
              :active.sync="popupActivo"
            >
              <p>
                Caso não consiga disponibilizar um link com seu curriculo para
                nós, você poderá enviar um email
                <strong style="color: #f8722c">vagas@klickjobs.com</strong> com
                seu currículo. Não se esqueça de enviar no título do email a
                vaga desejada!
              </p>
            </vs-popup>
          </div>
        </div>

        <div style="margin-top: 0.625rem" class="form__box">
          <label class="form__label">Vaga Desejada *</label>
          <select
            @change="$v.candidate.job.$touch()"
            class="form__input"
            v-model="candidate.job"
          >
            <option>{{ title }}</option>
          </select>

          <p class="form__error" v-if="$v.candidate.job.$error">
            Escolha a vaga desejada!
          </p>
        </div>

        <vs-button
          class="animate__animated 
            animate__headShake
            animate__infinite 
            animate__slower"
          @click="sendForm"
          color="warning"
          style="padding: 1.5rem 2rem;  margin-top: 2rem"
          text-color="#fff"
          type="filled"
          >Aplicar para vaga</vs-button
        >
      </form>
    </div>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'Form',
  props: ['id', 'title'],
  data: () => ({
    alert: false,
    popupActivo: false,
    candidate: {
      name: '',
      email: '',
      additionalInformations: '',
      curriculum: '',
      job: ''
    }
  }),
  validations: {
    candidate: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      curriculum: {
        required
      },
      job: {
        required
      }
    }
  },

  methods: {
    clearCandidates() {
      this.candidate.name = ''
      this.candidate.email = ''
      this.candidate.additionalInformations = ''
      this.candidate.curriculum = ''
      this.candidate.job = ''
    },
    async sendForm() {
      if (!this.$v.$invalid) {
        await this.$http
          .post('/candidates', this.candidate)
          .then(res => {
            alert('Sua candidatura foi enviada com sucesso!')
            this.clearCandidates()
            this.$router.push({ path: '/', hash: '#vagas' })
          })
          .catch(err => {
            alert(
              'Erro ao enviar o formulário. Verifique seu dados foram preenchidos corretamente :)'
            )
          })
      } else {
        this.$v.$touch()
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';

.form {
  width: 100%;
  background-color: $colorBase;

  &__container {
    @include container;
    padding-bottom: 5rem;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
  }

  &__apply {
    font-size: 3.6rem;
    font-weight: $bold;
    color: $colorAccent;
  }

  &__title {
    margin-top: 0.625rem;
    font-size: 3rem;
    font-weight: $bold;
    color: $colorSupport;
  }

  &__form {
    margin-top: 5rem;
  }

  &__box {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 0.625rem;
    font-size: 2.5rem;
    font-weight: $bold;
    color: $colorSupport;
  }

  &__input {
    max-width: 50rem;
    margin-bottom: 2rem;
    padding: 2rem 2rem;
    border-radius: 5px;
  }

  &__error {
    margin-bottom: 2rem;
    color: $colorAccent;
  }

  &__upload {
    max-width: 80rem;
    margin-bottom: 2rem;
  }
}
</style>
