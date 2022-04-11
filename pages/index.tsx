import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import PlayerCount from "../components/PlayerCount";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PlayerCount></PlayerCount>
    </div>
  );
};

export default Home;
