import React, { useState } from 'react'
import Button from './Button';

const InputForm = ({countryList, setCountryList}) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const clearForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const getCountryName = (list) => {
    return (list.length !== 0) ? list.map((one) => one.country) : [];
  };

  const createCountryResult = (e) => {
    e.preventDefault();
    const countryNameList = getCountryName(countryList);

    if(country !== '') {
      if(!countryNameList.some((name) => name === country)) {
        const countryResult = {
          id: new Date().getTime(),
          country: country,
          gold: Number(gold),
          silver: Number(silver),
          bronze: Number(bronze),
        };
        setCountryList([...countryList, countryResult]);
        clearForm();
      } else alert('이미 등록된 국가입니다');
    } else alert('국가명을 입력해주세요');
  };

  const updateCountryResult = (e) => {
    e.preventDefault();
    const countryNameList = getCountryName(countryList);

    if(country !== '') {
      if(countryNameList.some((name) => name === country)) {
        let countryResult = countryList.find((element) => element.country === country);

        const updatedCountryList = countryList.filter((list) => list.id !== countryResult.id);

        const newCountryResult = {
          id: countryResult.id,
          country: country,
          gold: Number(gold),
          silver: Number(silver),
          bronze: Number(bronze),
        };
        countryResult = { ...countryResult, ...newCountryResult };
        setCountryList([...updatedCountryList, countryResult]);
        clearForm();
      } else alert('등록되지 않은 국가입니다');
    } else alert('국가명을 입력해주세요');
  }

  return (
    <form id='inputForm' className='inputForm'>
      <div className='inputBox'>
        <label htmlFor='country'>국가명</label>
        <input 
          type="text" 
          id='country' 
          value={country} 
          placeholder='국가 입력' 
          onChange={(e) => {
            setCountry(e.target.value);
          }} 
        />
      </div>
      <div className='inputBox'>
        <label htmlFor='goldCount'>금메달</label>
        <input 
          type="number" 
          id='goldCount' 
          value={gold} 
          onChange={(e) => {
            setGold(e.target.value);
          }}
        />
      </div>
      <div className='inputBox'>
        <label htmlFor='silverCount'>은메달</label>
        <input 
          type="number" 
          id='silverCount' 
          value={silver} 
          onChange={(e) => {
            setSilver(e.target.value);
          }}
        />
      </div>
      <div className='inputBox'>
        <label htmlFor='bronzeCount'>동메달</label>
        <input 
          type="number" 
          id='bronzeCount' 
          value={bronze} 
          onChange={(e) => {
            setBronze(e.target.value);
          }}
        />
      </div>
      <div className='buttonBox'>
        <Button color={"#051440"} type='submit' onClick={createCountryResult}>국가 추가</Button>
        <Button color={"#051440"} type="button" onClick={updateCountryResult}>업데이트</Button>
      </div>
    </form>
  )
}

export default InputForm