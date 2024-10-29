import "./App.css";
import PrimaryButton from "./components/atoms/PrimaryButton";

function App() {
  const handleLoginClick = () => {
    alert("Hello from Login button");
  };

  return (
    <>
      <PrimaryButton
        buttonText="Create new"
        onClick={() => alert("Hello from Create new button")}
      />
      <PrimaryButton buttonText="Login" onClick={handleLoginClick} />
      <PrimaryButton buttonText="buttonText" />
    </>
  );
}

export default App;
