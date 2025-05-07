import type { Meta, StoryObj } from '@storybook/react';
import { ScreenContentIframeLinkComponent } from '~/components/screen-content/post-types/iframe-link/screen-content-iframe-link-component';


const meta: Meta<typeof ScreenContentIframeLinkComponent> = {
  title: 'ScreenContent/IframeLinkContent',
  component: ScreenContentIframeLinkComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScreenContentIframeLinkComponent>;

export const Default: Story = {
  args: {
    iframeUrl: 'https://fizzboard.github.io/fizzboard-demo/',
  },
};
