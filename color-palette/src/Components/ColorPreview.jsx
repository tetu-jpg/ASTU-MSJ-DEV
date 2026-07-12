function ColorPreview({ color,onReset }) {
  return (
    <>
      <div className="items-center flex-col">
        <div className="p-10  mt-50 ml-140  rounded-4xl w-50"
        style={{background : color ? color : "gray"}}>
          {color ? color : "No color selected"}
          
        </div>
        <div  className="mb-70 ml-150">
        <h4>selected color is:<span style={{color: color}}>{color}</span></h4>
        <button onClick={onReset}
        className="border-2"
        >Reset</button>
        </div>
      </div>
    </>
  );
}
export default ColorPreview;
