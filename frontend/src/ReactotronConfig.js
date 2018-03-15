import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: "nomadgram2" })
  .use(reactotronRedux())
  .connect();

export default Reactotron;
