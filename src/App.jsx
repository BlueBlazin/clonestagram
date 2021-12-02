import { css, cx } from "@emotion/css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
