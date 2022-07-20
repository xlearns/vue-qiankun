import { initGlobalState, type MicroAppStateActions } from "qiankun";
export interface type_masa extends MicroAppStateActions {
	getGlobalState?: any;
}
export interface type_initialState {
	user: {
		name: string;
	};
	ignore: string;
	num: number;
}
export type type_initialState_key = (keyof type_initialState)[];
