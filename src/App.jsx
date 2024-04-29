import {Header} from './components/Header';
import { Post } from "./components/Post";
import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Gabriel" content="Lorem Ipsum"/>
          <Post author="Gabriel" content="Lorem Ipsum"/>
        </main>
        </div>
    </div>
  );
}