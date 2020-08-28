import React from 'react';
import { FastField } from 'formik';
import { Input } from 'antd';
import cn from 'classnames';

import styles from './InputField.module.scss';
import FormikErrorMessage from '../FormikErrorMessage';

const renderField = (
  {
    id,
    placeholder,
    cssClasses = {},
    field,
    form,
    label,
    ...props
  },
) => (
  <div className={cssClasses.wrapper}>
    <div>
      {label
      && <label className={styles.label} htmlFor={id}>{label}</label>}
      <Input
        {...field}
        {...props}
        id={id}
        placeholder={placeholder}
        className={cn(styles.input, cssClasses.input)}
      />
    </div>
    <FormikErrorMessage name={field.name} />
  </div>
);

const FormikInputField = (
  {
    component,
    label,
    ...props
  },
) => (
  <FastField
    component={component || renderField}
    label={label}
    {...props}
  />
);

export default FormikInputField;
