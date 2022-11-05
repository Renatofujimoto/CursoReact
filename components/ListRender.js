import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Renato', 'João', 'Josias'])

  // simulando o banco de dados
  const [users, setUsers] = useState([
    { id: 1, name: 'Renato', age: 28 },
    { id: 2, name: 'João', age: 31 },
    { id: 3, name: 'Josias', age: 40 }
  ])

  // previous state
  const deleteRandom = () => {
    const randoNumber = Math.floor(Math.random() * 4)

    setUsers(prevUsers => {
      return prevUsers.filter(user => randoNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}> Delete random user</button>
    </div>
  )
}

export default ListRender
