export default function FamilyTree({ data }) {
  const buildTree = (parentId = null) => {
    return data.members
      .filter(member => member.parentId === parentId)
      .map(member => (
        <li key={member.id}>
          {member.name}
          <ul>{buildTree(member.id)}</ul>
        </li>
      ))
  }

  return (
    <ul>
      {buildTree(null)}
    </ul>
  )
}
