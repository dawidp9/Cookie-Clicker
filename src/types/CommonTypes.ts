import * as Icons from '../shared/svgs/Icons';
import { StateType } from 'typesafe-actions';
import reducers from '../state/reducers';

export type RootState = StateType<typeof reducers>;

export type IconName = keyof typeof Icons;
