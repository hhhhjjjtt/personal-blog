import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {codeInput} from '@sanity/code-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'My First Blog',

  projectId: 'xiwyehi7',
  dataset: 'production',

  plugins: [codeInput() ,structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

