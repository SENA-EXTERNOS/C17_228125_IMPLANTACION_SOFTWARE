<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Manuales de usuario de los sistemas de información


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img.bloque-img-left(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
      )(data-aos="fade-down-right")                             
      .bloque-texto-g__texto-azul-2.bloque-text-rigth-1(data-aos="fade-left")
        p.text-white Otro punto importante son los manuales de usuario correspondientes a los sistemas de información que se desarrollan en todas las áreas y ámbitos, ya sean tecnológico, económico, social, político, educativo, entre otros; con el fin de mostrar al usuario final la forma de interactuar y operar frente a la plataforma, le ayuda a gestionar la información, realizar consultas, navegar por los diferentes módulos, obtener información e informes, etc. Es importante, en este sentido, la experiencia de usuario, la cual es indispensable frente al diseño y la facilidad de uso en cada área donde accede; el sistema debe permitir el uso de forma amigable, sencilla y agradable a la palpación del usuario. 

    p.mt-5.mb-5 Para ampliar la información sobre los manuales de usuario de los sistemas de información, lo invitamos a ver el siguiente video.
    figure.mt-5
      .video(data-aos="zoom-out")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mt-5
      .col-md-.mt-5
        .cajon.color-acento-contenido.color-secundario-cajon-amarillo.p-3
          p Ahora, los procedimientos a seguir para la creación de los manuales de usuario están basados en la usabilidad, demostración y facilidad, para que los usuarios finales interpreten y conozcan a cabalidad las funcionalidades.

    p.mt-5.mb-5 Conozca los principales ítems que debe tener el manual de usuario:
    .row.justify-content-center.mb-5.mt-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Objetivos") Definir la documentación correspondiente que le permita a los usuarios finales, afianzar el uso y manejo de la plataforma que se ha puesto en marcha y conocer, sobre todo, las funcionalidades de la misma, saber a qué corresponde cada opción en el sistema y, de esa forma, manipularlo y obtener los datos necesarios.

          p(numero="2" titulo="Cómo empezar") Los manuales de usuario deben permitir la legibilidad para cualquier tipo de usuario y que sea entendido por todo público o uno en específico, dependiendo de la arquitectura, el diseño y hacia qué área de la compañía esté desarrollado el #[i software]; por lo tanto, se necesita definir los conocimientos que debe tener el operario para manipular el sistema; por ejemplo, manejo de la #[i Suite de Office], o informática básica, por mencionar algunos.

          p(numero="3" titulo="<i>Hardware</i> y <i>software</i>") Es oportuno e importante mencionar la infraestructura que soporta el sistema a implantar, los requerimientos mínimos para funcionar, el sistema operativo donde puede ejecutarse, el soporte de la base de datos, el tipo de servidor (en caso que sea necesario), los equipos clientes donde se ejecuta la plataforma, las características de procesamiento y almacenamiento. Todos estos aspectos se relacionan en el manual de usuario, indicando las necesidades de la aplicación para operar de forma equilibrada y natural, dando las prestaciones requeridas para cada uno de los usuarios.
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema2/img2.png", alt="alt")

    .row.justify-content-center.mt-5          
      .col-md-4(data-aos="fade-down-right")
        figure
          img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")      
      .col-md-8(data-aos="fade-left")
        .bloque-texto-b.color-bloque-texto-verde-primario
          .bloque-texto-b__texto
            p Las normas que especifican los requisitos que deben tener los documentos de usuarios cuando se desarrolla una plataforma tecnológica, indican de qué manera debe estar contenida la información, de modo que garantice el entendimiento de los usuarios; está destinado para los manuales de usuarios y otro tipo de documentos para los usuarios mismos, pero no es aplicable para las fases o procesos de desarrollo.

        .bloque-texto-b.color-bloque-texto-amarillo.mt-5
          .bloque-texto-b__texto
            p El estándar IEEE STD 1063-2001 establece los parámetros que hacen parte de los documentos diseñados para los usuarios de #[span.text-italica software], la organización y la forma en que se muestra la información, la cual debe ser clara y entendible por todos los operarios que manipulen el sistema a implementar.
           
    p.mt-5.mb-5  Los siguientes datos son necesarios para los documentos de usuario:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img4.png' alt='')
        p.text-center Identificación de los datos.

      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img5.png' alt='')
        p.text-center Tabla de contenido para documentos con más de 10 páginas.
      
      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img6.png' alt='')
        p.text-center Lista de gráficos.

      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img7.png' alt='')
        p.text-center Introducción.  

      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img8.png' alt='')
        p.text-center Uso de la documentación. 
      
      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img9.png' alt='')
        p.text-center Procedimientos.

      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img10.png' alt='')
        p.text-center Glosario. 

      .tarjeta.h-tarjeta-avatar.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img11.png' alt='')
        p.text-center Referencias.

    h2.titulo-segundo.color-acento-contenido.mt-5 Especificaciones
    p.mt-5.mb-5 Para concluir, los manuales de usuario contienen información completa sobre el producto desarrollado, se determinan las especificaciones a tener en cuenta para proveer al usuario la documentación requerida para el uso, manipulación e interacción con el #[i software] implantado en la compañía; para su fácil manejo, debe contener gráficos, imágenes, diagramas y definición de conceptos, que ayuden a entender cada uno de los módulos o aplicativos a los cuales se accede de manera frecuente para tener la información a su disposición con respecto al área de trabajo en la que se desempeña la persona que lo utiliza. El documento manual de usuario es por excelencia la única fuente de información del producto desarrollado, por lo tanto es necesario que sea comprensible, detallado, completo y accesible; además hay que tener claridad en que este documento no solo es para usuarios nuevos del sistema sino también cualquier persona que desee aprender más sobre las funcionalidades de la plataforma.                                                
    p.mb-5 Por lo tanto, los siguientes ítems son relevantes a tener en cuenta para la especificación y contenido de los manuales de usuario:

    .row.justify-content-center.mt-5          
      .col-md-7   
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
          .row(titulo="Título").p-2
            .row.justify-content-center              
              p Es recomendable que el documento tenga un título que lo identifique sobre cualquier otro documento, se recomienda que tenga información sobre los creadores del documento, por ejemplo, derechos de autor. Las guías o manuales de usuario contemplan las normativas y estándares de los entes reguladores para regirse sobre esas normas y así, darle al operador final, la información bien organizada y estructurada.
          div(titulo="Navegación en el documento").p-2
            .row.justify-content-center
              p Es una descripción sobre cómo navegar en el documento, como guía o prefacio, donde se indica la información que contiene el manual de usuario para que sea fácil la navegación y búsqueda de temas específicos que ayuden a agilizar los procesos y dudas correspondientes en cada uno de los módulos de los aplicativos del sistema.
          div(titulo="Tabla de contenido").p-2
            .row.justify-content-center
              p Determina cada ítem que se aborda en la guía del usuario y el número de página donde se encuentra cada tema abordado en el documento. La tabla de contenido debe realizarse al finalizar todos los temas que se trabajan en el manual, porque incluye todos los elementos de los cuales se habla en el documento.
          div(titulo="Descripción general del propósito del documento").p-2
            .row.justify-content-center
              p Es la información generalizada por la cual es creado el documento para los usuarios, detalla los motivos y razones de su origen, la metodología y la justificación que, finalmente, se evidencia en la creación del #[i software].
          div(titulo="Alcances de la aplicación").p-2
            .row.justify-content-center
              p Contempla los alcances de la aplicación, la cual es desarrollada para solucionar o realizar los requerimientos solicitados por el cliente; en esta parte el alcance está dirigido al funcionamiento de la aplicación y las necesidades que cubre, es decir, el objetivo principal por el cual es implementado.
          div(titulo="Funcionalidades y pasos").p-2
            .row.justify-content-center
              p Es la descripción general de las funcionalidades del sistema y los pasos sobre cómo usarlas; en este tema, se definen todos los pasos de cada una de las pantallas de los módulos y aplicativos de la plataforma como tal y es necesario utilizar imágenes o gráficos, para dar interactividad y mayor entendimiento.
          div(titulo="Sección de solución de problemas").p-2
            .row.justify-content-center
              p Representa el área del documento donde se presentaron inconvenientes de la plataforma al momento de realizar pruebas antes del montaje y sus respectivas soluciones, detalladas y con retroalimentación clara y entendible para los usuarios.
          div(titulo="Preguntas y respuestas").p-2
            .row.justify-content-center
              p Corresponde a la interacción de usuarios con el proveedor, donde se evidencian las dudas, inquietudes o falencias de los operarios en los diferentes módulos del sistema.
          div(titulo="Información adicional").p-2
            .row.justify-content-center
              p Detallar datos de contactos y sobre todo, dónde se pueda encontrar información adicional sobre el documento o paso a paso, con datos relevantes que no estén incluidos en la guía del usuario.
          div(titulo="Glosario").p-2
            .row.justify-content-center
              p Se deben incluir los términos relevantes que se abordan en el desarrollo del documento con su respectiva definición en el contexto en el cual se abordan, para facilitar a los lectores el entendimiento de secciones puntuales en el transcurso de la lectura.                                   
      .col-md-5.mt-5
        figure
          img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt")      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
