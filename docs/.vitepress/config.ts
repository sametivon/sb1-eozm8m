import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Subscription Assistant',
  description: 'Smart Digital Subscription Management',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Analyze', link: '/analyze' },
      { text: 'Calculator', link: '/calculator' },
      { text: 'Tips', link: '/tips' },
      { text: 'Manager', link: '/manager' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Subscription Analysis', link: '/analyze' },
          { text: 'Cost Calculator', link: '/calculator' },
          { text: 'Optimization Tips', link: '/tips' },
          { text: 'Subscription Manager', link: '/manager' }
        ]
      }
    ],
    footer: {
      message: 'Smart Subscription Management Made Easy',
      copyright: '© 2024 Subscription Assistant'
    }
  }
})