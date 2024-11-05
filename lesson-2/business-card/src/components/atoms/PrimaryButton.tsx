import { useState } from "react";
import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  buttonText: string;
  onClick: () => void;
}

export default function PrimaryButton({
  buttonText,
  onClick,
}: PrimaryButtonProps) {
  const [count, setCount] = useState(0);

  function handleIncreaseCount() {
    console.log("Hello from handleIncreaseCount");

    //Staticly updating a state value
    //setCount(3);

    // This will work
    // setCount(count + 1);

    // This is the best practice,
    // when working with values that rely on the previous/current value
    setCount((previousValue) => previousValue + 1);
  }

  return (
    <button className={styles.main} onClick={handleIncreaseCount}>
      {buttonText} {count}
    </button>
  );
}
