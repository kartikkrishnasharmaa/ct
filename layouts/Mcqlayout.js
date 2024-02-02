import McqSidebar from "./Mcqsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const McqLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <McqSidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default McqLayout;