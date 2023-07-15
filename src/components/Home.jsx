import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.aboutMe} id="#home">
        <article className={styles.heroText}>
          <h1>hello, i am</h1>
          <span>Ojoachele onuh</span>
          <p>Frontend web designer | developer</p>
        </article>
      </section>
    </>
  );
};

export default Home;
