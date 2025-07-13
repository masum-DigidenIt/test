import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MealData = () => {
 const [data, setData] =useState([])

useEffect(()=>{

 const getData = async ()=>{
    const res = await axios.get ('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    setData(res.data.meals || [])
 }

 getData()

},[])




  return (
    <div>


{
    data.map((d)=>{
        return <h1>{d.strMeal}</h1>
    })
}

    </div>
  )
}

export default MealData