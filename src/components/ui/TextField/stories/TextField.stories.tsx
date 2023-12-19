import { FC } from 'react'

import { TextField } from '@/components/ui/TextField/TextField'
import { Meta, StoryObj } from '@storybook/react'

import cn from './TextFieldStories.module.scss'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
    error: {
      control: { type: 'radio' },
      description: 'Text',
      options: [true, false],
    },
    errorMessage: {
      control: { type: 'text' },
    },
    fullwidth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'night',
      values: [
        { name: 'night', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldDefault: Story = {
  args: {
    disabled: false,
    errorMessage: 'this is error',
    label: 'this is text field',
    placeholder: '...enter text',
  },
}

export const AllTextFields: FC = () => (
  <div>
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Stand TextFields:</h1>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>Type: text, password, search</h3>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <h4 style={{ marginRight: '10px' }}>Kinds:</h4>
        <p>default</p>
      </div>
    </div>
    <div className={cn.grid}>
      <div>
        <h4 className={cn.kindTextField}>Default</h4>
        <TextField {...TextFieldDefault.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Search</h4>
        <TextField {...TextFieldDefaultTypeSearch.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Password</h4>
        <TextField {...TextFieldDefaultTypePassword.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled</h4>
        <TextField {...TextFieldWithDisabled.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled search</h4>
        <TextField {...TextFieldWithDisabledTypeSearch.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled password</h4>
        <TextField {...TextFieldWithDisabledTypePassword.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField} style={{ marginBottom: '31px' }}>
          No label, no placeholder
        </h4>
        <TextField {...TextFieldNoLabelNoPlaceholder.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Error</h4>
        <TextField {...TextFieldWithError.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Error disabled</h4>
        <TextField {...TextFieldWithErrorWidthDisabled.args} />
      </div>
    </div>

    <div className={cn.fullWidth}>
      <div style={{ alignItems: 'flex-end', display: 'flex' }}>
        <h4 style={{ marginRight: '10px' }}>Kinds:</h4>
        <p style={{ margin: '0px' }}>fullwidth</p>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Default</h4>
        <TextField {...TextFieldDefaultFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField} style={{ marginBottom: '16px' }}>
          No label and placeholder
        </h4>
        <TextField {...TextFieldNoLabelNoPlaceholderFullWidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Password</h4>
        <TextField {...TextFieldWithTypePasswordFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Search</h4>
        <TextField {...TextFieldWithTypeSearchFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled</h4>
        <TextField {...TextFieldWithDisabledFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled password</h4>
        <TextField {...TextFieldWithDisabledTypePasswordFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Disabled search</h4>
        <TextField {...TextFieldWithDisabledTypeSearchFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Error</h4>
        <TextField {...TextFieldWithErrorFullwidth.args} />
      </div>
      <div>
        <h4 className={cn.kindTextField}>Error disabled</h4>
        <TextField {...TextFieldWithErrorWithDisabledFullwidth.args} />
      </div>
    </div>
  </div>
)

export const TextFieldDefaultTypeSearch: Story = {
  args: {
    disabled: false,
    errorMessage: 'this is error',
    label: 'this is text field search',
    placeholder: '...enter text',
    type: 'search',
  },
}
export const TextFieldDefaultTypePassword: Story = {
  args: {
    disabled: false,
    errorMessage: 'this is error',
    label: 'this is text field password',
    placeholder: '...enter text',
    type: 'password',
  },
}
export const TextFieldWithDisabled: Story = {
  args: {
    disabled: true,
    label: 'this is text field disabled',
    placeholder: '...enter text',
  },
}
export const TextFieldWithDisabledTypeSearch: Story = {
  args: {
    disabled: true,
    label: 'this is text field disabled search',
    placeholder: '...enter text',
    type: 'search',
  },
}
export const TextFieldWithDisabledTypePassword: Story = {
  args: {
    disabled: true,
    label: 'this is text field disabled password',
    placeholder: '...enter text',
    type: 'password',
  },
}

export const TextFieldWithError: Story = {
  args: {
    error: true,
    errorMessage: 'this is error',
    label: 'this is text field error',
    placeholder: '...enter text',
  },
}
export const TextFieldNoLabelNoPlaceholderFullWidth: Story = {
  args: {
    fullwidth: true,
  },
}
export const TextFieldWithErrorWidthDisabled: Story = {
  args: {
    disabled: true,
    error: true,
    errorMessage: 'this is error',
    label: 'this is text field error and disabled',
    placeholder: '...enter text',
  },
}
export const TextFieldNoLabelNoPlaceholder: Story = {
  args: {},
}
export const TextFieldWithTypePasswordFullwidth: Story = {
  args: {
    fullwidth: true,
    label: 'this is text field password',
    placeholder: '...enter text',
    type: 'password',
  },
}
export const TextFieldWithTypeSearchFullwidth: Story = {
  args: {
    fullwidth: true,
    label: 'this is text field search',
    placeholder: '...enter text',
    type: 'search',
  },
}
export const TextFieldDefaultFullwidth: Story = {
  args: {
    disabled: false,
    errorMessage: 'this is error',
    fullwidth: true,
    label: 'this is text field',
    placeholder: '...enter text',
  },
}
export const TextFieldWithDisabledFullwidth: Story = {
  args: {
    disabled: true,
    fullwidth: true,
    label: 'this is text field disabled',
    placeholder: '...enter text',
  },
}
export const TextFieldWithDisabledTypePasswordFullwidth: Story = {
  args: {
    disabled: true,
    fullwidth: true,
    label: 'this is text field disabled type password',
    placeholder: '...enter text',
    type: 'password',
  },
}
export const TextFieldWithDisabledTypeSearchFullwidth: Story = {
  args: {
    disabled: true,
    fullwidth: true,
    label: 'this is text field disabled type search',
    placeholder: '...enter text',
    type: 'search',
  },
}
export const TextFieldWithErrorFullwidth: Story = {
  args: {
    error: true,
    errorMessage: 'this is error with fullwidth',
    fullwidth: true,
    label: 'this is text field error ',
    placeholder: '...enter text',
  },
}
export const TextFieldWithErrorWithDisabledFullwidth: Story = {
  args: {
    disabled: true,
    error: true,
    errorMessage: 'this is error with fullwidth and disable',
    fullwidth: true,
    label: 'this is error with fullwidth and disable',
    placeholder: '...enter text',
  },
}
