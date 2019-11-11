import html from 'html-template-tag'
import Docute from '../src'
import prismLanguages from '../src/utils/prismLanguages'
import ColorBox from './components/ColorBox.vue'


new Docute({
  target: 'app',
  title: 'مستندات شبیه‌ساز دوبعدی فوتبال',
  highlight: [ 'c', 'cpp', 'bash', 'json', 'markdown'],
  plugins: [
    process.env.NODE_ENV === 'production'
  ].filter(Boolean),
  editLinkBase: 'https://github.com/egoist/docute/tree/master/website/docs',
  editLinkText: 'این صفحه را در گیتهاب ویرایش کنید.',
  router: {
    mode: 'history'
  },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  sourcePath: '/',
  componentMixins: [
    {
      data() {
        return {
          builtinLanguages: prismLanguages.builtin,
          deps: __DEPS__
        }
      },
      methods: {
        insertCustomFontsCSS() {
          const ID = 'custom-fonts-css'
          const existing = document.getElementById(ID)
          if (existing) {
            existing.parentNode.removeChild(existing)
          } else {
            const style = document.createElement('style')
            style.id = ID
            style.textContent = `
            
            `
            document.head.appendChild(style)
          }
        }
      },
      components: {
        ColorBox
      }
    }
  ],
  versions: {
    'Agent2D': {
      link: '/'
    },
    'Librcsc': {
      link: 'https://v3.docute.org'
    }
  },
  nav: [
    {
      title: 'مستندات',
      link: '/'
    },
    {
      title: 'نوشته‌ها',
      link: 'https://github.com/egoist/docute'
    }
  ],
  sidebar: [
    {
      title: 'پایه‌ای',
      children: [
        {
          title: 'Introduction',
          link: '/'
        },
        {
          title: 'Customization',
          link: '/guide/customization'
        },
        {
          title: 'Markdown Features',
          link: '/guide/markdown-features'
        },
        {
          title: 'Use Vue in Markdown',
          link: '/guide/use-vue-in-markdown'
        },
        {
          title: 'Internationalization',
          link: '/guide/internationalization'
        },
        {
          title: 'Plugin',
          link: '/guide/plugin'
        },
        {
          title: 'Deployment',
          link: '/guide/deployment'
        }
      ]
    },
    {
      title: 'پیشرفته',
      children: [
        {
          title: 'Use With Bundlers',
          link: '/guide/use-with-bundlers'
        },
        {
          title: 'Offline Support',
          link: '/guide/offline-support'
        }
      ]
    },
    {
      title: 'منابع',
      children: [
        {
          title: 'Options',
          link: '/options'
        },
        {
          title: 'Built-in Components',
          link: '/builtin-components'
        },
        {
          title: 'Plugin API',
          link: '/plugin-api'
        }
      ]
    },
    {
      title: 'پس گفتار',
      link: '/credits'
    }
  ],
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()}.
   ساخته شده با ❤️ در 
   <a href="https://kn2c.ir" target="_blank">
   KN2C Robotics Lab.</a>
    
    برگرفته از 
    <a href="https://docute.org/">DOCUTE</a>
     </div>
  `,
  banner: {
    template: html`
      <div class="docute-banner">
        <note :label="false">
          ما را حمایت کنید
          <a href="" target="_blank">
            از این طریق
             <ExternalLinkIcon />
            </a>.
          </note>
      </div>
    `,
    components: {}
  }
})

Vue.component('ReverseText', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: html`
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
  computed: {
    reversedText() {
      return this.text
        .split('')
        .reverse()
        .join('')
    }
  }
})

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
