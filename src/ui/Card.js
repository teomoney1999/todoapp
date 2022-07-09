// import Validation from "../helpers/Validation";
import IsAction from "./isActtion";

const Card = ({
  title,
  info,
  img,
  isAction = false,
  actions = [],
  className = {},
}) => {
  // const { hasProps } = Validation;

  return (
    <div className={`card ${className["card"]}`}>
      <div className={`card__img ${className["cardImg"]}`}>{img}</div>
      <div className={`card__content ${className["cardContent"]}`}>
        <div className={`card__content__title ${className["cardContentTitle"]}`}>
          {title}
        </div>
        <div className={`card__content__info ${className["cardContentInfo"]}`}>
          {info}
        </div>
      </div>
      {isAction && (
        <IsAction
          className={`card__action ${className["cardAction"]}`}
          actions={actions}
        />
      )}
    </div>
  );
};

export default Card;
