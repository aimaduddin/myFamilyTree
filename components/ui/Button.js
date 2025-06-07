export default function Button({ className = '', style = {}, ...props }) {
  return (
    <button
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        backgroundColor: '#111',
        color: '#fff',
        transition: 'background-color 0.2s',
        ...style,
      }}
      className={className}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#111')}
      {...props}
    />
  )
}
