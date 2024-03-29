//import React from 'react'

function Grid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-400">This is first Child</div>
        <div className="bg-yellow-400">This is second Child</div>
        <div className="bg-cyan-400">This is third Child</div>
        <div className="bg-cyan-400">This is third Child</div>
        <div className="bg-cyan-400">This is third Child</div>
      </div>
      <br />
      <div className="grid grid-cols-10"> 
        <div className="bg-red-400 col-span-4">This is first Child</div>
        <div className="bg-yellow-400 col-span-4">This is second Child</div>
        <div className="bg-cyan-400 col-span-2">This is third Child</div>
      </div>
    </div>
  );
}

export default Grid;
