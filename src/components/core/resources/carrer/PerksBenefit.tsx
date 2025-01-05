import { MeterorCard } from '@/components/common/MeterorCard'
import React from 'react'

const PerksBenefit = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center md:my-24 space-y-4">
                    <h1 className='uppercase text-xl text-orange-500'>PERKS & BENEFITS</h1>
                    <h2 className='text-4xl capitalize font-semibold'> We Add Value to your life  </h2>
                    <div className="flex gap-2 md:flex-row flex-col justify-center items-center">
                        <MeterorCard title="Innovative Technology" text={'Work with the latest technologies and cloud communication technologies.'} />
                        <MeterorCard title="Diverse Team" text={'Collaborate with a diverse group of talented professionals committed to excellence.'} />
                        <MeterorCard title="Growth Opportunities" text={'At RADIUS, career advancement is not just a possibility – it’s a priority.opportunities'} />
                        <MeterorCard title="Empowering Work Culture" text={'We believe in empowering employees with autonomy, continuous learning opportunities.'} />

                    </div>
                </div>
    </>
  )
}

export default PerksBenefit