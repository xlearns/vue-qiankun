import { initGlobalState } from "qiankun";
import { reactive } from "vue";
import { type_masa } from "./types";

const initialState = reactive<any>({
	user: {
		name: "zhangsan",
	},
	ignore: "ccccc",
	num: 0,
});

const actions: type_masa = initGlobalState(initialState);

actions.onGlobalStateChange((newState, prev) => {
	console.log(newState, 111111);
	for (const key in newState) {
		initialState[key] = newState[key];
	}
});

actions.getGlobalState = (key: any) => {
	return key ? initialState[key] : initialState;
};

export default actions;
