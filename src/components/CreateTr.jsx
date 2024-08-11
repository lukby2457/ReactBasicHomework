import React from 'react'
import Button from './Button'

const CreateTr = ({list, index, deleteFunction}) => {
  return (
    <tr>
      <td className='rank'>{index + 1}</td>
      <td>{list.country}</td>
      <td>{list.gold}</td>
      <td>{list.silver}</td>
      <td>{list.bronze}</td>
      <td>{list.gold + list.silver + list.bronze}</td>
      <td><Button color={"#EC1920"} onClick={() => deleteFunction(list.id)}>삭제</Button></td>
    </tr>
  )
}

export default CreateTr