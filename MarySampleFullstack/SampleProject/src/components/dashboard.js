import React from 'react'; 
import axios from "axios"
import { useEffect,useState } from "react"
 import Newscard from "./newscard";
import "./dashboard.css";
import DashboardHeader from "./dashboardheader";

export default function Dashboard()
{
    const[newsarr,setNewsarr] =useState([])

  

    useEffect(()=>{
 
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apikey=7f118af83e1b48f6939fc5096e89fd22&page=1')
         .then
            (
                (res)=>
                {
                  
                    console.log(res.data.articles);
    
                 setNewsarr(res.data.articles);
                 
                }
            )
        .catch
        (
            (err)=>console.log("error occured " + err)
        )
    
    
                    },[] );
    


        return(
            <div>
              <DashboardHeader/>
                
                 <div className="clsnews">            
 {newsarr.map (news=>
      <Newscard  content={news.content} author={news.author} urlimg={news.urlToImage} />)
       }
            </div>
</div>
          
        )
}