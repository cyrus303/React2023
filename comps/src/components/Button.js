// import PropTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let classes = className(
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-600 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-500 text-white': secondary,
      'border-green-600 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'bg-white': outline,
      'rounded-full': rounded,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    },
    rest.className
  );

  classes = twMerge(classes);

  // console.log(classes);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
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
        'invalid props provided, only one variation can be provided '
      );
    }
  },
};

export default Button;

// 'border-gray-900 bg-gray-500 text-white': secondary,
// 'border-green-600 bg-green-500 text-white': success,
// 'border-yellow-400 bg-yellow-400 text-white': warning,
// 'border-red-500 bg-red-500 text-white': danger,
// 'rounded-full': rounded,
// 'bg-white': outline,
// 'text-blue-500': outline && primary,
// 'text-gray-900': outline && secondary,
// 'text-green-500': outline && success,
// 'text-yellow-400': outline && warning,
// 'text-red-500': outline && danger,
