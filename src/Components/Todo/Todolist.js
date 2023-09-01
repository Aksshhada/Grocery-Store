import React from 'react'
import './style.css'

const Todolist = () => {
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <div className='welcome'><h1>Welcome to Grocery Store</h1></div>
          <div className='name'>
            <input type='text' placeholder='Your Name'></input>
          </div>
          <div className='phone'>
            <input type='text' placeholder='Mobile Number'></input>
          </div>
            <figure>
                {/* <img src='' alt='todologo'/> */}
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' placeholder='✍ Add Item' className='form-control'></input>
                <i className='fa fa-plus add-btn'></i>
                {/* <a href="https://iconscout.com/icons/plus" target="_blank">Free Plus Icon</a> by <a href="https://iconscout.com/contributors/unicons" target="_blank">Unicons Font</a> */}
            </div>


            {/* show our items */}
            


            {/* remove all button */}
            <div className='showItems'>
              <button className='btn effect04' data-sm-link-text='Submit'>
                <span>Check List</span>
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todolist
