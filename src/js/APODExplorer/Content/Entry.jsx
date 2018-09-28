import React from 'react';

export default ({value, value: {title, explanation}}) =>
    <figure>
        <img src={value.url(true)} alt={title}/>
        <figcaption>
            {title && <h3>{title}</h3>}
            {explanation && <p>{explanation}</p>}
        </figcaption>
    </figure>;