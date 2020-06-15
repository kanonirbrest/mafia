import React from 'react';
import cn from 'classnames';

import styles from './FormFieldLabel.module.scss';

const FormFieldLabel = (
  {
    className = {},
    required,
    label,
    htmlFor,
  }) => (
  <label htmlFor={htmlFor} className={className.wrapper}>
    {label}
    {required && (
      <span className={cn(styles.asterisk, {
        [className.asterisk]: className.asterisk,
      })}
      >
      *
    </span>
    )}
  </label>
);

export default FormFieldLabel;
