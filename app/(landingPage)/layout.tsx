import React from 'react'

function layout({children}:Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main>
        {children}
        <div className='text-red-700 text-3xl'>this is shared data</div>
    </main>
  )
}

export default layout