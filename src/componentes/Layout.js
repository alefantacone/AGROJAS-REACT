import Navbar from "./navbar"

export const Layout = ({ children }) => {
    return(
        <main className="">
            <Navbar />
            {children}
        </main>
    );
};