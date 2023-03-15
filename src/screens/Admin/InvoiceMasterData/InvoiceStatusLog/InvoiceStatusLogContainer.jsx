import React from 'react';
import InvoiceStatusLogComponent from './InvoiceStatusLogComponent';

const InvoiceStatusLogContainer = () => {

  const column = [
    {name : "#" , label : "#"},
    {name : "IR Num/IR Year" , label : "IR Num/IR Year"},
    {name : "Vendor Name" , label : "Vendor Name"},
    {name : "Status" , label : "Status"},
    {name : "Message" , label : "Message"},
    {name : "Created At" , label : "Created At"},
    {name : "Updated At" , label : "Updated At"},
  ]
  return (
    <>
    <InvoiceStatusLogComponent column={column}/>
    </>
  )
}

export default InvoiceStatusLogContainer ;