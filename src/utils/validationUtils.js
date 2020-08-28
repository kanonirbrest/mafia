import { GAME_ROLES } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const validateGameForm = ({
  firstKilledId,
  playerRoles,
}) => {
  const errors = {
    playerRoles: [],
  };

  if (!firstKilledId) {
    errors.firstKilledId = 'please add first killed id';
  }

  let countOfMafs = 0;
  let countOfDons = 0;
  playerRoles.forEach((player, id) => {
    if (player.gameRole === GAME_ROLES.Mafia) {
      countOfMafs += 1;
    }
    if (player.gameRole === GAME_ROLES.Don) {
      countOfDons += 1;
    }
    if (countOfMafs > 2) {
      errors.playerRoles[id] = {
        gameRole: 'Should be not more than 2 Mafs',
      };
    }
    if (countOfDons > 1) {
      errors.playerRoles[id] = {
        gameRole: 'Should be only 1 Don',
      };
    }
  });

  if (countOfMafs !== 2) {
    errors.count = 'Wrong count of Mafs';
  }
  if (countOfDons !== 1) {
    errors.count = 'Wrong count of Dons';
  }

  return errors;
};
