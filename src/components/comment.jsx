import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './avatar';

export function Comment ({content, onDeleteComment}) {
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return  (
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t39.30808-6/272935666_4903866363066788_8151716660902620366_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=X5xh1mgWZkoQ7kNvgFeuFdL&_nc_ht=scontent.fpoa4-1.fna&oh=00_AYDNUU852UpiyuAfgcadm-p2Cj9nQLQXBi4RC0jeyQKiUA&oe=668526EA" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Gabriela Reichel Ribeiro</strong>
                        <time title='27 de junho às 13h44' dateTime='2024-27-06 13:44:15'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} tittle='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
    
}