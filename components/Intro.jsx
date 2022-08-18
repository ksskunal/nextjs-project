import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} />
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>MARKTINE</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image
        className={style.myImage}
          src="/img/Avocado.png"
          layout= "fill"
          objectFit="contain"
          alt="Avocodo"
          height="100px"
          width="200px"
        />
      </div>
    </div>
  );
};

export default Intro;
