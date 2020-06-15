import React from 'react';
import {FastField} from 'formik';
import { Input } from 'antd';
import cn from 'classnames';

import styles from './InputField.module.scss';

const renderField = (
  {
    id,
    placeholder,
    cssClasses = {},
    field,
    form,
    ...props
  }) => (
  <Input
    {...field}
    {...props}
    placeholder={placeholder}
    className={cn(styles.input, cssClasses.input)}
  />
);

const FormikInputField = (
  {
    component,
    ...props
  }) => (
  <FastField
    component={component || renderField}
    {...props}
  />
);

export default FormikInputField;
