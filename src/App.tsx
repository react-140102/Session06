import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store";
import { Provider } from "react-redux";
import BaseLayout from "components/BaseLayout";

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
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <AppContext.Provider value={[context, setContext]}>
              <BaseLayout></BaseLayout>
            </AppContext.Provider>
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </>
  );
}

export default App;
