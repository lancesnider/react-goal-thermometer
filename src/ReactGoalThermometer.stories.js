import React from 'react';
import { Button } from '@storybook/react/demo';
import ReactGoalThermometer from './ReactGoalThermometer'

export default {
  title: 'React Goal Thermometer',
  component: Button,
};

export const Default = () => (
  <ReactGoalThermometer
    goal={10000}
    amount={2513.441246}
  />
);

export const NumberFormats = () => (
  <div>
    <ReactGoalThermometer
      goal={10000}
      amount={2513.441246}
      roundNumbers={false}
      locale='ja-JP'
      currency='JPY'
    />
    <ReactGoalThermometer
      goal={10000}
      amount={2513.441246}
      locale='de-DE'
      currency='EUR'
    />
    <ReactGoalThermometer
      goal={10000}
      amount={2513.441246}
      locale='de-DE'
      currency='EUR'
      currencyDisplay='code'
    />
    <ReactGoalThermometer
      goal={10000}
      amount={2513.441246}
      roundNumbers={false}
      locale='ja-JP'
      currency='JPY'
      currencyDisplay='name'
    />
  </div>
);
