import React from 'react';
import { text, color } from '@storybook/addon-knobs';
import FazerAnimation from './FazerAnimation';

export default {
  title: 'Fazer Animation',
  parameters: {
    backgrounds: [
      { name: 'default', value: '#f1c40f', default: true },
      { name: 'twitter', value: '#00aced' },
      { name: 'facebook', value: '#3b5998' },
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' },
    ],
  },
};

export const exemple = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FazerAnimation
      title={text('title', 'Redirecting')}
      bodyColor={color('bodyColor', '#000000')}
      longfazersColor={color('longfazersColor', '#000000')}
    />
  </div>
);
