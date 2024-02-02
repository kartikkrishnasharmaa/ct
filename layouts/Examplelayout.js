import Examplesidebar from "./Examplesidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const ExampleLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <Examplesidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default ExampleLayout;