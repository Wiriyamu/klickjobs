<template>
  <div
    id="inicio"
    class="header animate__animated animate__fadeIn animate__slower"
  >
    <div class="header__container">
      <nav>
        <ul class="header__klicks">
          <li class="header__klicksItens">
            <a
              class="header__klickLinks"
              href="https://klickpages.com.br/"
              target="_blank"
              >KlickPages</a
            >
          </li>
          <li class="header__klicksItens">
            <a
              class="header__klickLinks"
              href="https://klicksend.com.br/"
              target="_blank"
              >KlickSend</a
            >
          </li>
          <li class="header__klicksItens">
            <a
              class="header__klickLinks"
              href="https://klickmembers.com.br/"
              target="_blank"
              >KlickMembers</a
            >
          </li>
        </ul>
      </nav>

      <nav class="header__mainNav">
        <figure class="header__logo">
          <img src="../../assets/images/logo.svg" alt="Ignição Digital" />
          <figcaption class="header__klickjobs">KlickJobs</figcaption>
        </figure>

        <ul class="header__list">
          <li>
            <router-link class="header__navItens" :to="{ hash: '#sobre' }"
              >Sobre</router-link
            >
          </li>
          <li>
            <router-link class="header__navItens" :to="{ hash: '#time' }"
              >Time</router-link
            >
          </li>
          <li>
            <router-link class="header__navItens" :to="{ hash: '#vagas' }"
              >Vagas</router-link
            >
          </li>
          <li>
            <router-link class="header__navItens" :to="{ hash: '#convite' }"
              >Convite</router-link
            >
          </li>
        </ul>
      </nav>

      <div class="header__action">
        <h1
          class="header__title animate__animated animate__fadeIn animate__infinite animate__slower"
        >
          Venha ser Uau com a gente ♥
        </h1>
        <p class="header__paragraph">
          Contamos com um time de colaboradores que luta pelo UAU diariamente.
          Somos criativos, íntegros, responsáveis, comprometidos, apaixonados.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
.header {
  width: 100%;
  background-image: url('../../assets/images/bg.svg');
  background-size: cover;
  background-repeat: no-repeat;

  &__container {
    @include container;
    padding-bottom: 30rem;
  }

  &__klicks {
    padding: 2rem 0;
    @media screen and (max-width: 460px) {
      display: none;
    }
  }

  &__klicksItens {
    margin-right: 0.625rem;
  }

  &__klickLinks {
    font-size: 10px;
    font-weight: $bold;
    color: $colorSupport;

    &:hover {
      @include buttonHover;
    }
  }

  &__mainNav {
    @media screen and (max-width: 460px) {
      display: flex;
      flex-direction: column;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 460px) {
      margin-top: 4rem;
    }
  }

  &__klickjobs {
    margin-left: 0.625rem;
    font-size: 1.8rem;
    font-weight: $bold;
    color: $colorSupport;

    @media screen and (max-width: 460px) {
      display: none;
    }
  }

  &__mainNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    @media screen and (max-width: 460px) {
      margin-top: 2rem;
    }
  }

  &__navItens {
    margin-right: 1.5rem;
    font-weight: $bold;
    color: $colorSupport;

    &:hover {
      @include buttonHover;
    }

    @media screen and (max-width: 460px) {
      margin-top: 2rem;
    }
  }

  &__action {
    margin-top: 10rem;

    @media screen and (max-width: 640px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__title {
    font-size: 7.5rem;
    text-transform: uppercase;
    color: $colorSupport;

    @media screen and (max-width: 640px) {
      font-size: 6rem;
      text-align: center;
    }
  }

  &__paragraph {
    max-width: 50rem;
    margin-top: 2rem;
    color: $colorSupport;

    @media screen and (max-width: 640px) {
      text-align: center;
    }
  }
}
</style>
