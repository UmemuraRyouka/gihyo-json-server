import { ComponentMeta,ComponentStory } from '@storybook/react'
import Badge from './index'

export default {
  title: 'Atoms/Badge',
  argTypes:{
    content:{
      control: { type: 'text'},
      description: 'バッジのテキスト',
      table:{
        type: { summary: 'string'},
      },
    },
    backgroundColor:{
      control: { type: 'color'},
      description: 'バッジの色',
      table:{
        type: { summary: 'string'},
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

// オレンジ色のバッジ
export const Orange = Template.bind({})
Orange.args = { content: '1', backgroundColor: '#ed9f28' }

// 緑色のバッジ
export const Green = Template.bind({})
Green.args = { content: '10', backgroundColor: '#32bf00' }

// 赤色のバッジ
export const Red = Template.bind({})
Red.args = { content: '10', backgroundColor: '#d4001a' }