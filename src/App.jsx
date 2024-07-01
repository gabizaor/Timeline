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
    avatarUrl:'https://media.licdn.com/dms/image/C4D03AQEFXEv8Q5jwiQ/profile-displayphoto-shrink_800_800/0/1624989669816?e=1724889600&v=beta&t=ps_KmjIKVkbjp9-IPbYaT8FScp7Xw8B2hfnA8FFPK9I',
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


