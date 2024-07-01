import { PencilLine} from 'phosphor-react';

import styles from './sidebar.module.css';
import { Avatar } from './avatar';

export function SideBar () {
    return (
        <aside className={styles.SideBar}>
        
        <img className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        
        <div className={styles.profile}>
            <Avatar src='https://github.com/gabizaor.png'/>

            <strong>Gabrielly Reis</strong>
            <span>Development Intern</span>
        </div>

        <footer>
            <a href="a">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        
        
        </aside>

        
    );
}
