import React from "react";
import names from 'classnames';

export default ({large = false, centered = false, customClass = undefined}) => (
    <div className={names("loader", customClass, {centered, large})}>
        <i/>
        <i/>
        <i/>
    </div>
);
