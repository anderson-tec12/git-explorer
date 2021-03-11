import RepositoryItem from "../RepositoryItem"

const RepositoryList = () => {
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