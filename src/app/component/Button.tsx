import './button.scss'

type buttonType = {
    text: string;
    disabled?: boolean|undefined;
    handle?: () => void|undefined;
    className?: string|undefined
}
const Button = (props : buttonType) => {
    return (
        <>
            <button
                disabled={props.disabled}
                className={props?.className}
                onClick={props?.handle}
            >
                {props.text}
            </button>
        </>
    )
}

export default Button