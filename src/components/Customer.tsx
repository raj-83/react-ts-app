import React from 'react'

interface CustomerProps {
  name?: string;
  Title?: string;
  age?: number;
}

const Customer = ({ name, Title,age }: CustomerProps) => {
  return (
    <div>
      <h1>HI</h1>
        <h2>{name}</h2>
        <h2>{Title}</h2>
        <h2>{age}</h2>
        <h1>Welcome to Customer Component</h1>
        

    </div>

  )
}

export default Customer
