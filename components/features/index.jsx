import Image from "next/image";
import Styles from "./features.module.scss";
import Icon from "/public/img/icon.svg";

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon} alt="icon" className={Styles.icon}/>
          <h1>Digital Strategy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="icon" className={Styles.icon}/>
          <h1>Estratégia digital</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="icon" className={Styles.icon}/>
          <h1>Media Social</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="icon" className={Styles.icon}/>
          <h1>Social Mídia</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
