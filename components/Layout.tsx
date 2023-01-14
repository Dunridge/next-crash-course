import styles from "../src/styles/Layout.module.css";
import Nav from "./Nav";

// TODO: learn the type
const Layout = ({ children }: any) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
