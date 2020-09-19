import React from 'react';
import { Field } from 'formik';
import cn from 'classnames';
import { Select } from 'antd';

import styles from './SelectField.module.scss';
import FormikErrorMessage from '../FormikErrorMessage';

const { Option } = Select;

const renderField = (
  {
    keys,
    optionList,
    cssClasses = {},
    field,
    form,
    label,
  },
) => {
  const options = optionList.map((option) => (
    <Option
      key={option[keys.valueKey]}
      value={option[keys.valueKey]}
    >
      {option[keys.labelKey]}
    </Option>
  ));

  const onChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <>
      {label && <div>{label}</div>}
      <Select
        name={field.name}
        onChange={onChange}
        value={field.value}
        className={cn(styles.select, cssClasses.select)}
        style={{ width: '100%' }}
      >
        {options}
      </Select>

      <FormikErrorMessage name={field.name} />
    </>
  );
};

const SelectField = (
  {
    component,
    ...props
  },
) => (
  <Field
    component={component || renderField}
    {...props}
  />
);

export default SelectField;
