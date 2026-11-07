import { IconDeviceLaptop } from '@tabler/icons-react'
import React from 'react'

function Work() {
  return (
    <div className='flex items-center gap-2'>
        <span
              className='flex size-9 shrink-0 items-center justify-center rounded-[7px] shadow-[0_6px_18px_rgba(250,204,21,0.28)] ring-1 ring-yellow-300/50 [&>svg]:size-6'
              style={{ backgroundColor: '#FACC15' }}
            >
                <IconDeviceLaptop className="text-white"/>
            </span>
        <h1 className='font-sans text-xl text-foreground tracking-wide font-medium'>Things What I Do</h1>
    </div>
  )
}

export default Work