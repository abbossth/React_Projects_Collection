const itemsList = ({ items }) => {
  return (
    <div className="d-block">
      {items.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
};

export default itemsList;
