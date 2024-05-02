import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
export function Comment(){
    return(
            <div className={styles.comment}>
                <img src="https://github.com/marcosviniciusjau.png" alt=""/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Marcos Vinicius</strong>
                                <time title="02 de Maio às 12:01h" dateTime="2024-05-02 12:01:30">Cerca de 1h atrás</time>
                            </div>

                            <button title="Deletar comentário">
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>Muito bom, parabéns</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
        </div>
    )
}