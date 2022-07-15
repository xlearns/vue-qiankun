import {
	renderWithQiankun,
	qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

export function useQiankun() {
	return {
		isQiankun: qiankunWindow.__POWERED_BY_QIANKUN__ || false,
	};
}
