const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  base: '/TIL/',
  title: '👀 Ory',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docker 🐳',
        link: '/docker/',
      },
      {
        text: 'Kubernetes 🐋',
        link: '/Kuber/',
      },
      {
        text: 'Nginx',
        link: '/Nginx/',
      },
      {
        text: 'Gunicorn 🦄',
        link: '/Gunicorn/',
      },
      {
        text: 'S3 ♻️',
        link: '/SimpleStorage/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/docker/': [
        {
          title: 'Docker',
          collapsable: false,
          children: [
            '',
            'using-docker',
          ]
        }
      ],
      '/Kuber/': [
        {
          title: 'Kubernetes',
          collapsable: false,
          children: [
            '',
            'using-kuber',
          ]
        }
      ],
      '/Nginx/': [
        {
          title: 'Nginx',
          collapsable: false,
          children: [
            '',
            'using-nginx',
          ]
        }
      ],
      '/Gunicorn/': [
        {
          title: 'Gunicorn',
          collapsable: false,
          children: [
            '',
            'using-gunicorn',
          ]
        }
      ],
      '/SimpleStorage/': [
        {
          title: 'S3',
          collapsable: false,
          children: [
            '',
            'using-simple',
          ]
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
