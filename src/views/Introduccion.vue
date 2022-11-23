<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    p.mt-5.mb-5 Apreciado aprendiz, bienvenido a este componente formativo donde estudiaremos las interfaces de usuario, como es la implantación del #[i software], el cual luego de pasar por varias etapas de la arquitectura y las fases del ciclo de desarrollo, se llega al cliente con un aplicativo que debe suplir las necesidades solicitadas. De la misma forma se validan las listas de chequeo que se deben tener al momento de entregar el sistema y verificar que las necesidades del cliente han sido solucionadas a partir de esos datos de chequeo. 
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
