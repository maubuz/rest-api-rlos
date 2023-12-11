import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "REST API Learning Path",
  description: "A series of learning modules on using REST APIs",
  base: '/rest-api-rlos/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learning Modules', link: '/http-protocol/unit-details' }
    ],

    sidebar: [
      {
        text: 'REST API Fundamentals',
        items: [
          {
            text: 'Intro to HTTP',
            collapsed: false,
            items: [
              {
                text: 'Unit Details',
                link: '/http-protocol/unit-details'
              },
              {
                text: 'URL Components',
                link: '/http-protocol/urls'
              },
              {
                text: 'HTTP Communication',
                link: '/http-protocol/http-communication'
              }
            ]
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
