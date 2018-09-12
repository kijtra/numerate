const path = require('path')
const mix = require('laravel-mix')

mix.config.vue.esModule = true

mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .setPublicPath('public')
    .version()
    .sourceMaps()
    .disableNotifications()
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '~': path.join(__dirname, './resources/js')
            }
        },
        output: {
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: mix.config.hmr ? '//localhost:8080' : '/'
        }
    })
    .options({
        polyfills: [
            'Promise'
        ],
        processCssUrls: false,
        postCss: [
            require('autoprefixer')({
                browsers: ['last 5 versions', '> 2%', 'ie >= 11'],
                cascade: false,
                grid: true
            }),
            require('css-mqpacker')()
        ]
    })
    .extract([
        'vue',
        'axios',
        'vuex',
        'vue-i18n',
        'vue-meta',
        'js-cookie',
        'vue-router',
        'vuex-router-sync'
    ])
