function ColorButton({color,onPress,activeColor}){
    const pressed =color ===activeColor;

    return(
        <>
        <button onClick={()=>onPress(color)}
            className={`m-2 px-6 py-3  rounded-lg border ml-30 w-24 h-18 hover:scale-130
            ${pressed ? "animate-spin" :""}
            `}

            style={{background: color}}>
            {color}
        </button>
        
        </>
    );
}
export default ColorButton;