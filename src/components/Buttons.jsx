import { css, cx } from "@emotion/css";

export function NewPostButton() {
  return (
    <button
      className={css`
        height: 40px;
        width: 150px;
        border-radius: 20px;
        border: none;
        cursor: pointer;

        background-image: linear-gradient(
          to right,
          #ff512f 0%,
          #dd2476 51%,
          #ff512f 100%
        );
        text-align: center;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        box-shadow: 0 0 20px #eee;
        display: block;

        &:hover {
          background-position: right center; /* change the direction of the change here */
          /* color: #fff;
          text-decoration: none; */
        }

        &:active {
          background-image: linear-gradient(
            to right,
            #ff2f7f 0%,
            #a924dd 51%,
            #ff2f2f 100%
          );
        }
      `}
    >
      Create New Post
    </button>
  );
}
