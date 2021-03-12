import {useState, useEffect} from 'react'
import RepositoryItem from "../RepositoryItem"
import '../../styles/repositories.scss'
import api from '../../services/api'

const RepositoryList = () => {
  const [repositories,setRepositories] = useState([])

  useEffect(() => {
    api.get('orgs/rocketseat/repos').then(resp => {
      setRepositories(resp.data)
    })
  },[])
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository={
            {
              name:'Unform',
              description:'Forms in React',
              link:'https://github.com',
            }
          } />
        <RepositoryItem repository={
            {
              name:'Unform',
              description:'Forms in React',
              link:'https://github.com',
            }
          } />
        <RepositoryItem repository={
            {
              name:'Unform',
              description:'Forms in React',
              link:'https://github.com',
            }
          } />
      </ul>
    </section>
  )
}

export default RepositoryList