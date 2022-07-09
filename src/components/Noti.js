import Card from "../ui/Card";
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
        cardContentInfo: "noti__info",
        cardContentTitle: "noti__info__name",
        cardContentInfo: "noti__info__status",
      }}
      img={<GiStarFormation className="noti__img" />}
      title={noti.title}
      info={noti.content}
    />
  );
};

export default Noti;
