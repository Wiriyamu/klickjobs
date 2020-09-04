<template>
  <section id="sobre" class="about">
    <div class="about__container">
      <h1 class="about__title">
        Quem Somos Nós?
      </h1>

      <div class="about__mission">
        <figure class="about__img">
          <img
            class="about__ericoImg
            animate__animated 
            animate__zoomIn
            animate__infinite 
            animate__slower"
            src="../../assets/images/erico.svg"
            alt="Érico Rocha | CEO da Ignição Digital"
          />
          <figcaption class="about__ceo">
            Érico Rocha | CEO da Ignição Digital
          </figcaption>
        </figure>

        <div class="about__texts">
          <p class="about__paragraph">
            Nós acreditamos que o empreendedorismo pode mudar o mundo. E a nossa
            missão é levar, aos empreendedores do Brasil, ferramentas eficazes e
            inovadoras de Marketing Digital. Queremos contribuir com a
            transformação de milhares de pessoas. Queremos melhorar o futuro do
            nosso país.
          </p>
          <p class="about__slogan">Se você é UAU, junte-se à nós!</p>

          <div class="about__gptw">
            <img
              class="about__gptwImg"
              src="../../assets/images/greatPlaceToWork.svg"
              alt="Great Place To Work"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
.about {
  width: 100%;

  &__container {
    @include container;
    padding-bottom: 5rem;
  }

  &__title {
    margin: 5rem 0;
    font-size: 3.6rem;
    text-align: center;
    color: $colorBase;
  }

  &__mission {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  &__ericoImg {
    width: 30rem;
  }

  &__ceo {
    margin: 2rem 0;
    font-size: 1.2rem;
    font-weight: $bold;
    color: $colorAccent;
    text-align: center;
  }

  &__texts {
    padding: 0 4%;
  }

  &__paragraph {
    max-width: 60rem;
    font-weight: $bold;
    line-height: 2.5rem;
    color: $colorBase;
  }

  &__slogan {
    margin: 2rem 0;
    font-weight: $bold;
    color: $colorAccent;
  }

  &__gptw {
    display: flex;
    justify-content: flex-end;
    margin-top: 5.5rem;
  }

  &__gptwImg {
    width: 12rem;
  }
}
</style>
