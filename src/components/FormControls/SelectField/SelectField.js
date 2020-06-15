import React from 'react';
import {FastField} from 'formik';
import cn from 'classnames';
import { Select } from 'antd';

import styles from './SelectField.module.scss';

const { Option } = Select;

const renderField = (
  {
    keys,
    optionList,
    cssClasses = {},
    field,
    form
  }) => {

  const options = optionList.map((option) => (
    <Option
      value={option[keys.valueKey]}
    >
      {option[keys.labelKey]}
    </Option>
  ));

  const onChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (<Select
      name={field.name}
      onChange={onChange}
      defaultValue={optionList[0].value}
      className={cn(styles.select, cssClasses.select)}
      style={{ width: '100%' }}
    >
      {options}
    </Select>)
};

const SelectField = (
  {
    component,
    ...props
  }) => (
  <FastField
    component={component || renderField}
    {...props}
  />
);

export default SelectField;
