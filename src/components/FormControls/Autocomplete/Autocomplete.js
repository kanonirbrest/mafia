import React, { useState } from 'react';
import { FastField } from 'formik';
import { AutoComplete } from 'antd';
import cn from 'classnames';

import styles from './Autocomplete.module.scss';
import FormikErrorMessage from '../FormikErrorMessage';

const renderField = (
  {
    id,
    placeholder,
    cssClasses = {},
    field,
    form,
    options, setOptions,
    optionList,
    label,
    ...props
  },
) => {
  const onSearch = (searchText) => {
    form.setFieldValue(field.name, searchText);

    const list = optionList.filter(
      (option) => option.value.includes(searchText),
    );

    setOptions(list);
  };

  const onSelect = (value) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div>
      {label && <div>{label}</div>}
      <AutoComplete
        {...field}
        {...props}
        style={{ width: '100%' }}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder={placeholder}
        className={cn(styles.input, cssClasses.input)}
      />
      <div>
        <FormikErrorMessage name={field.name} />
      </div>
    </div>
  );
};

const FormikInputAutocompleteField = (
  {
    component,
    optionList,
    ...props
  },
) => {
  const [options, setOptions] = useState(optionList);

  return (
    <FastField
      component={component || renderField}
      optionList={optionList}
      setOptions={setOptions}
      options={options}
      {...props}
    />
  );
};

export default FormikInputAutocompleteField;
