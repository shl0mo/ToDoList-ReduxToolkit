interface ButtonProps {
	label: string;
	background_color: string;
	color: string;
	onClick: Any;
	borderRadius: string;
}

export default function Button (props: ButtonProps) {
	return (
		<button onClick={props.onClick} style={{backgroundColor: props.background_color, color: props.color, borderRadius: props.borderRadius}}>
				{props.label}
		</button>		
	)
}
