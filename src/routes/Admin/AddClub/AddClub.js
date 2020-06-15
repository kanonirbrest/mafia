import React from 'react';

import styles from "./AddClub.module.scss";
import {FastField, Form, Formik} from "formik";
import InputField from "components/FormControls/InputField";
import {Button} from "antd";
import clubsApi from "api/ClubsApi";

export const ADD_CLUB_FORM_FIELDS = {
  city: 'city',
  location: 'location',
  name: 'name',
};

const initialValues = {
  city: '',
  location: '',
  name: '',
};
const AddClubPage = ({title, defaultValues}) => {
  const handleSubmit = async (values) => {
    console.log('submit');
    const response = await clubsApi.create(values);
    console.log(response, 'response');
  };
  const validateGameForm = () => {};
  return (
    <div className={styles.addClubWrapper}>
      <h3>{title}</h3>
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
                id={ADD_CLUB_FORM_FIELDS.name}
                placeholder={'Club name'}
                name={ADD_CLUB_FORM_FIELDS.name}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_FORM_FIELDS.location}
                placeholder={'Locatoion (adress)'}
                name={ADD_CLUB_FORM_FIELDS.location}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_CLUB_FORM_FIELDS.city}
                placeholder={'City'}
                name={ADD_CLUB_FORM_FIELDS.city}
                type="text"
                required
              />
              <div className={styles.buttonsWrapper}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </div>
            </Form>)}
        </Formik>
      </div>
    </div>
  );
};

export default AddClubPage;
