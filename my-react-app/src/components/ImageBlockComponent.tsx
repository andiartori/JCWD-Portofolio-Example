interface ImageBlockProp{
    image :string; 
    explanation :string;
}

function ImangeBlockComponent({image , explanation} : ImageBlockProp){
    return (
        <div>
            <div className="MainImageDiv">
            <img className="MainImage" src={image} alt={image} /> 
            </div>

            <div className="explanation">
            <p >{explanation}</p>
            </div>
        
      
        </div>

    )
}

export default ImangeBlockComponent;

