export default function Input({ className = '', style = {}, ...props }) {
  return (
    <input
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '0.375rem',
        padding: '0.5rem 0.75rem',
        outline: 'none',
        width: '100%',
        ...style,
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 2px #000';
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
      className={className}
      {...props}
    />
  )
}
