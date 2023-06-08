import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PHP -> POO',
  description: 'PHP -> POO',
  base: '/php-poo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'PHP -> POO',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },      
    ],
    sidebar: [{
      text: 'Comenzar',   // required
      path: '/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Introducción', link: '/intro' },
        { text: 'Principios como Devs', link: '/cap-01-nuestros-principios-como-devs' },
        { text: 'Introducción a los Objetos', link: '/cap-02-introduccion-a-los-objetos' },
        { text: 'Cómo Pensar en Objetos', link: '/cap-03-como-pensar-en-objetos' },
        { text: 'POO según LOS MANUALES', link: '/cap-04-poo-segun-los-manualesobjetos' },
        { text: 'Empezar a plasmar los objetos en un diseño', link: '/cap-05-empezar-a-plasmar-los-objetos-en-un-diseno' },
        { text: 'Introducción a UML', link: '/cap-06-introducción-a-uml' },
        { text: 'Cómo representar una clase en UML', link: '/cap-07-como-representar-una-clase-en-uml' },
        { text: 'Ejercicio "Micaela y el Perro"', link: '/cap-08-ejercicio-micaela-y-el-perro' }      
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/php-poo' }
    ]
  }
})

