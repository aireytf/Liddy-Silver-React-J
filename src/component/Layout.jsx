import Header from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center  align-items-center overflow-auto"
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
