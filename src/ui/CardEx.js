import { MdOutlineDeleteOutline, MdAutoFixHigh } from "react-icons/md";

const Card = ({
  className,
  img,
  status,
  // time = `${new Date().getHours()}:${new Date().getMinutes()}`,
  time,
  isAction = false,
  name = "None",
}) => {
  const setColorForStatus = (status) => {
    switch (status) {
      case "success":
        return "txt-success";
      case "failed":
        return "txt-delete";
      case "pending":
        return "color-pending";
      default:
        return "txt-white";
    }
  };

  return (
    <div
      className={`card ${
        className && className.hasOwnProperty("card")
          ? className.card
          : className
      }`}
    >
      <div className="card__img">
        {/* <input type="checkbox" className="card__img__checkbox" /> */}
        {img}
      </div>
      <div
        className={`card__info ${
          className && className.hasOwnProperty("info")
            ? className.info
            : className
        }`}
      >
        <div
          className={`card__info__name ${
            className && className.hasOwnProperty("name")
              ? className.name
              : className
          }`}
        >
          {name}
        </div>
        <div className="card__info__state">
          <div
            className={`card__info__state__status ${
              className && className.hasOwnProperty("status")
                ? className.status
                : className
            } ${setColorForStatus(status)}`}
          >
            {status} {time ? <span>&ensp;-&ensp;</span> : ""}
          </div>

          <div
            className={`card__info__state__time ${setColorForStatus(status)}`}
          >
            {" "}
            {time}
          </div>
        </div>
      </div>
      {isAction && (
        <div className="card__action">
          <button className="card__action__btn">
            <MdAutoFixHigh className="card__action__btn__icon color-update" />
          </button>
          <button className="card__action__btn">
            <MdOutlineDeleteOutline className="card__action__btn__icon color-delete" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
