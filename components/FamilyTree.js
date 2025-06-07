import Card from './ui/Card'

export default function FamilyTree({ data }) {
  const buildTree = (parentId = null) => {
    return data.members
      .filter(member => member.parentId === parentId)
      .map(member => {
        const children = buildTree(member.id)
        return (
          <li key={member.id}>
            <Card className="node">
              <div>{member.name}</div>
              <div className="meta">ID: {member.id} | Parent: {member.parentId ?? 'N/A'}</div>
            </Card>
            {children.length > 0 && <ul>{children}</ul>}
          </li>
        )
      })
  }

  return (
    <div className="tree">
      <ul>
        {buildTree(null)}
      </ul>
    </div>
  )
}
