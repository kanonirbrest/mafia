export const ROUTES = {
  root: '/',
  game: '/game',
  createGame: '/create-game',
  players: '/players',
  playerInfo: '/players/:id',
  clubs: '/clubs',
  login: '/login',
  admin: '/admin',
  owner: '/owner',
  statistics: '/statistics',
  calendar: '/calendar',
  profile: '/profile',
};

export const WINNER = {
  BlackWin: 1,
  RedWin: 2,
  Cancelled: 3,
};

export const GAME_ROLES = {
  Civilian: 1,
  Mafia: 2,
  Don: 4,
  Sheriff: 8,
};
