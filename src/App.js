import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { ContextProvider } from "./context"

function App() {
  return (
    <>
      <Header/>
      <ContextProvider>
        <Main/>
      </ContextProvider>
      <Footer/>
    </>
  );
}

export default App;