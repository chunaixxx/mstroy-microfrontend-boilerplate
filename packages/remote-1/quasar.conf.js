module.exports = function (/* ctx */) {
  return {
    supportTS: false,

    boot: [],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      vueRouterMode: 'hash',

      chainWebpack(/* chain */) {},
    },

    devServer: {
      https: false,
      port: 8081,
      open: true, // opens browser window automatically
    },

    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      importStrategy: 'auto',

      plugins: [],
    },

    animations: [],

    ssr: {
      pwa: false,
    },

    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: `remote-1`,
        short_name: `remote-1`,
        description: `A Quasar Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      bundler: 'packager',

      packager: {},

      builder: {
        appId: 'remote-1',
      },

      nodeIntegration: true,

      extendWebpack(/* cfg */) {},
    },
  }
}
