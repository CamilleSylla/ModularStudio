import style from "./starterz.module.scss";
import Tilt from "react-tilt";
import Button from "../button/Button";

export default function Starterz() {
  const Illustration = () => {
    return (
      <div className={style.illustration}>
        <img src="/assets/illustration/starter.png" />
        <img src="/assets/illustration/courbes.png" />
      </div>
    );
  };

  const Card = () => {
    return (
      <Tilt
        options={{ max: 25 }}
        style={{
          position: "absolute",
          border: "6px solid var(--deep-purple)",
          borderRadius: "20px",
          right: "10%",
          bottom: "10%",
          overflow: "hidden",
          height: "55%",
          width: "25vw",
        }}
      >
        <article className={style.card}>
          <h1>Starterz</h1>
          <div className={style.price}>
            <span> *à partir de : </span>
            <h2>
              87,5€ <span>/mois</span>{" "}
            </h2>
          </div>
          <p className={style.slogan}>
            Creer vous une image sur internet rapidement en choisissant un des 3
            kit Starterz
          </p>
          <ul>
              <li>Nom de Domaine</li>
              <li>Hébergement et maintenance</li>
              <li>Site single-page (mono page)</li>
              <li>Une adresse e-mail</li>
              <li>Un formulaire de contact</li>
              <li>Fiche GoogleMyBusiness (si requis)</li>
              <li>Statistiques</li>
              </ul>
            <p>* sous reserve de votre choix de kit et des modifications à y apporter</p>
          <div style={{ margin: "0 auto", width: "80%" }}>
            <Button marginTop="2vh" text="Kit Starterz" />
          </div>
        </article>
      </Tilt>
    );
  };

  const Wave = ({ color }) => {
    return (
      <div className={style.wave}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color ? color : "#190F26"}
            fill-opacity="1"
            d="M0,64L11.4,64C22.9,64,46,64,69,96C91.4,128,114,192,137,218.7C160,245,183,235,206,218.7C228.6,203,251,181,274,170.7C297.1,160,320,160,343,160C365.7,160,389,160,411,138.7C434.3,117,457,75,480,48C502.9,21,526,11,549,58.7C571.4,107,594,213,617,261.3C640,309,663,299,686,272C708.6,245,731,203,754,181.3C777.1,160,800,160,823,160C845.7,160,869,160,891,186.7C914.3,213,937,267,960,256C982.9,245,1006,171,1029,149.3C1051.4,128,1074,160,1097,192C1120,224,1143,256,1166,250.7C1188.6,245,1211,203,1234,186.7C1257.1,171,1280,181,1303,186.7C1325.7,192,1349,192,1371,186.7C1394.3,181,1417,171,1429,165.3L1440,160L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
          ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color ? color : "#190F26"}
            fill-opacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,117.3C384,96,480,64,576,69.3C672,75,768,117,864,154.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <section className={style.wrapper}>
      <Wave />
      <Card />
      <Illustration />
    </section>
  );
}
