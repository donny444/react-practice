import React, { useMemo } from 'react';

function Example({ list }) {
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b);
  }, [list]);

  return sortedList.map(item => <div key={item}>{item}</div>);
}

//Provided by GPT-4