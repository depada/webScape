import "./App.css";
import { Submit, InputText, OpenLinks } from "./components";
import { PDF_Context_Provider } from "./context/PDF_Context";

function App() {
  return (
    <PDF_Context_Provider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <InputText />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <OpenLinks />
          <Submit />
        </div>
      </div>
    </PDF_Context_Provider>
  );
}

export default App;
