import React from 'react';

export function Person({name = 'John Doe'}: {name: string}) {
  return <h1>My name is {name}</h1>
}