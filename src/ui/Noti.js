import Card from "./Card";
import { GiStarFormation } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa";

const Noti = ({ className }) => {
  const noti = {
    title: "Great Job",
    content: "3 more goals to go..",
  };
  return (
    <Card
      className={{
        card: "noti",
        info: "noti__info",
        name: "noti__info__name",
        status: "noti__info__status",
      }}
      img={<GiStarFormation className="noti__img" />}
      name={noti.title}
      status={noti.content}
    />
  );
};

export default Noti;
