const repositoryName = 'Unform 2'

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>form in react</p>

          <a href="">
            Acessar repositorio
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>form in react</p>

          <a href="">
            Acessar repositorio
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>form in react</p>

          <a href="">
            Acessar repositorio
          </a>
        </li>
      </ul>
    </section>
  )
}

export default RepositoryList