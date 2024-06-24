import React, { useEffect, useState } from "react";


const Pagination=()=>{
    const[ products,setProducts]=useState([]);
    const[page,setPage]=useState(1);
    console.log('products',products)
   
        const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const data = await res.json()

        console.log(data);

    if (data && data.products) {
      setProducts(data.products)
    }
    }

    const selectPageHandler=(pag)=>{
        console.log('page show',pag);
        if(pag>=1 && pag<=products.length/10&& pag!==page ){
            setPage(pag);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return(<>
    {   
    <div style={{}}>
        <input type="range" min={10} max={20} />
       { products.slice(page * 10 - 10, page * 10).map((prod)=>{
            return <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> 
            <p>
              {prod.title}
            </p>
          </span>
        })}
        {products?.length>0 && <div>
            <span>back</span>
            {[...Array(products?.length/10)].map((_,i)=>{
                return <span style={{padding:10,cursor:'pointer'}} key={i}  onClick={() => selectPageHandler(i + 1)} >{i+1}</span>
            })

            }
            </div>}
        </div>
    }
    <span>cdklsncvdkls</span>
    </>)
}

export default Pagination