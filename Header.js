import React, { useRef } from 'react'
import {HiOutlineSearchCircle} from 'react-icons/hi'

export default function Header({handleSearch, movieShow, detailShow}) {

  const inputValue = useRef()

  function handleSubmit(e){
    e.preventDefault()
    handleSearch(inputValue.current.value)
    inputValue.current.value = ''
    movieShow(true)
    detailShow(false)   
  }
  
  return (
    <div className='header'>
        <h1>Movie App</h1>
        <form onSubmit={handleSubmit} className='search-movie'>
        <input ref={inputValue} type="text" placeholder='Search...' />
        <button type='submit'><HiOutlineSearchCircle/></button>
        </form>
    </div>
  )
}