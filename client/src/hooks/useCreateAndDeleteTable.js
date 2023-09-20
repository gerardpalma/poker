import { useEffect, useState, useContext } from 'react';
import Axios from 'axios';

const useCreateAndDeleteTable = () => {
  
  const createTable = async (seatNumber) => {
    try {
      console.log("seatNumber", seatNumber)
      const res = await Axios.post('http://localhost:5000/api/currentTables',{
        seatNumber
      })

    } catch (error) {
      alert(error);
    }
  };
 
  const getCurrentTable = async () => {
    try {
      console.log("wewewe")
      const currentTables =await Axios.get('http://localhost:5000/api/currentTables')
      console.log("currentTables", currentTables)
    } catch (error) {
      
    }
  }
  return [createTable, getCurrentTable];
};

export default useCreateAndDeleteTable;
