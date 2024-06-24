import React, { memo, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Random from './random'
import FileExplorer from './file-explorer'
import Pagination from './pagination'
import { DarkMode } from './dark-mode'
import StatusBar from './status-bar'

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

const App=() =>{
  const [title,setTitle]=useState('bla bla bla')
  const [toDos,setToDos]=useState([]);
  const [recall,setRecall]=useState(false)
  console.log('toDos',toDos)
  // const  =useTheme();
  

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
    <>
    <p>ckjdnsvkjdnskjvndskjvndsjkvndsjkvds</p>
    <Layout />
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/random" Component={Random} />
        <Route path='/explore' Component={FileExplorer} />
        <Route path='/paginate' Component={Pagination} />
        <Route path='/dark' Component={DarkMode} />
        <Route path='/status' Component={StatusBar} />
    </Routes>
    </>
  )
}


export default App
