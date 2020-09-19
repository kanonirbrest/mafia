import React, { useEffect, useState } from 'react';
import {
  FastField, FieldArray,
  Formik, Form,
} from 'formik';
import { Button, Descriptions } from 'antd';

import SelectField from 'components/FormControls/SelectField';
import Autocomplete from 'components/FormControls/Autocomplete';
import { GAME_ROLES, WINNER } from 'utils/constants';
import { validateGameForm } from 'utils/validationUtils';
import { usersApi } from 'api/UsersApi';
import InputField from 'components/FormControls/InputField';
import gamesApi from 'api/gamesApi';

import styles from './Game.module.scss';

const roleOptions = Object.keys(GAME_ROLES).map((role) => ({
  label: role,
  value: GAME_ROLES[role],
}));

const resultOptions = Object.keys(WINNER).map((role) => ({
  label: role,
  value: WINNER[role],
}));

export const ADD_GAME_FORM_FIELDS = {
  rating: 'rating',
  firstKilledId: 'firstKilledId',
  bestMove: 'bestMove',
  gameResult: 'gameResult',
  playerRoles: 'playerRoles',
};

const initialValues = {
  firstKilledId: '',
  bestMove: ['', '', ''],
  gameResult: WINNER.RedWin,
  playerRoles: Array(10).fill({
    playerId: '',
    gameRole: GAME_ROLES.Civilian,
  }),
};

const GamePage = () => {
  const [players, setPlayers] = useState([]);
  const getUserId = (nickname) => players
    .find((player) => player.label === nickname)?.id;

  const handleSubmit = async (values) => {
    const bestMove = values.bestMove.map(
      (index) => getUserId(values.playerRoles[index - 1].playerId),
    );

    const data = {
      bestMove,
      firstKilled: getUserId(values.firstKilledId),
      gameResult: values.gameResult,
      playerRoles: values.playerRoles.map((playerRole) => ({
        playerId: getUserId(playerRole.playerId),
        gameRole: playerRole.gameRole,
      })),
      rating: values.rating,
    };

    const response = await gamesApi.create(data);
    console.log(response, 'response');
  };
  const getPlayers = async () => {
    const response = await usersApi.getAll();

    setPlayers(response.data.players.map((p) => ({
      value: p.nickname,
      label: p.nickname,
      id: p.id,
    })) || []);
  };
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      {players.length > 0 && (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateGameForm}
        >
          {({ values, errors }) => (
            <Form>
              <div className={styles.fieldsWrapper}>
                <Descriptions title="Game: " bordered>
                  <Descriptions.Item label="Rating" span={3}>
                    <FastField
                      type="checkbox"
                      id={ADD_GAME_FORM_FIELDS.rating}
                      label="Ratingr"
                      name={ADD_GAME_FORM_FIELDS.rating}
                    />
                  </Descriptions.Item>
                  <Descriptions.Item label="First killed" span={3}>
                    <FastField
                      component={Autocomplete}
                      id={ADD_GAME_FORM_FIELDS.firstKilledId}
                      placeholder="first Killed Player"
                      // label="first Killed Player"
                      name={ADD_GAME_FORM_FIELDS.firstKilledId}
                      cssClasses={{ container: styles.field }}
                      optionList={players}
                      keys={{
                        valueKey: 'value',
                        labelKey: 'label',
                      }}
                      required
                    />
                  </Descriptions.Item>
                  <Descriptions.Item label="Best Move" span={3}>
                    <FieldArray
                      name="bestMove"
                      render={(arrayHelpers) => (
                        <div className={styles.playersWrapper}>
                          <Descriptions title="" bordered>
                            {values.bestMove && values.bestMove.length > 0 ? (
                              values.bestMove.map((friend, index) => (
                                <Descriptions.Item
                                  span={1}
                                  label={`player ${index + 1}`}
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={index}
                                  className={styles.playerContainer}
                                >
                                  <FastField
                                    type="number"
                                    component={InputField}
                                    id={`${ADD_GAME_FORM_FIELDS.bestMove}.${index}`}
                                    label={`#: ${index + 1}`}
                                    name={`${
                                      ADD_GAME_FORM_FIELDS.bestMove}.${index}`}
                                    placeholder={`player ${index + 1}`}
                                    required
                                  />
                                </Descriptions.Item>
                              ))
                            ) : (
                              <button type="button" onClick={() => arrayHelpers.push('')}>
                                Add a player
                              </button>
                            )}
                          </Descriptions>
                        </div>
                      )}
                    />
                  </Descriptions.Item>
                  <Descriptions.Item label="Game result" span={3}>
                    <FastField
                      component={SelectField}
                      id={ADD_GAME_FORM_FIELDS.gameResult}
                      name={
                         ADD_GAME_FORM_FIELDS.gameResult
                       }
                      keys={{
                        valueKey: 'value',
                        labelKey: 'label',
                      }}
                      placeholder="Game result"
                      optionList={resultOptions}
                      required
                    />
                  </Descriptions.Item>
                </Descriptions>
              </div>
              <FieldArray
                name="playerRoles"
                render={(arrayHelpers) => (
                  <div className={styles.playersWrapper}>
                    <Descriptions title="" bordered>
                      {values.playerRoles && values.playerRoles.length > 0 ? (
                        values.playerRoles.map((friend, index) => (
                          <Descriptions.Item
                            span={1}
                            label={`player ${index + 1}`}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            className={styles.playerContainer}
                          >
                            <FastField
                              component={Autocomplete}
                              id={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.playerId`}
                              label={`#: ${index + 1}`}
                              name={`${
                                ADD_GAME_FORM_FIELDS.playerRoles}.${index}.playerId`}
                              placeholder={`player ${index + 1}`}
                              keys={{
                                valueKey: 'value',
                                labelKey: 'label',
                              }}
                              optionList={players}
                              required
                            />
                            <FastField
                              component={SelectField}
                              id={`${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.gameRole`}
                              name={
                                `${ADD_GAME_FORM_FIELDS.playerRoles}.${index}.gameRole`
}
                              placeholder={`player ${index + 1}`}
                              keys={{
                                valueKey: 'value',
                                labelKey: 'label',
                              }}
                              optionList={roleOptions}
                              type="text"
                              required
                            />
                          </Descriptions.Item>
                        ))
                      ) : (
                        <button type="button" onClick={() => arrayHelpers.push('')}>
                          Add a player
                        </button>
                      )}
                    </Descriptions>
                  </div>
                )}
              />
              <div className={styles.buttonsWrapper}>
                {errors && errors.count && <div>{errors.count}</div>}
                <Button type="primary" htmlType="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      )}
    </>
  );
};

export default GamePage;
