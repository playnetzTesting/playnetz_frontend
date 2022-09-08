export const Button = ({children, className, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={`bg-[#33A4D8] ${className} text-white rounded-l-md px-4 py-2`}>{children}</button>
        </>
    )
}