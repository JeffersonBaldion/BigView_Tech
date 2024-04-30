import React from "react"
import style from "./Stock.module.css"
import Card from "../../Components/Card/Card"

export default function Stock(){

    const xhr = new XMLHttpRequest()
    const [stock, setStock] = React.useState()
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');  
 
    React.useEffect(()=>{



    async function getStock(){
        try {
            if(search){
                xhr.open('GET', `https://dummyjson.com/products/search?q=${search}`, true);
            }else{
                xhr.open('GET', 'https://dummyjson.com/products?limit=0', true);
            }
            
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    setStock(data.products);
                }
            };
            xhr.send();
        } catch (error) {
            console.error('Error:', error);
        }
    }   
    
    getStock()
    
    },[search])

    return(
        <div className={style.stockContainer}>
            <div className={style.filterContainer}></div>
            <div className={style.dataStockContainer}>
                {stock?.map((element)=>{
                    return <Card key={element.id}  image={element.images[0]} name={element.title} price={element.price}/>
                })}
            </div>
        </div>
    )
}