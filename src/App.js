import { useAlert, positions, transitions } from "react-alert";

export default function App() {
  const alert = useAlert();

  return (
    <div className="App">
      <button onClick={() => alert.error("This is Alert, Error Message")}>
        Click me for Error!
      </button>
      <button
        onClick={() =>
          alert.info("This is Alert, Info Message", {
            // Optional Configuration
            position: positions.BOTTOM_RIGHT,
            timeout: 2000,
            offset: "30px",
            transition: transitions.SCALE
          })
        }
      >
        Click me for Info!
      </button>
      <button onClick={() => alert.success("This is Alert, Success Message")}>
        Click me for success!
      </button>
    </div>
  );
}
