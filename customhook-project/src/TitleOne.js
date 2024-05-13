import React from 'react';
import useTitle from './useTitle';

function TitleOne()
{   
    const [num,setNum] = React.useState(0);

    useTitle(num);


    return ( 
        <div>
            <button onClick={() => setNum(num + 1)}>Sayı - {num}</button>
        </div>
     );
}

export default TitleOne;