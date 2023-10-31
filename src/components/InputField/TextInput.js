import './InputField.css'

const Input = ({ name, placeholder, onChange, value, className, ...props }) => (
  <input
    {...props}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
  />
)

export default Input
