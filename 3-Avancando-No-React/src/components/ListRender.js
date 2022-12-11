import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(['Renato', 'Leila', 'Patricia'])
  const [users, setUsers] = useState([
    { id: 1, name: 'Renato', age: 29 },
    { id: 2, name: 'Luciano', age: 32 },
    { id: 1, name: 'Bruno', age: 27 }
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers(prevUsers => {
      return prevUsers.filter(user => randomNumber !== user.id)
    })
  }

  return (
    <div>
      {/* render sem key primeiramente */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender
