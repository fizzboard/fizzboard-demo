import type { Meta, StoryObj } from '@storybook/react';
import { ScreenContentTextComponent } from '~/components/screen-content/post-types/text-content/screen-content-text-component';


const meta: Meta<typeof ScreenContentTextComponent> = {
  title: 'ScreenContent/TextContent',
  component: ScreenContentTextComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScreenContentTextComponent>;

export const Default: Story = {
  args: {
    textContent: 'Hello, world!',
  },
}; 