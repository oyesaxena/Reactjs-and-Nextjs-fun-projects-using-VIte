import React, { useState } from "react";
import explorer from "./data/mock-data";
import Folder from "./components/folder";


const FileExplorer=()=>{
    const[exploreData,setExploreData]=useState(explorer);

    const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id:new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: []
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };
   const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exploreData, folderId, item, isFolder);
    setExploreData(finalTree);
  };
    return(
        <>
        <Folder exploreData={exploreData} insertNode={handleInsertNode} />
      </>
    )
}

export default FileExplorer;