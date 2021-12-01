import { css, cx } from "@emotion/css";

import * as styles from "../styles/constants";
import { NewPostButton } from "./Buttons";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div
      className={css`
        height: ${styles.headerHeight};
        display: flex;
      `}
    >
      <section
        className={css`
          width: ${styles.secondarySectionWidth};
          background-color: ${styles.bgPrimary};
          border-right: 1px solid ${styles.sectionBorderColor};
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          font-size: ${styles.logoSize};
          user-select: none;
        `}
      >
        Clonestagram
      </section>
      <section
        className={css`
          width: ${styles.primarySectionWidth};
          background-color: ${styles.bgPrimary};
          border-bottom: 1px solid ${styles.sectionBorderColor};
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10%;
        `}
      >
        <SearchBar />
        <NewPostButton />
      </section>
      <section
        className={css`
          width: ${styles.secondarySectionWidth};
          background-color: ${styles.bgPrimary};
          border-left: 1px solid ${styles.sectionBorderColor};
          border-bottom: 1px solid ${styles.sectionBorderColor};
        `}
      ></section>
    </div>
  );
}

export default Header;
