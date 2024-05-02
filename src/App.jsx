import {Header} from './components/Header';
import { Post } from "./components/Post";
import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts=[
  {
    id: 1,
    author: "Gabriel",
    content: "Lorem Ipsum"
  },
  {
    id: 2,
    author: "Gabriel",
    content: "Lorem Ipsum"
  }
]
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