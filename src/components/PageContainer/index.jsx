import Footer from "../Footer";
import Header from "../Header";

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer;
