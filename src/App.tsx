import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { createContext } from "react";

interface AppContextType {
  color: string;
  lang: string;
}
export const AppContext = createContext<AppContextType>({
  color: "red",
  lang: "fa",
});

function App() {
  return (
    <>
      <AppContext.Provider value={{ color: "red", lang: "fa" }}>
        <AppLayout></AppLayout>
      </AppContext.Provider>
    </>
  );
}

export default App;
