import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './button'

export default {
    component: Button,
    title: 'common/button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  color: 'primary',
  title: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  title: 'secondary',
}

export const Contained = Template.bind({})
Contained.args = {
  variant: 'contained',
  color: 'primary',
  title: 'contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  title: 'outlined',
}

export const Large = Template.bind({})
Large.args = {
  variant: 'contained',
  color: 'primary',
  title: 'large',
  size: 'lg'
}
export const Medium = Template.bind({})
Medium.args = {
  variant: 'contained',
  color: 'primary',
  title: 'medium',
  size: 'md'
}
export const Small = Template.bind({})
Small.args = {
  variant: 'contained',
  color: 'primary',
  title: 'small',
  size: 'sm'
}