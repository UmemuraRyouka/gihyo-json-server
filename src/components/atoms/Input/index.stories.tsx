import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from './index'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control:{ type: 'text'},
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string'},
      },
    },
    hasBorder: {
      control: { type: 'boolean'},
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean'},
      },
    },
    hasError: {
      control: { type: 'boolean'},
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table:{
        type:{ summary: 'boolean'},
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input{...args} />

// テキスト入力
export const Normal = Template.bind({})

// 赤枠のテキスト入力
export const Error = Template.bind({})
Error.args = { hasError: true }