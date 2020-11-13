import { GAME_ROLES, WINNER } from './constants';
import { getUserIdByNickname } from './utils';

const getMockRole = (index) => {
  if (index < 7) {
    return GAME_ROLES.Civilian;
  } if (index === 9) {
    return GAME_ROLES.Don;
  }

  return GAME_ROLES.Mafia;
};
const BEST_MOVE_POINTS = {
  0: 0,
  1: 0,
  2: 0.2,
  3: 0.4,
};

export const gameRoleOptions = Object.keys(GAME_ROLES).map((role) => ({
  label: role,
  value: GAME_ROLES[role],
}));

export const gameResultOptions = Object.keys(WINNER).map((role) => ({
  label: role,
  value: WINNER[role],
}));

export const getInitialGameValues = (players) => ({
  firstKilledId: '',
  bestMove: ['', '', ''],
  gameResult: WINNER.RedWin,
  playerRoles: Array(10).fill({}).map((el, index) => ({
    playerId: players[index].value,
    gameRole: getMockRole(index),
  })),
});

export const getBestMovePoint = (move, players) => {
  const countOfMafs = move.reduce((accumulator, movePlayer) => {
    const pl = players.find((player) => movePlayer.playerId === player.playerId);
    if (pl.gameRole === GAME_ROLES.Don
      || pl.gameRole === GAME_ROLES.Mafia) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  return BEST_MOVE_POINTS[countOfMafs];
};

export const getPayloadFromValues = (values) => {
  const bestMovePlayers = values.bestMove.map(
    (index) => values.playerRoles[index - 1],
  );

  return {
    dateTime: new Date(),
    gameResult: values.gameResult,
    playerRoles: values.playerRoles.map((playerRole) => ({
      playerId: getUserIdByNickname(playerRole.playerId),
      gameRole: playerRole.gameRole,
    })),
    extraPoints: [{
      playerId: values.playerRoles[values.firstKilledId - 1].playerId,
      value: getBestMovePoint(bestMovePlayers, values.playerRoles),
      type: 0, // what?
    }],
  };
};
