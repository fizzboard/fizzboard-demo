import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';

import { BoardComponent } from '~/components/board-component/board-component';
import { createScreenIdForRowAndColumn } from '~/utils';
import { FzbBoardId, FzbPostId } from '~/zod-types/branded-strings';
import { BoardLocationSettingId } from '~/zod-types/screen-config/board-location-setting';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'FizzBoard/BoardComponent',
  component: BoardComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    screenPosts: {
      control: 'object',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof BoardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Create a reusable screen ID for the single screen story
const boardId = '1234567890' as FzbBoardId;
const screen1Id = createScreenIdForRowAndColumn(boardId, 0, 0);
const post1Id = `post-${screen1Id}` as FzbPostId;
const screen2Id = createScreenIdForRowAndColumn(boardId, 0, 1);
const post2Id = `post-${screen2Id}` as FzbPostId;
const screen3Id = createScreenIdForRowAndColumn(boardId, 1, 0);
const screen4Id = createScreenIdForRowAndColumn(boardId, 1, 1);
const post4Id = `post-${screen4Id}` as FzbPostId;


export const SingleScreenNoPost: Story = {
  args: {
    rowCount: 1,
    columnCount: 1,
    isFullscreen: false,
    boardLocationSettingId: "bls-other" as BoardLocationSettingId,
    screenPosts: [{ screenId: screen1Id, postData: null }],
    onRequestFullscreen: fn(),
  },
}

export const SingleScreenWithTextContentPost: Story = {
  args: {
    rowCount: 1,
    columnCount: 1,
    isFullscreen: false,
    boardLocationSettingId: "bls-other" as BoardLocationSettingId,
    screenPosts: [{
      screenId: screen1Id,
      postData: {
        postType: 'text-content',
        id: post1Id,
        name: 'Test Post',
        textContent: 'This is a test post',
      }
    }],
    onRequestFullscreen: fn(),
  },
}

export const MultiScreen2x2WithSomePosts: Story = {
  args: {
    rowCount: 2,
    columnCount: 2,
    isFullscreen: false,
    boardLocationSettingId: "bls-other" as BoardLocationSettingId,
    screenPosts: [
      {
        screenId: screen1Id,
        postData: {
          postType: 'text-content',
          id: post1Id,
          name: 'Test Post',
          textContent: 'This is a test post',
        }
      },
      {
        screenId: screen2Id,
        postData: {
          postType: 'image-link',
          id: post2Id,
          name: 'Test Post 2',
          imageUrl: 'https://georgekarbusphotography.com/wp-content/uploads/2018/04/best_orca_killer_whale_underwater_photos.jpg',
        }
      },
      {
        screenId: screen3Id,
        postData: null
      },
      {
        screenId: screen4Id,
        postData: {
          postType: 'iframe-link',
          id: post4Id,
          name: 'Test Post 4',
          iframeUrl: 'https://www.google.com',
        }
      }
    ],
    onRequestFullscreen: fn(),
  },
}

export const MismatchScreenAndIdsCount: Story = {
  args: {
    rowCount: 7,
    columnCount: 10,
    isFullscreen: false,
    boardLocationSettingId: "bls-other" as BoardLocationSettingId,
    screenPosts: [],
    onRequestFullscreen: fn(),
  },
}
