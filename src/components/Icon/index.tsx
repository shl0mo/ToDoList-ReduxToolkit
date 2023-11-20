interface IconProps {
	onClick: Any;
	src: string;
}

export default function Icon (props: IconProps) {
	return (
		<img src={props.src} onClick={props.onClick} style={imgStyle}/>
	)
}

const imgStyle = {
	display: 'flex',
	alignSelf: 'center',
	position: 'relative',
	margin: '0px auto',
	width: '20px',
	height: '20px'
}
