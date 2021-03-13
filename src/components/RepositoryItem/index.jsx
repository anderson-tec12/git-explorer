const RepositoryItem = ({repository}) => {
  console.log(repository)
  return (    
    <li>
          <strong>{repository.name }</strong>
          <p>{repository.description}</p>

          <a href={repository.html_url}>
            Acessar repositorio
          </a>
    </li>
  )
}

export default RepositoryItem