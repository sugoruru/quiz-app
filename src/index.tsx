import { createRoot } from "react-dom/client";
import { Main } from "./main";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const container = document.querySelector("#root") as Element;
const root = createRoot(container);

// グローバルステート.
const store = configureStore({
	reducer: allReducers,
});
export type RootState = ReturnType<typeof store.getState>;

root.render(
	<Provider store={store}>
		<Main />
	</Provider>,
);
