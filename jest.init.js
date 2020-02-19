import { config } from "@vue/test-utils"
import store from './src/store'

config.mocks['$store'] = store