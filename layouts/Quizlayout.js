import QuizSidebar from "./Quizsidebar";
import Footer from "@partials/Footer";
import Header from "@partials/Header";
const QuizLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <QuizSidebar />
            <div>
                { children }
            </div>
            <Footer />
        </>
    );
};

export default QuizLayout;