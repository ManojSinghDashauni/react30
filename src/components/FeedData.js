import React, { useEffect, useState } from 'react'
import UserList from './UserList';

const FeedData = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        // fetch("https://randomuser.me/api/?results=50").then((result)=>{
        //     result.json().then((result)=>{
        //         setData(result.results);
        //     })
        // })
        getApi();
    },[])

    const getApi = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=50");
            const data = await response.json();
            setData(data.results);
        }catch(error){
            console.error("eroor fetching : ",error);
        }
    }
  return (
    <div>
      <h1 className='text-2xl text-center font-bold uppercase'>User List</h1>
        <div>
            {data.map((item, index) => (
            <UserList key={index} item={item} />
          ))}
        </div>
    </div>
  )
}

export default FeedData

