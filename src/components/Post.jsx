import styles from './Post.module.css'
export function Post(){

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.profile_img}  src="https://github.com/marcosviniciusjau.png"/>
                    <div className={styles.author_info}>
                        <strong>Marcos Vinicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="29 de Abril às 19:17h" dateTime="2024-04-29 19:16:30">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p> 👉 <a href="#">jane.design/doctorcare</a></p>
                    </div>
                </article>
    )
}