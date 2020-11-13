import React from 'react';
import { Button, Descriptions } from 'antd';

import {
  Formik, Form, FieldArray, FastField,
} from 'formik';

import InputField from 'components/FormControls/InputField';
import styles from './AddPlayer.module.scss';

// eslint-disable-next-line no-unused-vars
const AddPlayer = ({ club, onAddPlayers }) => (
  <div className={styles.addClubWrapper}>
    <Formik
      initialValues={{ players: [''] }}
      onSubmit={onAddPlayers}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="players"
            render={(arrayHelpers) => (
              <div className={styles.fieldsWrapper}>
                <Descriptions title="Add Players" bordered>
                  {values.players
                  && values.players.map((players, index) => (
                    <Descriptions.Item
                      label={`New Player [${index + 1}]`}
                      span={2}
                    >
                      {/* eslint-disable-next-line react/no-array-index-key */}
                      <div key={index} className={styles.newPlayerItem}>
                        <FastField
                          component={InputField}
                          id={`players.${index}`}
                          placeholder="player"
                          name={`players.${index}`}
                          cssClasses={{ container: styles.field }}
                          type="text"
                          required
                        />
                        <div className={styles.actionButton}>
                          <Button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            remove
                          </Button>
                        </div>
                      </div>
                    </Descriptions.Item>
                  ))}
                </Descriptions>
                <div className={styles.actionWrapper}>
                  <Button
                    type="button"
                    className={styles.addPlayerButton}
                    onClick={() => arrayHelpers.push('')}
                  >
                    Add a player
                  </Button>
                  {values.players.length > 0 && (
                  <Button
                    type="submit"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                  )}
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);

export default AddPlayer;
