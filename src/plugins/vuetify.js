import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

import themeConfig from '../../themeConfig'

export default createVuetify(
    {
        theme: {
            defaultTheme: 'themeConfig',
            themes: {
                themeConfig
            },
        }
    }
)
