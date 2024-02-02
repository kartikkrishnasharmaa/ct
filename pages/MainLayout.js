import Footer from "@partials/Footer";
import Header from "@partials/Header";
const MainLayout = ( { children } ) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
};

export default MainLayout;