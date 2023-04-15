import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  seconday,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariationTypeValue: ({
    primary,
    seconday,
    success,
    warning,
    danger,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!seconday) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'invalid props provided, only one variation can be provided'
      );
    }
  },
};

export default Button;
