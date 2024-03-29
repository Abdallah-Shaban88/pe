import React, { createContext, useEffect, useState } from 'react'
import { getData } from '../db/firestoreHundle'

export const CouriersContext = createContext()

export const CouriersProvider = (props) => {
    const [couriers, setCouriers] = useState([
        {
            name: 'عبد الرحمن عصام الدين / اكتوبر',
            phone: '01141997937',
            notes: '',
        } 
    ])
    useEffect(() => {
      getData('couriers', setCouriers)
    }, [])
  return (
    <CouriersContext.Provider value={[couriers, setCouriers]}>{props.children}</CouriersContext.Provider>
  )
}