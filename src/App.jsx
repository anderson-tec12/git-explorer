import React from 'react'
import Counter from './components/Counter'
import RepositoryList from './components/RepositoryList'

import './styles/global.scss'


export function App(){
  // throw new Error('eita lasquera') 
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}