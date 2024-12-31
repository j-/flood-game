import { openDB } from 'idb';
import type { Action, Dispatch, Middleware } from 'redux';
import { normalizeSeed } from './seed';
import { deserialize } from './serialize';
import {
  type RootReducerState,
  getHeight,
  getMoveCount,
  getMoveState,
  getSeed,
  getSeedType,
  getWidth,
  isGameOver,
  isGameWon
} from './store';
import { isActionFlood, isActionStartGame, isActionRehydrate } from './store/actions';

const DB_NAME = 'keyval-store';

const getObjectStoreName = (width: number, height: number) => (
  `board:${width}x${height}`
);

export async function get(width: number, height: number, key: string): Promise<string | undefined> {
  const objectStoreName = getObjectStoreName(width, height);
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(objectStoreName);
    },
  });
  return db.get<string>(objectStoreName, key);
}

export async function set(width: number, height: number, key: string, val: string) {
  const objectStoreName = getObjectStoreName(width, height);
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(objectStoreName);
    },
  });
  return db.put(objectStoreName, val, key);
}

export async function clear(width: number, height: number) {
  const objectStoreName = getObjectStoreName(width, height);
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(objectStoreName);
    },
  });
  return db.clear(objectStoreName);
}

type TrackHighScores = Middleware<unknown, RootReducerState, Dispatch<Action>>;

export const trackHighScores: TrackHighScores = (store) => (next) => (action) => {
  next(action);
  const state = store.getState();

  if (isActionStartGame(action) || isActionRehydrate(action)) {
    const width = getWidth(state);
    const height = getHeight(state);
    const seed = getSeed(state);
    const seedType = getSeedType(state);
    const normalizedSeed = String(normalizeSeed(seed, seedType));

    (async () => {
      if (!width || !height) return;
      const previous = await get(width, height, normalizedSeed);
      if (previous) {
        const previousMoves = deserialize(previous);
        const previousCount = previousMoves.length;
        console.log('Started game with previous high score of %i moves', previousCount);
      }
    })();
  }

  if (isActionFlood(action) && isGameOver(state) && isGameWon(state)) {
    const width = getWidth(state);
    const height = getHeight(state);
    const seed = getSeed(state);
    const seedType = getSeedType(state);
    const normalizedSeed = String(normalizeSeed(seed, seedType));
    const count = getMoveCount(state);
    const moves = getMoveState(state);
    console.log('Game over', seed, count);

    (async () => {
      if (!width || !height) return;
      const previous = await get(width, height, normalizedSeed);
      if (previous) {
        const previousMoves = deserialize(previous);
        const previousCount = previousMoves.length;
        if (count < previousCount) {
          await set(width, height, normalizedSeed, moves);
          console.log('High score updated');
        }
      } else {
        await set(width, height, normalizedSeed, moves);
        console.log('High score set');
      }
    })();
  }

  return state;
};
