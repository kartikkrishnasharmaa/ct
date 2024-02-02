import Reactsidebar from "./Reactsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const ReactLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <Reactsidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default ReactLayout;