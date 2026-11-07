import Image from 'next/image'
import React from 'react'

function Profile() {
  return (
    <div className="shrink-0 rounded-full border-2 border-dotted border-muted-foreground/50 bg-background p-1 shadow-sm">
        <Image
          src="/ziyaudheenms.jpeg"
          alt="Profile Picture"
          width={72}
          height={72}
          className="aspect-square rounded-full object-cover"
        />
    </div>
  )
}

export default Profile