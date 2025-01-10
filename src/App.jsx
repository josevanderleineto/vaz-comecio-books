import HeaderComponent from "./components/Header";
import SalesPage from "./components/SalesPage";
import FooterComponent from "./components/Footer";

const App = () => {
    return (
        <div>
            <main>
            <HeaderComponent />
             <SalesPage />
            </main>
            <FooterComponent />
        </div>
    )
};

export default App;
