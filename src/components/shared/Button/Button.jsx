import './Button.css'
const Button = ({ color, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}>
			{children}
		</button>
	)
}

export default Button
