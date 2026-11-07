import { IconChevronDown, IconDeviceLaptop, IconNetwork } from '@tabler/icons-react'

function Work() {
  return (
    <div className=" w-full justify-between py-7 items-start">
        <div className='flex items-center gap-2'>
        
        <h1 className='font-sans text-xl text-foreground tracking-wide font-medium'>Things What I Do</h1>
        </div>
        <div className='py-8'>
            <div className="relative flex items-center gap-3 pr-10">
                <span
              className='flex size-9 shrink-0 items-center justify-center rounded-[7px] shadow-xl/30  [&>svg]:size-6'
              style={{ backgroundColor: '#E61C98' }}
            >
                <IconNetwork className="text-white"/>
            </span>
            <div className="flex min-w-0 items-baseline gap-2">
                <h3 className="shrink-0 font-sans text-lg font-semibold tracking-wide text-foreground">PulseGrid</h3>
                <h4 className="truncate text-base tracking-wide text-muted-foreground">
                    Be Updated With Following Digital Minimalism
                </h4>
            </div>

            <button
                type="button"
                className="absolute right-0 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Expand PulseGrid"
            >
                <IconChevronDown className="size-5" stroke={1.5} />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Work