import React from 'react';
// import { useHistory } from 'react-router-dom';

import { getUserByToken } from 'utils/auth';
import { FastField, Form, Formik } from 'formik';
import InputField from 'components/FormControls/InputField';
import { Button } from 'antd';

// import { authContext } from 'contexts/AuthContext';
// import { ROUTES } from 'utils/constants';
import { authApi } from 'api/authApi';
import clubsApi from 'api/ClubsApi';
import styles from './Login.module.scss';
import { login, setClub } from '../../reducer/appReducer';

export const LOGIN_FORM_FIELDS = {
  userName: 'userName',
  password: 'password',
};

const initialValues = {
  // userName: 'adminadmin',
  // password: 'adminadmin',
  userName: 'admin',
  password: 'mfadmin1234',
};

const LoginPage = ({ dispatch }) => {
  // const history = useHistory();
  // const auth = React.useContext(authContext);
  const handleSubmit = async (values) => {
    const response = await authApi.login(values);

    const user = getUserByToken(response.data);
    if (user && user.role === 'CLUBOWNER') {
      const club = await clubsApi.own().data;
      dispatch(setClub(club));
    }

    dispatch(login({
      token: response.data,
      user,
    }));
    // window.localStorage.setItem('mafiaToken', response.data);
    // if (user.role === 'ADMIN') {
    //   // window.localStorage.setItem('mafiaToken', response.data);
    //   // auth.setAuthStatus({ id: '1', userName: values.userName, role: 'clubOwner' });
    //   // history.push(ROUTES.root);
    // }
  };
  const validateForm = () => {};

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
              placeholder="UserName"
              name={LOGIN_FORM_FIELDS.userName}
              type="text"
              cssClasses={{ wrapper: styles.inputWrapper }}
              required
            />
            <FastField
              component={InputField}
              id={LOGIN_FORM_FIELDS.password}
              placeholder="Password"
              name={LOGIN_FORM_FIELDS.password}
              type="password"
              cssClasses={{ wrapper: styles.inputWrapper }}
              required
            />
            <div className={styles.buttonsWrapper}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
