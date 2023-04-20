import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Panel({ children, className, ...rest }) {
  let finalClassName = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  finalClassName = twMerge(finalClassName);

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
}

export default Panel;
