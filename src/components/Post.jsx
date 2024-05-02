import { Comment } from './Comment'
import styles from './Post.module.css'
import { ProfileImg } from './ProfileImg'
export function Post(){

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <ProfileImg src="https://github.com/marcosviniciusjau.png"/>
                   <div className={styles.authorInfo}>
                        <strong>Marcos Vinicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="29 de Abril às 19:17h" dateTime="2024-04-29 19:16:30">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p> 👉{' '} <a href="#">jane.design/doctorcare</a></p>
                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>
                    </p>
                    </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        placeholder="Deixe um comentário"
                        />
                    <footer>
                    <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
                </article>
    )
}