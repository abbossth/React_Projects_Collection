const List = ({ people }) => {
    return (
    <div className="list">
        {
            people.map((person) => {
                return (
                    <div key={person.id} className="list-item">
                        <img
                        className="picture"
                        src={`https://robohash.org/${person.id}}/set=set2?size=400x400`}
                        alt="profile_picture"
                        />
                        <div className="list-item-text-content">
                        <h3>{person.name}</h3>
                        <span>{person.website}</span>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
};

export default List;
