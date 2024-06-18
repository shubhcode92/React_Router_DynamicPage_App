import React from 'react'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react';

const User = () => {
    const {user_id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const uri = `https://api.github.com/users/${user_id}`;
    const a = "Loading..."
    const b = ""

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(uri);
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`)
            }
            const data = await res.json();
            console.log(data);
            setData(data);
            setLoading(false);
        }

        fetchData();

    }, [user_id])

    if (loading) {
        return <div className=' text-center text-3xl font-bold text-red-500'>Loading...</div>
    }

  return (
    <div className=' flex bg-lime-800 mx-32 my-12 text-white font-bold text-2xl text-center justify-center'>
        
        <div>
            <div className=''>User: {user_id}</div>
            {data && (
                <div className=' items-center text-center'>
                    <div>Followers: {data.followers}</div>
                    <img className='w-32 h-32 content-center' src={data.avatar_url} alt="Avatar" />
                </div>

            )}
        </div>
    </div>
  )
}

export default User