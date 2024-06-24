import React, { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const Header= React.memo(function Header({title}) {
  return <div className='header'>
    <img src={reactLogo}/>
    <a>{title}</a> 
  </div>
}
)

const ToDo = (function TODO({task,id,removeToDo}){
  console.log('task hereeeee',task)
  return<div>
    <p>
    {task} --- needs to be done
    </p>
    <button onClick={()=>removeToDo(id)}>delete</button>
  </div>
})

const Random=() =>{
  const [title,setTitle]=useState('bla bla bla')
  const [toDos,setToDos]=useState([]);
  const [recall,setRecall]=useState(false)
  console.log('toDos',toDos)

  // useEffect(()=>{
  //   const interval=setInterval(() => {
  //     setRecall(!recall)
  //   }, 3000);
  //   return ()=>clearInterval(interval);
  // })

  const removeToDo=(idd)=>{
    const setNew=toDos?.filter((item)=>{console.log('item here',item);return item.id!==idd});
    
    setToDos(setNew)
  }

  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async (res)=>{
      const todoess= await res.json();
      console.log('show res',todoess?.todos);
       setToDos(todoess.todos);
    })
  },[])
  return (
    <div>
      <button onClick={()=>setTitle(Math.random().toString())}>click to change</button>
      <input id='inputID' />
      <button onClick={()=>{ 
       const task= document.getElementById('inputID').value;
       setToDos([...toDos,task])
      }}>add to do task</button>
      <Header title={title} />
      <br></br>
      <Header  title='abhishek'/>
      <br />
            <Header  title='dklvnsdkjlv'/>
<br />
      <Header  title='cvdklsnvlkslvsk'/>
      

      {
        toDos?.map((item,index)=>{
          console.log('show item',item.id)
          return(
            <>
             <ToDo key={item.id} removeToDo={removeToDo} id={item?.id} task={item?.description}  />
             </>
          )
        })
      }
    </div>
  )
}


export default Random
