import { useState } from 'react'
import FamilyTree from '../components/FamilyTree'
import familyData from '../data/family.json'

export default function Home() {
  const [data, setData] = useState(familyData)
  const [name, setName] = useState('')
  const [parentId, setParentId] = useState('')

  function handleAdd(e) {
    e.preventDefault()
    if (!name) return
    const newId = data.members.length + 1
    setData({
      members: [
        ...data.members,
        { id: newId, name, parentId: parentId ? parseInt(parentId) : null }
      ]
    })
    setName('')
    setParentId('')
  }

  return (
    <div>
      <h1>Family Tree</h1>
      <FamilyTree data={data} />
      <h2>Add Family Member</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Parent ID"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
