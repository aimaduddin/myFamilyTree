import { useState } from 'react'
import FamilyTree from '../components/FamilyTree'
import familyData from '../data/family.json'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

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
    <div className="container" style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Family Tree</h1>
      <FamilyTree data={data} />
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '2rem', marginBottom: '0.5rem' }}>Add Family Member</h2>
      <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Parent ID"
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
        />
        <Button type="submit" style={{ width: '100%' }}>Add</Button>
      </form>
    </div>
  )
}
