import React from 'react';
import { Button } from '@storybook/react/demo';
import ReactGoalThermometer from './ReactGoalThermometer'

export default {
  title: 'React Goal Thermometer',
  component: Button,
};

export const Default = () => (
  <ReactGoalThermometer />
);
