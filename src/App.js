import './App.css';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Provider store={appStore}>
          <Body/>
      </Provider>
    </div>
  );
}

export default App;
