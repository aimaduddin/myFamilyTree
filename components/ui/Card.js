export default function Card({ className = '', style = {}, children }) {
  return (
    <div
      className={className}
      style={{
        padding: '1rem',
        border: '1px solid #e5e7eb',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        display: 'inline-block',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
