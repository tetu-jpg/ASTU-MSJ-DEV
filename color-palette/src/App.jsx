import { useState } from 'react'
import ColorPreview from './Components/ColorPreview';
import ColorButton from './Components/ColorButton';

function App(){
  const colors =["Violet", "Blue", "Green" , "Red", "Yellow", "Brown"];
  const [activeColor,setColor] = useState(null);
  return(
    <div className='bg-gray-300'>
    <div className='bg-white p-10 m-10'>
      <h2
          className="p-10 pl-150
          font-bold text-2xl"
        >
          Color Palette Picker
        </h2>

        {colors.map((color) => (
          
          <ColorButton
          key={color}
          color={color}
          onPress={setColor}
          activeColor={activeColor}
          />

            
        ))}
    <div><ColorPreview color={activeColor}
    onReset={()=>setColor(null)} /></div>
    </div>
    </div>
  );
}
export default App;