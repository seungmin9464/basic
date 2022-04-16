//rscm

import React, { memo } from 'react';

const Test06Sub = ({ title, cnt }) => {

    console.log(title, cnt)

    return (
        <div>
            <h1>출력 : {title} / {cnt}</h1>
        </div>
    );
};

export default Test06Sub;

/*
import React from 'react';

const Test06Sub = ({ title, cnt }) => {

    console.log(title, cnt)

    return (
        <div>
            <h1>출력 : {title} / {cnt}</h1>
        </div>
    );
};

export default React.memo(Test06Sub);
*/