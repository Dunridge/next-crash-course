import styles from "../src/styles/Layout.module.css";

// TODO: learn the type
const Layout = ({ children } : any) => {
  return <div className={styles.container}>
    <h1>Hello</h1>
    <main className={styles.main}>
        { children }
    </main>
  </div>;
};

export default Layout;
