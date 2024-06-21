export const ServiceInnerCard = ({children, key, additionClass}) => {
    return (
        <div key={key} className={`${additionClass} border-border-light green-radial-gradient-75 drop-shadow-75 flex flex-col items-center border rounded-xl px-3`}>
            {children}
        </div>
    )
}