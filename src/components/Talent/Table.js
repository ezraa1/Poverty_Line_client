import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Skills</th>
            </tr>
            {data.map((item) =>(
                <tr key={item.id}>
                <td> {item.full_name} </td>
                <td> {item.email} </td>
                <td> {item.skills} </td>
            </tr>

            ))}
            
        </tbody>
        </table>
  )
}

export default Table