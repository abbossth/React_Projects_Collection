const SearchBox = ({ searchString }) => {
  return (
    <input className="m-1-0 p-1 outline-none border-gradient" type="search" value={searchString} placeholder="Search item..." />
  );
};

export default SearchBox;
