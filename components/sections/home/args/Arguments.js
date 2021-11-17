import Button from "../../../global/button/Button";
import Card from "../../../global/card/Card";
import CenteredTitle from "../../../global/centeredTitle/CenteredTitle";
import style from "./arguments.module.scss";

export default function Arguments() {
  const cardContent = [
    {
      icon: "/assets/icon/select.svg",
      title: "Explorez",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula.",
    },
    {
      icon: "/assets/icon/talk.svg",
      title: "Discutons du projet",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula.",
    },
    {
      icon: "/assets/icon/happy.svg",
      title: "Validez et livraison",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula.",
    },
  ];

  // const Card = ({ data, i }) => {
  //   return (
  //     <article className={style.card}>
  //       <div className={style.icon}>
  //         <img src={data.icon} />
  //       </div>
  //       <h1>{data.label}</h1>
  //       <p>{data.para}</p>
  //     </article>
  //   );
  // };

  const CardsContainer = () => {
    return (
      <div className={style.cardContainer}>
        {cardContent.map((el, i) => {
          return <Card data={el} i={i} />;
        })}
      </div>
    );
  };

  const Title = () => {
    return (
      <div className={style.title}>
        <h1>Louer avec Modular Studio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
          ligula nec augue aliquam, non interdum ante rhoncus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
    );
  };

  return (
    <section className={style.wrapper}>
      <CenteredTitle 
      title="Louer avec Modular Studio" 
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula nec augue aliquam, non interdum ante rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      {/* <Title /> */}
      <CardsContainer />
      <div className={style.btnWrapper}>
        <Button text="Showcase" link="/showcase" />
      </div>
    </section>
  );
}
