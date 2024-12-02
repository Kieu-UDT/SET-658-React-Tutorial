import CounterA from "./components/counterA/counterA";
import store from "./store";

import { Provider } from "react-redux";

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <CounterA />
            </Provider>
        </div>
    );
}

export default App;