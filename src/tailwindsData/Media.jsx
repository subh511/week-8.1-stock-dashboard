//import React from 'react'
//md:grid-cols-3

//in grid first grid denotes grid format
//secondly grid-cols-1 means all in cols wise means to showcase ur children in small devices;
//thirdly for responseive xs,sm,md,lg
//sm:grid-cols-1(small size screen show me all 4 in col wise)
//md:grid-cols-2(medium size screen show me all 2 in col wise)
//lg:grid-cols-3(large size screen show me all 1 in col wise)
function Media() {
  return (
    <div>
    <div className="bg-red-500 md:bg-blue-500">
    hii there
    </div>
    <br/>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
    <div className="bg-red-500">
    hi 1
    </div>
    <div className="bg-yellow-500">
    hi 2
    </div>
    <div className="bg-cyan-500">
    hi 3
    </div>
    <div className="bg-orange-500">
    hi 3
    </div>
    </div>
    </div>
  )
}

export default Media