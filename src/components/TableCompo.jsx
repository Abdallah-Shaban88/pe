import React from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Input } from './Input'
export const ZoneTable = ({data}) => {
   // FaEdit
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th className='bg-primary text-light'>اسم النطاق</th>
      <th className='bg-primary text-light'>الوصف</th>
      <th className='bg-primary text-light'>تعديل</th>
    </tr>
  </thead>
  <tbody>
   {data.map( zone =>
    (<tr>
      {console.log(zone)}
      <td>{zone.name}</td>
      <td>{zone.desc}</td>
      <td><FaEdit /></td>
    </tr>
    ))}
  </tbody>
</Table>
  )
}

export const AreaTable = ({data}) => {
  // FaEdit
 return (
   <Table striped bordered hover>
 <thead>
   <tr>
     <th className='bg-primary text-light'>تعديل</th>
     <th className='bg-primary text-light'>النطاق</th>
     <th className='bg-primary text-light'>اسم المنطقة</th>
   </tr>
 </thead>
 <tbody>
  {data.map( area =>
   (<tr>
     <td><FaEdit /></td>
     <td>{area.areaDomain}</td>
     <td>{area.areaName}</td>
   </tr>
   ))}
 </tbody>
</Table>
 )
}

export const CourierTable = ({data}) => {
  // FaEdit
 return (
   <Table striped bordered hover>
 <thead>
   <tr>
     <th className='bg-primary text-light'>تعديل</th>
     <th className='bg-primary text-light'>النطاق</th>
     <th className='bg-primary text-light'>اسم المنطقة</th>
   </tr>
 </thead>
 <tbody>
  {data.map( zone =>
   (<tr>
     <td><Input /></td>
     <td><Input /></td>
     <td>{zone.name}</td>
   </tr>
   ))}
 </tbody>
</Table>
 )
}