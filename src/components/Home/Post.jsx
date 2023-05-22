import { useEffect, useState } from 'react';
import '../../styles/post.scss'
import api from '../../services/api';
import { formatDistanceToNow, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';



export function Post(){
  const [posts, setPosts] = useState([])

  async function handleApi(){
    const response = await api.get('/careers/');
    const data = response.data.results;

    console.log(data)

    setPosts(data);
  }

  useEffect(() => {
    handleApi()
  }, [])

  return(
    <>
    {posts.map((post) => {
          return(
            <div className="post" key={post.id}>
              <header>
                <h1>{post.title}</h1>
              </header>

              <div className="post__content" >
                  <div className="post__content--infos">
                    <div className="post__content--user">{post.username}</div>
                    <div className="post__content--time">{formatDistanceToNow(parseISO(post.created_datetime, {
                      addSuffix: true,
                      locale: ptBR,
                    }))}</div>
                  </div>
                  <div className="post__content--text">
                    <p>{post.content}</p>
                  </div>
              </div>
            </div>
          )
        })}
    </>
        
      
  )
}