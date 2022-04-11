import type { NextPage } from "next";
import { useCallback, useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { SocketContext } from "../contexts/socketUtils";
import { Events } from "../utils/event";
import PlayerCount from "../components/PlayerCount";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PlayerCount></PlayerCount>
    </div>
  );
};

export default Home;
