import { css, cx } from "@emotion/css";

import * as styles from "../styles/constants";
import ProfileSection from "./ProfileSection";

function LeftSection() {
  return (
    <section
      className={css`
        width: ${styles.secondarySectionWidth};
        border-right: 1px solid ${styles.sectionBorderColor};
      `}
    >
      <ProfileSection />
    </section>
  );
}

export default LeftSection;
