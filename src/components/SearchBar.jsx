import { css, cx } from "@emotion/css";

function SearchBar() {
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        className={css`
          width: 370px;
          height: 35px;
          margin: 0;
          padding: 0;
          border-radius: 20px;
          padding: 0 20px;
          border: 1px solid #ddd;
        `}
      />
    </div>
  );
}

export default SearchBar;
