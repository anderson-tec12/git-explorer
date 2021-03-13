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
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.name} repository={repository} />
          ))
        }
      </ul>
    </section>
  )
}

export default RepositoryList