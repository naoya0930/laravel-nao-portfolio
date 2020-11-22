import React from 'react';
import ReactDOM from 'react-dom';




function Example(props) {
    return (
        <div>
            <div>
                <img className='style-img' src={props.img} />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <p>{props.imgInfo}</p>
                </div>
            </div>
        </div>
    );
}

export default Example;
/*
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
*/
