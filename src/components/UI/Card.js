import "./Card.css";
export default function Card(prop) {
  const classs = "card " + prop.className;
  return <div className={classs}> {prop.children}</div>;
}
