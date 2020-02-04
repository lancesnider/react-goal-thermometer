import React, { useState } from 'react';
import { Button } from '@storybook/react/demo';
import ReactGoalThermometer from './ReactGoalThermometer'

export default {
  title: 'React Goal Thermometer',
  component: Button,
};

export const Default = () => {
  const [amount, setAmount] = useState(2513.441246)
  return (
    <div>
      <button onClick={() => setAmount(amount + 500)}>Add $500</button>
      <ReactGoalThermometer
        goal={10000}
        amount={amount}
      />
    </div>
  )
};

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
