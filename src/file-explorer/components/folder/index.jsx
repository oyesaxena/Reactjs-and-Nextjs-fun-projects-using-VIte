import React, { useState } from "react";

const Folder=({exploreData,insertNode})=>{
    const[expand,setExpand]=useState(false);
    const [showInput,setShowInput]=useState({
        visible:false,
        isFolder:false
    })
     const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      insertNode(exploreData.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };
    const handleNewFolder=(e,isFolder)=>{
        e.stopPropagation();
        setExpand(!expand);
        setShowInput({
            visible:true,
            isFolder:isFolder
        })
    }
    return(
        <> 
        {exploreData?.isFolder?<>
        <div style={{marginTop:10,marginLeft:20}}>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{cursor:'pointer'}}  onClick={()=>setExpand(!expand)} >
        <span>🗂️ {exploreData?.name}</span>
       </div>
       <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
          </div>
       
       <div style={{display:expand?'block':'none'}}> 
       {showInput.visible && (
            <div className="inputContainer">
           <span>{showInput.isFolder? "📁" : "📄"}</span> 
           <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
              </div>
          )}
       
       { exploreData?.items?.map((item,index)=>{
            return <Folder exploreData={item} key={item.id}/>
        })}
        </div>
        </div>
        </>:<>
         <div style={{marginTop:10,marginLeft:5}}>
        <span>🗳️ {exploreData?.name}</span>
        </div></>}
        </>
    )
}

export default Folder