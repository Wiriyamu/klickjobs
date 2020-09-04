<template>
  <section id="time" class="team">
    <div class="team__container">
      <h1 class="team__title">
        O que as pessoas do nosso time pensam sobre trabalhar na IGD?
      </h1>

      <vs-collapse open-hover>
        <!-- Raul Nunes -->
        <vs-collapse-item :not-arrow="true">
          <div class="team__name" slot="header">
            Raul Nunes - Social Media
          </div>
          <p class="team__told">
            "Na Ignição Digital me senti acolhido desde o primeiro café
            compartilhado com meus colegas, que em pouco tempo se tornaram
            amigos. Além de um ambiente de trabalho fantástico, que estimula
            nossa autonomia e nos faz sentir em casa, o companheirismo entre
            pessoas e equipes faz uma super diferença no dia a dia. É um lugar
            incrível para trabalhar, crescer profissionalmente e construir
            histórias!"
          </p>
        </vs-collapse-item>

        <!-- Ingrid Amorim -->
        <vs-collapse-item :not-arrow="true">
          <div class="team__name" slot="header">
            Ingrid Amorim - Suporte Fórmula de Lançamento
          </div>
          <p class="team__told">
            "A Ignição Digital é uma empresa que me surpreende positivamente em
            todos os aspectos. Se preocupa com os seus funcionários em todas as
            áreas! Aqui existe um espírito de família, um time comprometido e
            que luta sempre pelo UAU. Sou muito feliz fazendo parte dessa equipe
            maravilhosa :D"
          </p>
        </vs-collapse-item>

        <!-- Cleber Carvalho  -->
        <vs-collapse-item :not-arrow="true">
          <div class="team__name" slot="header">
            Cleber Carvalho - Desenvolvedor
          </div>
          <p class="team__told">
            "A Ignição proporciona aquele ambiente de trabalho que todos
            desejam, saber que você está entre pessoas incríveis que ajudam umas
            as outras é sensacional e te proporciona um crescimento surreal."
          </p>
        </vs-collapse-item>
      </vs-collapse>

      <!-- Conheça A IGD -->
      <div class="team__know">
        <vs-button
          class="team__popup 
            animate__animated 
            animate__headShake
            animate__infinite 
            animate__slower"
          @click="popupActivo = true"
          color="primary"
          type="filled"
          >Conheça mais sobre a IGD</vs-button
        >
        <vs-popup
          class="holamundo"
          color="primary"
          title="Conheça mais sobre a IGD"
          :active.sync="popupActivo"
        >
          <div class="team__social">
            <a
              class="team__links"
              href="https://www.facebook.com/ignicaodigital/"
              target="_blank"
              >Facebook</a
            >
            <a
              class="team__links"
              href="https://www.linkedin.com/company/ignicao-digital/"
              target="_blank"
              >Linkedin</a
            >
            <a
              class="team__links"
              href="https://twitter.com/ignicaodigital"
              target="_blank"
              >Twitter</a
            >
            <a
              class="team__links"
              href="https://www.youtube.com/user/ignicaodigital"
              target="_blank"
              >YouTube</a
            >
          </div>
        </vs-popup>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data: () => ({
    popupActivo: false
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';
.team {
  width: 100%;
  background: rgb(215, 120, 135);
  background: linear-gradient(
    90deg,
    rgba(215, 120, 135, 1) 0%,
    rgba(239, 131, 114, 1) 61%,
    rgba(242, 133, 88, 1) 100%
  );

  &__container {
    @include container;
    padding-bottom: 5rem;
  }

  &__title {
    max-width: 90rem;
    margin: 5rem 0;
    padding-top: 5rem;
    font-size: 3.6rem;
    color: $colorSupport;

    @media screen and (max-width: 640px) {
      text-align: center;
    }
  }

  &__name {
    font-size: 1.8rem;
    font-weight: $bold;
    color: $colorSupport;
  }

  &__told {
    font-size: 1.6rem;
    color: $colorSupport;
  }

  &__popup {
    margin-top: 2rem;
    padding: 10px 20px;
  }

  &__social {
    display: flex;
    justify-content: space-around;
  }

  &__links {
    font-weight: $bold;
    color: $colorAccent;

    &:hover {
      @include buttonHover;
    }
  }
}
</style>
