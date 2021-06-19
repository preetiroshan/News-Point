import React, { useState, useEffect} from 'react'
import { getSavedNewsApi, removeSavedNewsApi } from '../../Services/readNowServices';
import DisplayCard from '../displayCard/DisplayCard';

export default function ReadNow() {
  const [myNews, setMyNews] = useState([])
  useEffect(() => {
    getSavedNewsApi().then((data)=>{setMyNews(data)})
  }, [myNews])

  const removeNews = (id) => {
    removeSavedNewsApi(id).then(()=>{
      const newNewsToBeReadLater = myNews.filter((news)=>{
        return news.id !== id;
      })
      setMyNews(newNewsToBeReadLater)
    })
    .catch(err=>{
      return err;
    })
  }

  return (
      <div className="row py-5">
          { 
            myNews.map((item)=>(

              <DisplayCard
                key={item.title}
                item = {item}
                removeNews = {removeNews }
              />
            ))
          }
        </div>
  )
}
