const SearchBox = ({ onStringChange }) => {
  return (
    <input
      className="m-1-0 p-1 outline-none border-gradient"
      type="search"
      placeholder="Search item..."
      onChange={(e) => {
        onStringChange(e.target.value);
      }}
    />
  );
};

export default SearchBox;
