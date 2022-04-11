import { useCallback, useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { SocketContext } from "../contexts/socketUtils";
import { Events } from "../utils/event";

const PlayerCount = () => {
  const [currentPlayerNumber, setCurrentPlayerNumber] = useState<number>(0);

  const socket = useContext(SocketContext);
  const onGetPlayers = useCallback((res: any) => {
    console.log(res);
    setCurrentPlayerNumber(res.current);
  }, []);
  useEffect(() => {
    socket.emit(Events.ON_GET_PLAYERS);
    console.log('getting players')
  }, [socket]);
  useEffect(() => {
    socket.on(Events.GET_PLAYERS, onGetPlayers);
    return () => {
      socket.off(Events.GET_PLAYERS, onGetPlayers);
    };
  }, [socket, onGetPlayers]);
  return (
    <div className={styles.container}>
      <p>players connected: {currentPlayerNumber}</p>
    </div>
  );
};

export default PlayerCount;
