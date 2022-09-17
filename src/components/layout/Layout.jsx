import Header from "../header/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className={"Wrapper"}>
        {children}
      </div>
    </>
  );
};

export default Layout;