import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/Context';
import { useNavigate } from 'react-router';

const Information = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate(null)
  const { info, setInfo, addData } = context

  // handling data submission to the state
  // submission of data to db
  const handleSubmit = (e) => {
    e.preventDefault()
    addData()
    alert("data successefully added into datastore")
    navigate("/")
  }
  
  return (
    <>
      <div className="info-container">
        <form onSubmit={handleSubmit}>
          <h2>Type Note</h2>
          <textarea
                name="message"
                placeholder="Write something..." rows="5" cols="30"
                onChange={(e) => setInfo({ ...info, note: e.target.value })}
                required>
          </textarea>
          <br />
          <button type="submit" className='btn' >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Information