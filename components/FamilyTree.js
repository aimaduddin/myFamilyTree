import Card from './ui/Card'

export default function FamilyTree({ data }) {
  const buildTree = (parentId = null) => {
    return data.members
      .filter(member => member.parentId === parentId)
      .map(member => (
        <li key={member.id} className="mb-2">
          <Card className="inline-block">{member.name}</Card>
          <ul className="pl-4 mt-2">{buildTree(member.id)}</ul>
        </li>
      ))
  }

  return (
    <ul>
      {buildTree(null)}
    </ul>
  )
}
