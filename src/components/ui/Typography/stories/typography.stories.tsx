import { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../index'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      disabled: {
        control: { type: 'select' },
      },
      options: [
        'Large',
        'H2',
        'H1',
        'H3',
        'Body1',
        'Body2',
        'Subtitle1',
        'Subtitle2',
        'Overline',
        'Link1',
        'Link2',
        'Caption',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Large',
  },
}

export const H1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'H1',
  },
}

export const H2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'H2',
  },
}

export const H3: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'H2',
  },
}

export const Body1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Body2',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'Link2',
  },
}

export const Link2AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <article>
        Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
      </article>
    ),
    variant: 'Link2',
  },
}
