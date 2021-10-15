import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../../config';
import { ItemsList } from '../itemList/ItemsList';
import {Preloader} from '../Preloader'

function Main(params){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( function getItems(){
        fetch(API_URL, {
                headers: {
                    'Authorization' : API_KEY
                }
            }
        ).then(
            response => response.json()
        ).then(
            data => {
                data.shop && setItems(data.shop)
                setLoading(false)
            }
        )
    },[])

    return  (    
        <main className="main">
            <div className="main__container container">
                {loading ? 
                <Preloader/> : 
                <ItemsList items={items}/>}
            </div>
        </main>
    )   
}
export {Main}