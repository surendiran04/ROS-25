import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={`${styles.body}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={`${styles.base}`}>
          <span></span>
          <div className={`${styles.face}`}></div>
        </div>
      </div>

      <div className={`${styles.longfazers} overflow-hidden`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className={`${styles.loader} font-subtitle text-3xl text-center`}>
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
