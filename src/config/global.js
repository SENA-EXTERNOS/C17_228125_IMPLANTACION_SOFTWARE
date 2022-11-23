export default {
  global: {
    componenteFormativo: 'Implantación del <i>software</i>',
    descripcionCurso:
      'En este componente formativo se abordarán temas referentes a la interfaz gráfica de usuario y experiencia de usuario, temas importantes en el desarrollo de plataformas tecnológicas, puesto que relacionan directamente al usuario con la vista y navegabilidad de las aplicaciones, por lo tanto, debe ir encaminadas a enriquecer las necesidades y facilidades de uso y agilidad en el comportamiento de los sistemas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Implantación del <i>software</i> y listas de chequeo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manuales de usuario de los sistemas de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de enseñanza aprendizaje',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Implantación del <i>software</i> y listas de chequeo',
      referencia:
        'Muñoz, J. (s.f.). <i>Implantación de un sistema de información</i> (video). YouTube. ',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=T2ZbvQTOFas ',
    },
    {
      tema: 'Implantación del <i>software</i> y listas de chequeo',
      referencia:
        'Camacho, R. (2020). <i>Verificación frente a validación en software integrado</i>. Parasoft. ',
      tipo: 'Artículo',
      link:
        'https://es.parasoft.com/blog/verification-vs-validation-in-embedded-software/ ',
    },
    {
      tema: 'Implantación del <i>software</i> y listas de chequeo',
      referencia:
        'Chacón, B. (s.f.). <i>Pruebas de implementación del software</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=K0mw7JWy9fE ',
    },
    {
      tema: 'Manuales de usuario de los sistemas de información',
      referencia:
        'Choquehuanca, J. (2020). <i>Diferencias entre Manual de Usuario y Manual Técnico</i> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JHiaGw8ziBc ',
    },
  ],
  glosario: [
    {
      termino: 'Capacitación de usuarios',
      significado:
        'se trata de mecanismos de ayuda que permiten a los usuarios trabajar de la mejor manera con la plataforma recientemente implantada en los ordenadores y con la cual operan día a día a partir de la puesta en marcha.',
    },
    {
      termino: 'Configuraciones del sistema',
      significado:
        'es todo lo relacionado con las asignaciones de perfiles, roles, y accesos de los usuarios que interactúan con la plataforma en progreso.',
    },
    {
      termino: 'Estándar',
      significado:
        'está relacionado con un producto o servicio y tiene similitudes con otros productos o servicios a partir de datos específicos.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'elementos físicos que componen un equipo electrónico, normalmente una computadora.',
    },
    {
      termino: 'Implantación',
      significado:
        'instaurar o introducir un sistema de información, poner en marcha para que los usuarios finales se familiaricen con él.',
    },
    {
      termino: 'Listas de chequeo',
      significado:
        'documentos especializados destinados a la verificación de procesos repetitivos y que deben ser auditados para establecer su estado.',
    },
    {
      termino: 'Procesos',
      significado:
        'conjunto de operaciones o funciones realizadas para determinado producto, ya sea un documento o una aplicación.',
    },
    {
      termino: '<i>Software</i>',
      significado:
        'conjunto de métodos u operaciones que interactúan entre sí para llevar a cabo funcionalidades que automatizan una tarea en específico.',
    },
    {
      termino: 'Validación',
      significado:
        'proceso en el cual se realizan revisiones de las funcionalidades de un sistema de información a partir de las necesidades del cliente.',
    },
    {
      termino: 'Verificación',
      significado:
        'revisión que se realiza a cada componente de software en sus respectivas fases de desarrollo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camacho, R. (2020).<i>Verificación frente a validación en software integrado</i>. Parasoft. ',
      link:
        'https://es.parasoft.com/blog/verification-vs-validation-in-embedded-software/',
    },
    {
      referencia:
        'DNP – Departamento Nacional de Planeación. (2020). <i>Guía para la elaboración del manual de usuario de los sistemas de información.</i>',
      link:
        'https://colaboracion.dnp.gov.co/CDTI/Oficina%20Informatica/Sistemas%20de%20informaci%C3%B3n/Gu%C3%ADas%20Formatos%20Plantillas/Gu%C3%ADa%20para%20la%20Elaboraci%C3%B3n%20del%20Manual%20del%20Usuario%20del%20Sistema.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
