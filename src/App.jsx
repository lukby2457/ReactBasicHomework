import React from 'react'
import "./App.css";
import { useState } from 'react';
import InputForm from './components/inputForm';
import CreateTr from './components/CreateTr';

const App = () => {
  const [countryList, setCountryList] = useState([]);

  const getCountryName = (list) => {
    return (list.length !== 0) ? list.map((one) => one.country) : [];
  };

  const deleteCountryResult = (id) => {
    const deletedCountryList = countryList.filter((list) => list.id !== id)

    setCountryList([...deletedCountryList]);
  };

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
                return <CreateTr key={list.id} list={list} index={index} deleteFunction={deleteCountryResult} />
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
      <InputForm 
        countryList={countryList}
        setCountryList={setCountryList}
        countryName={getCountryName} />
      <div className='countryList'>
        {createComponent()}
      </div>
    </div>
  )
}

export default App


