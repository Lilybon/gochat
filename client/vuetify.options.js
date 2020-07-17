import LRU from 'lru-cache'
const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60
})
export default {
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    dark: true,
    options: {
      themeCache: themeCache,
      customProperties: true,
      minifyTheme: function (css) {
        return process.env.NODE_ENV === 'production'
          ? css.replace(/[\s|\r\n|\r|\n]/g, '')
          : css
      },
    },
    themes: {
      dark: {
        primary: {
          lighten1: '#33AADC',
          base: '#2EA6FF',
          darken1: '#1F94FB',
          darken2: '#3D6A97'
        },
        accent: {
          lighten1: '#213040',
          base: '#18222D',
          darken1: '#131415'
        },
        secondary: {
          base: '#D074E6'
        },
        info: {
          base: '#FFFFFF',
          darken1: '#AFC0D3',
          darken2: '#8E8E92'
        },
        warning: {
          base: '#FD9500'
        },
        error: {
          lighten1: '#FE8D86',
          base: '#FF3B2E'
        },
        success: {
          lighten1: '#64FFDA',
          base: '#4AD863'
        }
      }
    }
  }
}