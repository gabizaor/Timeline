import { Post } from './components/post.jsx'
import { Header } from './components/Header.jsx';
import { SideBar } from './components/sidebar.jsx';

import './global.css';

import styles from './app.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabizaor.png',
      name: 'Gabrielly Reis',
      role: 'Frontend Developer',
    },
    Content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-30 13:44:15'),
  },
{
  id: 2,
  author: {
    avatarUrl:'https://files.oaiusercontent.com/file-MfDKeaQzvqs1SZMUWpopS7Ka?se=2024-09-26T16%3A57%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dfcafdc31-5336-440d-b25a-84000660c9ec.webp&sig=0XK9gywI51M5rZ2lraG8sW6jly57dlOJSoIJoF%2Bg1B4%3D',
    name: 'Maria Eduarda Bosquerolli',
    role: 'Operations Intern',
  },
  Content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'},
    { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2024-05-23 09:40:15'),
},
];


export function App() {
  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>
        <SideBar />
          <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.Content}
                postedAt={post.publishedAt}
              />
            )
          })}
          </main>
     </div>
    </div>
    
  )
}


