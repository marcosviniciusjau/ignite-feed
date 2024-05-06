import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Comment } from './Comment'
import { ProfileImg } from './ProfileImg'
import {MessageError} from './MessageError'

import styles from './Post.module.css'

export function Post({author,publishedAt, content}){
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const [error,setError] = useState(false)
    const [messageError,setMessageError] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", 
    {
        locale: ptBR
    })

    const publishedDateRelativeToNow= formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateComments(){

        event.preventDefault();

        if (comments.includes(newComment)) {
            setError(true);
            setMessageError('Esse comentário já foi adicionado');
            setTimeout(() => {
                setError(false);
                setMessageError('');
            }, 1000);
        }
        else if (newComment.length === 1) {
            setError(true);
            setMessageError('O comentário precisa ter mais de 1 caractere')
            setTimeout(() => {
                setError(false);
                setMessageError('');
            }, 1000);
        }
        else {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComment.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <ProfileImg src={author.profileUrl}/>
                   <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }else if(line.type === 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                    </div>

                <form onSubmit={handleCreateComments} className={styles.commentForm} >
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                        placeholder="Deixe um comentário"
                        name="comment"
                        value={newComment}
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                        />
                    <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>
                {
                    error ? <MessageError message={messageError}/> : null
                }
                <div className={styles.commentList}>
                                {comments.map(comment => {
                                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                                })}
                </div>
                </article>
    )
}