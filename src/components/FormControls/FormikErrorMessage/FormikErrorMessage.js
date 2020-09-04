import React from 'react';
import cn from 'classnames';
import { ErrorMessage } from 'formik';

import ErrorIcon from 'assets/icons/errorStatusIcon';
import { COLORS } from 'utils/colors';

import styles from './FormikErrorMessage.module.scss';

const FormikErrorMessage = ({
  cssClasses = {},
  name,
}) => (
  <span className={cn(styles.error, cssClasses.error)}>
    <ErrorMessage name={name}>
      {(message) => (
        message ? (
          <div className={styles.messageContainer}>
            <ErrorIcon
              color={COLORS.white}
              className={styles.icon}
            />
            <span>{message}</span>
          </div>
        ) : null
      )}
    </ErrorMessage>
  </span>
);

export default FormikErrorMessage;
