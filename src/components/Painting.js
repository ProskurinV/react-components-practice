import defaultImage from './default.jpg';

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известно',
  price,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;
