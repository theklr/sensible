export const ResultsListItem = ({ name, address, rating }) => {
  return (
    <li>
      <dl>
        <dt className="name">Place</dt>
        <dd className="name">{name}</dd>
        <dt className="address">Address</dt>
        <dd className="address">{address}</dd>
        <dt className="rating">Rating</dt>
        <dd className="rating">{rating.toPrecision(2)} / 5.0</dd>
      </dl>
    </li>
  );
};
