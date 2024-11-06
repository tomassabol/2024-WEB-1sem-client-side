/* eslint-disable react-refresh/only-export-components */
//export * from "./CardItem";
//export { default } from "./CardItem";
import styles from "./CardItem.module.css";

interface Props {
  name: string;
}

export default function CardItem({ name }: Props) {
  return <div className={styles.card}> {name} </div>;
}
