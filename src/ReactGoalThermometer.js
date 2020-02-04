import React from 'react';
import PropTypes from 'prop-types';

const valueString = (value, props) => {
  return Intl.NumberFormat(props.locale, {
    style: 'currency',
    currency: props.currency,
    currencyDisplay: props.currencyDisplay,
    minimumFractionDigits: props.roundNumbers ? 0 : 2,
  }).format(value);
}

const ReactGoalThermometer = (props) => {
  const { roundNumbers, amount, goal } = props;

  const currentValue = roundNumbers ?
    Math.round(amount) :
    amount;

  return (
    <div>
      goal: {valueString(goal, props)}
      <br />
      current: {valueString(currentValue, props)}
    </div>
  );
};

ReactGoalThermometer.defaultProps = {
  roundNumbers: true,
  locale: 'en',
  currency: 'USD',
  currencyDisplay: 'symbol',
  animationDuration: 1000,
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
