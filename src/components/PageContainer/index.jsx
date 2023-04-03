import Footer from "../Footer";
import Header from "../Header";

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: `calc(100vh - 300px)` }}>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default PageContainer;
