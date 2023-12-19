import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      parameters: {
        backgrounds: {
          default: 'facebook',
          values: [
            {
              name: 'twitter',
              value: '#00aced',
            },
            {
              name: 'facebook',
              value: '#3b5998',
            },
          ],
        },
      },
    },
  },
}

export default preview
