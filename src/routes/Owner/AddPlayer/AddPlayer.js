import React from 'react';

import {Formik, Form, Field, FieldArray, FastField} from 'formik';

import styles from "./AddPlayer.module.scss";
import InputField from "components/FormControls/InputField";

const AddPlayer = ({club, onAddPlayers}) => {
  return (
    <div className={styles.addClubWrapper}>
      <h3>Add Player</h3>

      <Formik
        initialValues={{ players: [''] }}
        onSubmit={onAddPlayers}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="players"
              render={arrayHelpers => (
                <div className={styles.fieldsWrapper}>
                  {values.players && values.players.length > 0 ? (
                    values.players.map((players, index) => (
                      <div key={index}>
                        <FastField
                          component={InputField}
                          id={`players.${index}`}
                          placeholder={'player'}
                          name={`players.${index}`}
                          cssClasses={{container: styles.field}}
                          type="text"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')}
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      Add a player
                    </button>
                  )}
                  <div>
                    <button type="submit" >Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
};

export default AddPlayer;
