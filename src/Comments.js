import React from 'react'
import {useDatabase} from './database'
import Comment from './Comment'

const Comments = () => {  
    //const auth = useContext(AuthContext)
    const data = useDatabase('comments')    
     
    //--------------------------------------------------------
    if(!data){
      return <p className='aviso-comentario'>Nenhum comentário enviado até o momento.</p>
    }
    //--------------------------------------------------------
    const ids = Object.keys(data)
    
    //--------------------------------------------------------
    if(ids.length === 0){
      return <p className='carregando'>Carregando . . .</p>
    }
    
    //--------------------------------------------------------
      return ids.map(id => {     
        return (         
          <div className='main-comments' key={id}>
            <Comment key={id} comment={data[id].data}  />   
            
            {/*auth.user && 
              <button onClick={() => excluir(id)}>Excluir</button>
            */}   
            
          </div>      
        )        
      })
  }

  export default Comments