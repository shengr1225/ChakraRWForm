import type { ComponentMeta } from '@storybook/react'

import FormPage from './FormPage'

export const generated = () => {
  return <FormPage />
}

export default {
  title: 'Pages/FormPage',
  component: FormPage,
} as ComponentMeta<typeof FormPage>
