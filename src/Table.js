import React, {Component} from 'react'


const Table = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <table className="table">
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }

export default Table

const TableHeader = () => {
    return (
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>

        </tr>
      </thead>
    )
    return <thead />
  }



  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)} className="btn-danger">Delete</button>
        </td>
      </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }



 