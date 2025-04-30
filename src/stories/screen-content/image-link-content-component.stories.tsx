import type { Meta, StoryObj } from '@storybook/react';
import { ScreenContentImageLinkComponent } from '~/components/screen-content/post-types/image-link/screen-content-image-link-component';


const meta: Meta<typeof ScreenContentImageLinkComponent> = {
  title: 'ScreenContent/ImageLinkContent',
  component: ScreenContentImageLinkComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScreenContentImageLinkComponent>;

export const Default: Story = {
  args: {
    imageUrl: 'https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg',
  },
}; 