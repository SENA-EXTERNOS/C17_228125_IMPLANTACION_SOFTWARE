<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Implantación del #[i software] y listas de chequeo

    .row.justify-content-center.mt-5
      .col-md-11
        .bloque-texto-g.color-acento-botones.p-5.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.margenes-primer-bloque
            p Comencemos diciendo que la implantación de #[i software] es un proceso riguroso que debe realizarse conforme a los estándares de la calidad del #[i software] establecidos por diferentes organizaciones.

    p.mt-5.m-5 Entre ellas se encuentran:
    .row.justify-content-center.mt-5
      .col-md-11    
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='alt')  

    .bg_bloque.row.justify-content-center.mt-5
      .row.justify-content-center
        .col.col-margenes-1
          .cajon.color-secundario.color-secundario-cajon-azul.p-3
            p.text-white Estos estándares permiten dar eficiencia y eficacia a los sistemas que se desarrollan, a las actividades que se realizan en pro de las necesidades y requerimientos del cliente, acompañadas de una buena construcción, mantenimiento y adaptabilidad de cada proyecto estrictamente avalado.
      .row.justify-content-center
        .col.col-margenes 
          p Todos esos estándares disponen de normas que rigen los modelos de sistemas a desarrollar, pero no definen con exactitud las funcionalidades y estructuras que tiene un software en particular; a eso se suman las condiciones y requisitos solicitados por el cliente, además de las fases y actividades que deben aplicarse en la puesta en marcha de cada proceso, en el desarrollo, pruebas y mantenimiento, lo que se conoce como implantación de software. Esto acompañado de la infraestructura tecnológica de la compañía donde se realiza la instalación y publicación de la arquitectura en la que se enfatiza la plataforma de desarrollo

    .row.justify-content-center.mt-5
      .col-md-7
        p Como se mencionó anteriormente, la implantación de #[i software] es una serie de procesos que se llevan a cabo por parte de los entes encargados de la puesta en marcha de un sistema de información adquirido por determinada compañía. Estos procesos determinan el nivel de operación que se requiere para mantener la estabilidad y eficiencia del sistema en sus primeras fases de funcionamiento, ya que la empresa que lo adquiere demanda actividades y subprocesos que deben realizar las partes relacionadas, con la finalidad de definir cada tarea conforme avance el desarrollo en las áreas individuales. Todo esto con el objetivo de aplicar las modificaciones, implementaciones, instalaciones y pruebas requeridas, buscando mejoras a nivel de operatividad, de administración y solventar los errores y necesidades contemplados en la firma del contrato.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='alt')

    p.mt-5.mb-5 Los siguientes procesos se tienen en cuenta para implantar un sistema de información luego de las fases preliminares de análisis, diseño, desarrollo, pruebas y demás, contemplados en el ciclo de vida de desarrollo de #[i software]. Todos estos procedimientos requieren en su medida tiempo, desempeño y destrezas de quienes los llevan a cabo.                 
    .row.justify-content-center.mt-5
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img5.png', alt='', style='')

        .tarjeta.p-4(x="30%" y="17%" numero="+" style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center.text-regular Es todo lo relacionado con las asignaciones de perfiles, roles y accesos de los usuarios que interactúan con la plataforma en progreso. Si existen aplicativos con configuraciones y asignaciones para cada usuario, es necesario realizar reemplazo y migración de la información detallada para realizar empalme a la nuevas características de #[i software]; de la misma forma, se deben realizar todas las personalizaciones y adaptaciones en cada uno de los módulos contemplados para cada usuario en específico.

        .tarjeta.p-4(x="69%" y="17%" numero="+" style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center.text-regular Se trata de mecanismos de ayuda que permiten a los usuarios trabajar de la mejor manera con la plataforma recientemente implantada en los ordenadores y con la cual operan día a día a partir de la puesta en marcha. Los capacitadores tienen la necesidad de crear planes para darle facilidad al personal que interactúa con el #[i software] para su facilidad de uso y su manejo óptimo. Todas las áreas de la compañía deben ser capacitadas y contar con el respaldo del equipo proveedor de #[i software] desde el área de soporte interno, para saber resolver inconvenientes de funcionamiento o básicos, hasta los reacios al cambio. 

        .tarjeta.p-4(x="10%" y="77%" numero="+" style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center.text-regular Tiene que ver con la infraestructura y recursos tecnológicos de quien adquiere el #[i software]; en este apartado se tiene en cuenta la eficiencia de los ordenadores, configuraciones e instalaciones de las bases de datos a utilizar, permisos de cada usuario del sistema, que permitan manejar un grado de seguridad con respecto a las asignaciones de cada funcionario, capacidades, tanto de almacenamiento como en procesamiento, sistema operativo y compatibilidad, dependiendo del tipo de sistema a implantar. Si las capacidades tecnológicas, es decir, de procesamiento, no cumplen las especificaciones del nuevo sistema, se debe realizar inversión en infraestructura tecnológica que soporte las necesidades de la nueva arquitectura del #[i software] implementado.

        .tarjeta.p-4(x="49%" y="83%" numero="+" style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center.text-regular Se tienen en cuenta las pruebas realizadas referentes a las necesidades del cliente y de los usuarios en particular, que finalmente son los que interactúan con los sistemas de información. Para tener un grado de aceptación alto por parte de los funcionarios, se debe dejar totalmente funcional y con las mejoras en el funcionamiento que fueron requeridas con anterioridad.
                    
        .tarjeta.p-4(x="89%" y="77%" numero="+" style='border-radius: 10px; background-color: #FECB2F')
          p.mb-0.text-center.text-regular Es visualizar que cada usuario pueda trabajar y mantener estabilidad en el puesto con la definición del rol asignado. En este caso los funcionarios prueban en tiempo real la operatividad del aplicativo con sus funciones de forma normal, en caso de presentar inconvenientes, debe contar con el soporte por parte de los encargados del nuevo sistema.

    .row.justify-content-center.mt-5
      .col-md-10.mt-5
        .cajon.color-primario.color-secundario-cajon-fusia.p-3
          p Ahora abordemos los temas correspondientes a verificación y validación, los cuales hacen parte de un proceso más riguroso, el correspondiente a las pruebas de #[i software]; estos temas van de la mano, antes de la puesta en marcha de un sistema en determinada compañía y deben llevarse a cabo según las necesidades y requerimientos del cliente; además de la estandarización de calidad a la que deben someterse todos los sistemas de información en las etapas de desarrollo.

    p.mt-5.mb-5 Ampliemos la información sobre cada uno de estos términos:

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Verificación")
        .row.p-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='')          
          .col-md-8.mb-4.mb-md-0
            p Está relacionado con la implementación y el ciclo de desarrollo de #[i software]; tiene en cuenta que el producto diseñado cumpla con los estándares y normas de calidad regidas. Son actividades que determinan la implementación del #[i software] correctamente, además, son procesos que validan si una fase del ciclo de desarrollo de #[i software] cumple los requerimientos de la fase inmediatamente anterior. La verificación está al tanto de los procesos de implementación, sobre todo usando buenas prácticas de desarrollo. Teniendo una verificación bien estructurada, no es necesario implementar validación porque la primera se encarga de todo el funcionamiento de las fases de ciclo de desarrollo incluyendo tecnologías como DevOps, con la finalidad de adquirir los estándares de calidad y desarrollo exigidos, además de las necesidades del mercado y del cliente. 
      .py-3.py-md-4(titulo="Validación")
        .row.p-5
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='')
          .col-md-8.mb-4.mb-md-0
            p Está relacionado con el cliente, los requerimientos solicitados y que cumpla con sus necesidades; son pruebas realizadas que otorgan el funcionamiento general del sistema acorde con las solicitudes del cliente. En este sentido, la validación contempla si se construye el sistema correcto, y en este aspecto, se mira de una forma generalizada con respecto a la verificación que se realiza por cada secuencia y por la definición de requerimientos funcionales y no funcionales que se delegan desde la etapa de análisis y diseño.

    h2.titulo-segundo.color-acento-contenido.mt-5 Listas de chequeo (#[i checklist])
    .row.justify-content-center.mt-5
      .col-md-7
        p Por otra parte tenemos las listas de chequeo, documentos especializados destinados a la verificación de procesos repetitivos y que deben ser auditados para establecer su estado. Un ejemplo claro de lista de chequeo es la que hacen todos los pilotos y copilotos antes de realizar un vuelo, verifican a través de una lista de chequeo o #[i checklist] que todo esté en orden y tenga buen funcionando, no pueden despegar el avión si no han validado las condiciones idóneas para realizar el viaje. 
        .cajon.color-acento-botones.color-secundario-cajon-verde.p-3.mt-5
          p Por lo tanto, estas tareas repetitivas ayudan a mantener la estructura de los sistemas de información, toda vez que se deben realizar ajustes indicados en caso que falte una tarea o un ítem perteneciente a la lista.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema1/img8.png', alt='')

    p.mt-5.mb-5  Las estructuras de las listas de chequeo para los sistemas de información determinan los procesos que se realizan en las fases del desarrollo de #[i software], con el fin de controlar y minimizar los riesgos a fallas e inconsistencias. Conozcamos las diferentes listas de chequeo:         
    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-acento-botones.mb-5        
          .tarjeta.clr-paleLigthGreen.p-4(titulo="Lista de chequeo apertura de datos para los sistemas de información")
            p En ella se incluyen las necesidades o requerimientos funcionales y no funcionales inmersos en la plataforma que se implementa, en la cual se manifiesta la información requerida. Este proceso indica si el sistema cumple con las especificaciones para las cuales es desarrollado.
          .tarjeta.clr-paleLigthGreen.p-4(titulo="Lista de chequeo de accesibilidad")
            p Cada aplicativo que se desarrolla e implementa cuenta con una estructura de accesibilidad, la cual permite al usuario ingresar a los módulos que le den acceso; para este caso, esta lista de chequeo se realiza con el fin de validar si el sistema cumple con las características de accesibilidad idóneas e indicadas en el proceso de desarrollo. 
          .tarjeta.clr-paleLigthGreen.p-4(titulo="Lista de chequeo de guía de estilo")
            p Los estilos son una parte fundamental para las aplicaciones web y móviles, por esta razón se realiza lista de chequeo para la validación de los estilos que se llevan a cabo en la plataforma, siendo una funcionalidad que debe cumplir con los lineamientos estructurados en esta #[i checklist].
          .tarjeta.clr-paleLigthGreen.p-4(titulo="Lista de chequeo de característica de arquitectura de información")
            p Se define como lista de chequeo para la validación de la arquitectura escogida en la cual se desarrolla la plataforma tecnológica, por lo tanto, la característica principal es establecer si con este modelado el sistema cumple o no con lo requerido.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema1/img9.png", alt="alt", style="width:450px;").m-auto

    p.mt-5.mb-5 A continuación, presentamos un modelo de formato de lista de chequeo realizado para un proceso de accesibilidad en la implementación del sistema de información. Se debe tener en cuenta que los formatos pueden variar dependiendo del área donde se aplique el proceso e iteración de la lista.
    .row.justify-content-center.mt-5
      .col-md-9
        .tabla-b.color-acento-botones
          .tabla-b__header
            h4.mb-0.text-center Lista de chequeo accesibilidad sistema información
          .tabla-b__header-1          
            tr
             td.h4.mb-0 Área:
          .tabla-b__header-2              
            tr 
             td.h4.mb-0 Nombres y apellidos:
          .tabla-b__header-1 
            tr 
             td.h4.mb-0 Documento: 

          table
            tr
            tr
              th
              th 
              th.text-regular SI
              th.text-regular NO
            tr
              th.text-regular 1
              th.text-regular Colores y contraste indicados.
              th 
              td               
            tr
              th.text-regular 2
              th.text-regular Lectura en pantalla.
              th
              th
            tr
              th.text-regular 3
              th.text-regular Facilidad de información.
              th
              th          
            tr
              th.text-regular 4
              th.text-regular Menú de navegación claro.
              th
              th   
            tr
              th.text-regular 5
              th.text-regular Se realizaron pruebas de usabilidad.
              th
              th 
            tr
              th.text-regular 6
              th.text-regular Se realizaron pruebas con usuarios, virtual y física.
              th
              th    
            tr
              th.text-regular 7
              th.text-regular Se encontraron inconvenientes en la página.
              th
              th
            tr
              th.text-regular 8
              th.text-regular Se encontraron inconvenientes en el menú principal.
              th
              th
            tr
              th.text-regular 9
              th.text-regular Dificultad para encontrar la información.
              th
              th  
            tr
              th.text-regular 10
              th.text-regular Se exceden los menús en niveles.
              th
              th                                                                                                 
           
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
