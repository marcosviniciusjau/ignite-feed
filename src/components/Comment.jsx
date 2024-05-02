import styles from './Comment.module.css'

export function Comment(){
    return(
            <div className={styles.comment}>
                <img src="https://github.com/marcosviniciusjau.png" alt=""/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}></div>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Marcos Vinicius</strong>
                                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                            </div>

                            <button title="Deletar comentário">
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>Muito bom, parabéns</p>
            </div>
            <footer>
                Aplaudir
            </footer>
        </div>

    )

}