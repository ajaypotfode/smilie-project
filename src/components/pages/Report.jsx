import React, { useContext } from 'react'
import { UserContext } from '../../context/Context'

const Report = () => {
  const context = useContext(UserContext)
  const { data } = context
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Smilie</th>
            <th>Date</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, index) => {
              return <>
                <tr key={value.time}>
                  <td>{value.smilie}</td>
                  <td>{value.date}</td>
                  <td>{value.time}</td>
                </tr>
              </>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Report