import { defineStore } from "pinia";
import { store } from "@/store";

export const useSettingStore = defineStore({
	id: "global",
	state: () => ({
		msg: "hello",
	}),
	getters: {
		getTitle(): string {
			return this.msg;
		},
	},
	actions: {
		CHANGE_GLOBAL({ key, value }: any) {
			if (this.hasOwnProperty(key)) {
				(this as any)[key] = value;
			}
		},
		changeGlobal(data: any) {
			this.CHANGE_GLOBAL(data);
		},
	},
});

export function useSettingStoreHook() {
	return useSettingStore(store);
}
