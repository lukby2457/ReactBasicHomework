import React from 'react'
import Button from './Button'

const CreateTr = ({list, index, countryList, setCountryList}) => {
  const deleteCountryResult = (id) => {
    const deletedCountryList = countryList.filter((list) => list.id !== id)

    setCountryList([...deletedCountryList]);
  };

  return (
    <tr>
      <td className='rank'>{index + 1}</td>
      <td>{list.country}</td>
      <td>{list.gold}</td>
      <td>{list.silver}</td>
      <td>{list.bronze}</td>
      <td>{list.gold + list.silver + list.bronze}</td>
      <td><Button color={"#EC1920"} onClick={() => deleteCountryResult(list.id)}>삭제</Button></td>
    </tr>
  )
}

export default CreateTr