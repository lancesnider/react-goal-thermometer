import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { gsap, Power4 } from 'gsap'

const AnimationValues = {
  animatedValue: 0
};

const valueString = (value, props) => {
  return Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    minimumFractionDigits: props.roundNumbers ? 0 : 2,
  }).format(value);
}

const ReactGoalThermometer = (props) => {
  const [animatedAmount, setAnimatedAmount] = useState(0);

  const { roundNumbers, amount, goal, animationDuration } = props;

  const newAmount = roundNumbers ?
    Math.round(amount) :
    amount;

  useEffect(() => {
    gsap.to(AnimationValues, animationDuration, {
      animatedValue: newAmount,
      roundProps: "animatedValue",
      ease: Power4.easeInOut,
      onUpdate: () => {
        setAnimatedAmount(AnimationValues.animatedValue);
      }
    });
  }, [newAmount]);

  return (
    <div>
      goal: {valueString(goal, props)}
      <br />
      current: {valueString(animatedAmount, props)}
    </div>
  );
};

ReactGoalThermometer.defaultProps = {
  roundNumbers: true,
  locale: 'en',
  currency: 'USD',
  currencyDisplay: 'symbol',
  animationDuration: 0.9,
  numberOfTickmarks: 4,
  textWithTickmarks: true,
}

ReactGoalThermometer.propTypes = {
  goal: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  roundNumbers: PropTypes.bool.isRequired,
  numberOfTickmarks: PropTypes.number.isRequired,
  textWithTickmarks: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencyDisplay: PropTypes.oneOf([
    'symbol',
    'code',
    'name',
  ]),
  animationDuration: PropTypes.number.isRequired,
}

export default ReactGoalThermometer;
