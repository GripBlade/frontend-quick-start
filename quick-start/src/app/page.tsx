import Image from "next/image";
import styles from "./page.module.css";
import {Calendar} from "antd";


export default function Home() {
  return (
      <main className={styles.main}>
        <div style={{width: '100%', overflow: 'auto'}}>
          {/*<Calendar />*/}
        </div>
      </main>
  );
}
