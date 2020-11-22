import React from 'react';
import ReactDOM from 'react-dom';

function InfoCard(props) {
    return (
        <div className="info-card-margin">
            <div className="info-card-section">
                <div className="info-card-dev-left">
                    <img className="icon-style" src={props.icon} />
                </div>
                <div className="info-card-dev-right">
                        <strong>{props.title}</strong>
                        <p>{props.v1}</p>
                        <p>{props.v2}</p>
                        <a href={props.link}>{props.linkName}</a>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;