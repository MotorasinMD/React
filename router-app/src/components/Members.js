import React from 'react'
import {useSearchParams} from 'react-router-dom'

function Members() {
  const[searchParams,setSearchParams]= useSearchParams();
  const isActive = searchParams.get('filter') ==='active';
  return (
    <>
      <div>Members</div>
      <button onClick={()=> setSearchParams({filter : 'active'})}>Aktif Üyeler</button>
      <button onClick={()=> setSearchParams()}>Tüm Üyeler</button>
      {isActive ? <h2>Aktif Üyeler</h2>:<div>Pasif Üyeler</div>}
    </>
  )
}

export default Members