function Button(props) {
    return (
        <button onClick={() => props.onClick(props.title)}>{props.title}</button>
    )
}

export  default Button