import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'João'
    },
    {
        id: 3,
        name: 'José'
    },
    {
        id: 4,
        name: 'Lucas'
    },
    {
        id: 5,
        name: 'Gabriel'
    },
]

const App = () => {
    const renderCustomers = (customer, index) => {
        return (
            <li key={`customer-${customer.id}`}>{customer.name}</li>
        )
    }


  return (
    <div>
      <p>Digital Innovation One</p>
      <div>
        <header>Lista de Clientes:</header>
        <ul>
            {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;
