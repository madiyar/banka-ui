import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
  title: 'BankaUI/Button',
  component: Button,
  argTypes: {
    addonLeft: {
      control: false
    },
    addonRight: {
      control: false
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  // addonLeft: 'lol',
  // disabled: true,
};
