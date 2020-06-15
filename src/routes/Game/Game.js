import React from 'react';
import {
  FastField, FieldArray,
  Formik, Form,
} from 'formik';
import { Button } from 'antd';

import InputField from "components/FormControls/InputField";
import SelectField from "components/FormControls/SelectField";
import styles from './Game.module.scss';
import Autocomplete from "components/FormControls/Autocomplete";
import {GAME_ROLES, WINNER} from "utils/constants";

const roleOptions = Object.keys(GAME_ROLES).map((role) => {
  return {
    label: role,
    value: GAME_ROLES[role]
  }
});

const resultOptions = Object.keys(WINNER).map((role) => {
  return {
    label: role,
    value: WINNER[role]
  }
});

const PLAYERS = [
  {value: 'player1'},{value: 'player2'},{value: 'player3'},
  {value: 'player4'},{value: 'player5'},{value: 'player6'},
  {value: 'player7'},{value: 'player8'},{value: 'player9'}
];

export const ADD_GAME_FORM_FIELDS = {
  firstKilledId: 'firstKilledId',
  bestMove: 'bestMove',
  gameResult: 'gameResult',
  playerRoles: 'playerRoles'
};

const handleSubmit = (values) => {
  console.log(values);
};
const validateGameForm = () => {
};
const initialValues = {
  firstKilledId: '',
  bestMove: '',
  gameResult: '',
  playerRoles: [{alias: '', role: ''}, {alias: '', role: ''}, {alias: '', role: ''}, {alias: '', role: ''}, {
    alias: '',
    role: ''
  }, {alias: '', role: ''}, {alias: '', role: ''}, {alias: '', role: ''}, {alias: '', role: ''}, {alias: '', role: ''},{alias: '', role: ''}]
};
const GamePage = () => {

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateGameForm}
      >
        {({values}) => (
          <Form>
            <div className={styles.fieldsWrapper}>
              <FastField
                component={InputField}
                id={ADD_GAME_FORM_FIELDS.firstKilledId}
                placeholder={'firstKilledId'}
                name={ADD_GAME_FORM_FIELDS.firstKilledId}
                cssClasses={{container: styles.field}}
                type="text"
                required
              />
              <FastField
                component={InputField}
                id={ADD_GAME_FORM_FIELDS.bestMove}
                placeholder={'bestMove'}
                name={ADD_GAME_FORM_FIELDS.bestMove}
                cssClasses={{container: styles.field}}
                type="text"
                required
              />
              <FastField
                component={SelectField}
                id={ADD_GAME_FORM_FIELDS.gameResult}
                name={ADD_GAME_FORM_FIELDS.gameResult}
                keys={{
                  valueKey: 'value',
                  labelKey: 'label'
                }}
                optionList={resultOptions}
                required
              />
            </div>
              <FieldArray
                name="playerRoles"
                render={arrayHelpers => (
                  <div className={styles.playersWrapper}>
                    {values.playerRoles && values.playerRoles.length > 0 ? (
                      values.playerRoles.map((friend, index) => (
                        <div key={index} className={styles.playerContainer}>
                          <FastField
                            component={Autocomplete}
                            id={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.alias`}
                            label={`#: ${index + 1}`}
                            name={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.alias`}
                            placeholder={`player ${index + 1}`}
                            optionList={PLAYERS}
                            type="text"
                            required
                          />
                          <FastField
                            component={SelectField}
                            id={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.role`}
                            name={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.role`}
                            placeholder={`player ${index + 1}`}
                            keys={{
                              valueKey: 'value',
                              labelKey: 'label'
                            }}
                            optionList={roleOptions}
                            type="text"
                            required
                          />
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        Add a player
                      </button>
                    )}

                  </div>
                )}
              />
            <div className={styles.buttonsWrapper}>
              <Button type="primary">Submit</Button>
            </div>
          </Form>)}
      </Formik>
    </div>
  );
};

export default GamePage;
// {
//   "dateTime": "2020-06-12T07:21:18.438Z",
//   "firstKilledId": "string",
//   "bestMove": 0,
//   "gameResult": 0,
//   "playerRoles": [
//   {
//     "playerId": "string",
//     "gameRole": 0
//   }
// ]
// }