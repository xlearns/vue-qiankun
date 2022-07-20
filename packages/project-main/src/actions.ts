import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {};
const actions: MicroAppStateActions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
	console.log(state, prev);
});

export default actions;
