import React from 'react'
import "./App.css";
import { useState } from 'react';
import InputForm from './components/inputForm';
import CreateTr from './components/CreateTr';

const App = () => {
  const [countryList, setCountryList] = useState([]);

  function createComponent() {
    if (countryList.length === 0) {
      return <p>국가를 등록해 보세요</p>;
    } else {
      return (
        <table className='countryTable'>
          <thead>
            <tr>
              <th rowSpan={2}>순위</th>
              <th rowSpan={2}>국가명</th>
              <th colSpan={3}>메달</th>
              <th rowSpan={2}>합계</th>
              <th rowSpan={2}>액션</th>
            </tr>
            <tr>
              <th>금</th>
              <th>은</th>
              <th>동</th>
            </tr>
          </thead>
          <tbody>
            {countryList
              .sort((a, b) => {
                if(a.gold === b.gold) {
                  if(a.silver === b.silver) {
                    return b.bronze - a.bronze
                  } else return b.silver - a.silver
                } else return b.gold - a.gold
              })
              .map((list, index) => {
                return <CreateTr 
                key={list.id} list={list} index={index} 
                countryList={countryList}
                setCountryList={setCountryList} />
              })
            }
          </tbody>
        </table>
      );
    };
  }; 

  return (
    <div className='container'>
      <h1>2024 파리 올림픽 메달 집계</h1>
      <InputForm 
        countryList={countryList}
        setCountryList={setCountryList} />
      <div className='countryList'>
        {createComponent()}
      </div>
    </div>
  )
}

export default App


