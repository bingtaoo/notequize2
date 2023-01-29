import { setLocal, getLocal } from '/utils/cache';

export const GET_CACHE = 'GET_CACHE';

export const SET_USER_INFO = 'SET_USER_INFO';

export const PLAY_GAME = 'PLAY_GAME';

export const END_GAME = 'END_GAME';

export const INVITE = 'INVITE';

export const SWITCH_MUSIC = 'SWITCH_MUSIC';

const mutations = {
  [GET_CACHE](state) {
    state.mute = getLocal('mute') || false;
  },
  [SET_USER_INFO](state, userInfo) {
    state.openid = userInfo.openid;
    state.nickname = userInfo.nickname;
    state.headImgUrl = userInfo.headImgUrl;
    state.gameNumber = userInfo.gameNumber;
    state.practiceNumber = userInfo.practiceNumber;
    state.prize = userInfo.prize.toFixed(2);
    state.score = userInfo.score;
    state.rank = userInfo.rank;
    state.invitationCode = userInfo.invitationCode;
  },
  [PLAY_GAME](state, type) {
    switch (type) {
      case 'normal':
        state.gameNumber[0] -= 1;
        state.gameMode = 'normal';
        break;
      case 'practice':
        state.practiceNumber -= 1;
        state.gameMode = 'practice';
        break;
      case 'activity':
        state.gameMode = 'activity';
        break;
      default:
    }
  },
  [END_GAME](state) {
    state.previousGameMode = state.gameMode;
    state.gameMode = '';
  },
  [INVITE](state) {
    state.gameNumber[0] += 1;
    state.gameNumber[1] += 1;
  },
  [SWITCH_MUSIC](state) {
    state.mute = !state.mute;
    setLocal('mute', state.mute);
  },
};

export default mutations;
