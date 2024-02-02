import HtmlSidebar from "./Htmlsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const HtmlLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <HtmlSidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default HtmlLayout;