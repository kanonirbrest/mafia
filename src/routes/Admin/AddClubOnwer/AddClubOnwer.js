import React, { useEffect, useState } from 'react';

import {
  FastField, Form, Formik, Field,
} from 'formik';
import InputField from 'components/FormControls/InputField';
import { Button } from 'antd';
import { usersApi } from 'api/UsersApi';
import SelectField from 'components/FormControls/SelectField';
import { createNotification } from 'utils/notificationUtils';
import styles from './AddClubOnwer.module.scss';

export const ADD_CLUB_ONWER_FORM_FIELDS = {
  nickname: 'nickname',
  password: 'password',
  email: 'email',
  fullName: 'fullName',
  city: 'city',
  clubId: 'clubId',
};

const initialValues = {
  nickname: '',
  password: '',
  email: '',
  fullName: '',
  city: '',
  clubId: '',
};

const AddClubOwnerPage = ({ title, defaultValues, clubs = [] }) => {
  const [clubIdOptions, setClubIdOptions] = useState([]);

  const handleSubmit = async (values) => {
    const response = await usersApi.createClubOwner(values);
    createNotification(
      `${values.nickname} created as club owner`,
      'This is the content of the notification.',
    );
    console.log(response, 'response');
  };
  const validateGameForm = () => {};

  useEffect(() => {
    setClubIdOptions(clubs.map((club) => ({
      label: club.name,
      value: club.id,
    })));
  }, [clubs]);

  return (
    <div className={styles.addClubWrapper}>
      <h3>{title}</h3>
      {' '}
      ADD OWNER
      <div className={styles.formWrapper}>
        <Formik
          initialValues={defaultValues || initialValues}
          onSubmit={handleSubmit}
          validate={validateGameForm}
        >
          {() => (
            <Form>
              <FastField
                component={InputField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.nickname}
                placeholder="nickname"
                name={ADD_CLUB_ONWER_FORM_FIELDS.nickname}
                label={ADD_CLUB_ONWER_FORM_FIELDS.nickname}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.password}
                placeholder="password"
                name={ADD_CLUB_ONWER_FORM_FIELDS.password}
                label={ADD_CLUB_ONWER_FORM_FIELDS.password}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.email}
                placeholder="email"
                name={ADD_CLUB_ONWER_FORM_FIELDS.email}
                label={ADD_CLUB_ONWER_FORM_FIELDS.email}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.fullName}
                placeholder="fullName"
                name={ADD_CLUB_ONWER_FORM_FIELDS.fullName}
                label={ADD_CLUB_ONWER_FORM_FIELDS.fullName}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.city}
                placeholder="city"
                name={ADD_CLUB_ONWER_FORM_FIELDS.city}
                label={ADD_CLUB_ONWER_FORM_FIELDS.city}
                type="text"
                required
              />
              <Field
                component={SelectField}
                id={ADD_CLUB_ONWER_FORM_FIELDS.clubId}
                name={ADD_CLUB_ONWER_FORM_FIELDS.clubId}
                placeholder="club"
                keys={{
                  valueKey: 'value',
                  labelKey: 'label',
                }}
                optionList={clubIdOptions}
                label="club name"
                required
              />
              <div className={styles.buttonsWrapper}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddClubOwnerPage;