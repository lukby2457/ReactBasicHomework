import React from 'react'
import "./App.css";
import { useState } from 'react';

const App = () => {
  const [countryList, setCountryList] = useState([]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const getCountryName = (list) => {
    return (list.length !== 0) ? list.map((one) => one.country) : [];
  };

  const clearForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
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

        const updatedCountryList = countryList.filter((list) => {
          return list.id !== countryResult.id;
        });

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

  const deleteCountryResult = (id) => {
    const deletedCountryList = countryList.filter((list) => {
      return list.id !== id;
    })

    setCountryList([...deletedCountryList]);
  };

  function createComponent() {
    if (countryList.length === 0) {
      return <p>국가를 등록해 보세요</p>;
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>순위</th>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countryList
              .sort((a, b) => {
                if(a.gold > b.gold) return -1;
                else if(a.gold < b.gold) return 1;
                else {
                  if(a.silver > b.silver) return -1;
                  else if(a.silver < b.silver) return 1;
                  else {
                    if(a.bronze > b.bronze) return -1;
                    else return 1;
                  }
                }
              })
              .map((list, index) => {
                return (
                  <tr key={list.id}>
                    <td>{index + 1}</td>
                    <td>{list.country}</td>
                    <td>{list.gold}</td>
                    <td>{list.silver}</td>
                    <td>{list.bronze}</td>
                    <td><button onClick={() => deleteCountryResult(list.id)}>삭제</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      );
    };
  }; 

  return (
    <div className='container'>
      <h1>파리 올림픽 메달 집계</h1>
      <form id='inputForm'>
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
        <label htmlFor='goldCount'>금메달</label>
        <input 
          type="number" 
          id='goldCount' 
          value={gold} 
          onChange={(e) => {
            setGold(e.target.value);
          }}
        />
        <label htmlFor='silverCount'>은메달</label>
        <input 
          type="number" 
          id='silverCount' 
          value={silver} 
          onChange={(e) => {
            setSilver(e.target.value);
          }}
        />
        <label htmlFor='bronzeCount'>동메달</label>
        <input 
          type="number" 
          id='bronzeCount' 
          value={bronze} 
          onChange={(e) => {
            setBronze(e.target.value);
          }}
        />
        <div>
          <button type='submit' onClick={createCountryResult}>국가 추가</button>
          <button type="button" onClick={updateCountryResult}>업데이트</button>
        </div>
      </form>
      <div className='country_list'>
        {createComponent()}
      </div>
    </div>
  )
}

export default App


