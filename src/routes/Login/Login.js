import React from 'react';
import { useHistory } from "react-router-dom";

import styles from "./Login.module.scss";
import {FastField, Form, Formik} from "formik";
import InputField from "components/FormControls/InputField";
import {Button} from "antd";

import { authContext } from "contexts/AuthContext";
import {ROUTES} from "utils/constants";
import authApi from "api/authApi";

export const LOGIN_FORM_FIELDS = {
  userName: 'userName',
  password: 'password'
};

const initialValues = {};

const LoginPage = () => {
  let history = useHistory();

  const handleSubmit = async (values) => {
    const response = await authApi.login(values);

    if(response.token === 'admin') {
      auth.setAuthStatus({ id: '1', userName: values.userName, role: 'clubOwner' });
      history.push(ROUTES.root);
    }
  };
  const validateForm = () => {};
  const auth = React.useContext(authContext);

  return (
    <div className={styles.login}>
      <h3>Login</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {() => (
          <Form>
            <FastField
              component={InputField}
              id={LOGIN_FORM_FIELDS.userName}
              placeholder={'UserName'}
              name={LOGIN_FORM_FIELDS.userName}
              type="text"
              required
            />
            <FastField
              component={InputField}
              id={LOGIN_FORM_FIELDS.password}
              placeholder={'Password'}
              name={LOGIN_FORM_FIELDS.password}
              type="password"
              required
            />
            <div className={styles.buttonsWrapper}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </div>
          </Form>)}
      </Formik>
    </div>
  );
};

export default LoginPage;
