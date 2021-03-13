import React from 'react'
import RepositoryList from './components/RepositoryList'
//https:api.github.com/orgs/rocketseat/repos

import './styles/global.scss'


export function App(){
  // throw new Error('eita lasquera') 
  return (
    <>
      <RepositoryList />
    </>
  )
}