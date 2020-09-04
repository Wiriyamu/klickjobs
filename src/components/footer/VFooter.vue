<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__box">
        <router-link class="footer__klick" :to="{ path: '/' }"
          >KlickJobs</router-link
        >
        <p class="footer__location">
          Feito com ♥ em Brasília
        </p>
        <p class="footer__copy">
          2020 KlickJobs - Todos os direitos reservados.
        </p>
      </div>

      <div class="footer__nav">
        <router-link class="footer__link" :to="{ hash: '#sobre' }"
          >Sobre</router-link
        >
        <router-link class="footer__link" :to="{ hash: '#time' }"
          >Time</router-link
        >
        <router-link class="footer__link" :to="{ hash: '#vagas' }"
          >Vagas</router-link
        >
        <router-link class="footer__link" :to="{ hash: '#convite' }"
          >Convite</router-link
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
.footer {
  width: 100%;
  margin-top: -5px;
  background: rgb(215, 120, 135);
  background: linear-gradient(
    90deg,
    rgba(215, 120, 135, 1) 0%,
    rgba(239, 131, 114, 1) 61%,
    rgba(242, 133, 88, 1) 100%
  );

  &__container {
    @include container;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 0;

    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
    }
  }

  &__box {
    padding: 0 2%;
  }

  &__klick {
    font-size: 1.8rem;
    font-weight: $bold;
    color: $colorSupport;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  &__location {
    margin-top: 0.625rem;
    font-size: 1.4rem;
    color: $colorSupport;

    @media screen and (max-width: 640px) {
      text-align: center;
      margin-top: 0.625rem;
    }
  }

  &__link {
    margin-right: 0.625rem;
    font-weight: $bold;
    color: $colorSupport;

    &:hover {
      @include buttonHover;
    }
  }

  &__copy {
    margin-top: 0.625rem;
    font-size: 1.2rem;
    text-align: center;
    color: $colorSupport;
  }
}
</style>
