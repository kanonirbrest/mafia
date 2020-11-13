// eslint-disable-next-line import/prefer-default-export
export const getUserIdByNickname = (nickname, players) => players
  .find((player) => player.label === nickname)?.id;
