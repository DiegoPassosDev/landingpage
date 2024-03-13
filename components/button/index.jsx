import Styles from "./button.module.scss";

/*
Props
tille: string
kind: "primary" | "secondary"
*/

const Button = ({ title, kind }) => {
  const generationsClassByKind = () => {
    if (kind === "secundary") {
      return Styles.secundary;
    }
    return Styles.primary;
  };

  return( 
    <button className={`${Styles.button} ${generationsClassByKind()}`}>
      {title}
    </button>
)};

export default Button;
