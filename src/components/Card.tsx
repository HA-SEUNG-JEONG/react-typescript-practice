import "./css/Card.css";

interface Props {
  className: string;
  children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
