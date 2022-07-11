import React, {useState} from 'react';

const BoxGeneration = () => {
    const [color, setColor] = useState("");
    const [num, setNum] = useState("");
    const [boxes, setBoxes] = useState([]);

    const createBox = (newBox) => setBoxes([...boxes, newBox]);

    const box = {
        backgroundColor: color,
        width: `${num}px`,
        height: `${num}px`,
        marginRight: '10px',
        marginBottom: '10px'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox(box);
        setColor('');
        setNum('');
    }

    return(
        <div className='w-75 mx-auto'>
            <h1>Type in color and dimensions to generate boxes!</h1>
            <form onSubmit={ handleSubmit }>
                <div className='d-flex w-50 mx-auto mb-3'>
                    <label htmlFor="color" className='form-label me-5'>Color:</label>
                    <input className='form-control' type="text" name='color' value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div className='d-flex w-50 mx-auto mb-3 '>
                    <label htmlFor="num" className='form-label me-2'>Dimensions:</label>
                    <input className='form-control' type="text" name='num' value={num} onChange={(e) => setNum(e.target.value)}/>
                </div>
                <div className='w-50 d-flex flex-column align-items-end mx-auto'>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </div>
            </form>
            <div className='d-flex flex-wrap'>
                {boxes.map((item, i) => {
                    return(
                        <div key={i} style={item}></div>
                    );
                })}
            </div>
        </div>
    );

}
export default BoxGeneration;