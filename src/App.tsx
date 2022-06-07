import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

interface AppContextType {
  color: string;
  lang: string;
}
export const AppContext = createContext<
  [AppContextType, React.Dispatch<React.SetStateAction<AppContextType>>]
>([] as any);

function App() {
  const [context, setContext] = useState<AppContextType>({
    color: "red",
    lang: "fa",
  });
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <AppContext.Provider value={[context, setContext]}>
            <AppLayout></AppLayout>
          </AppContext.Provider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
