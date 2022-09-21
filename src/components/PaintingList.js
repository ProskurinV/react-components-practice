import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ paintings }) {
  return (
    <ul>
      {paintings.map(painting => (
        <li key={painting.id}>
          <Painting
            imageUrl={painting.url}
            title={painting.title}
            author={painting.author.tag}
            profileUrl={painting.author.url}
            price={painting.price}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
