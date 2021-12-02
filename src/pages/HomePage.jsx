import { css, cx } from "@emotion/css";
import LeftSection from "../components/LeftSection";

function HomePage() {
  return (
    <div
      className={css`
        display: flex;
        flex: 1;
      `}
    >
      <LeftSection />
    </div>
  );
}

export default HomePage;
