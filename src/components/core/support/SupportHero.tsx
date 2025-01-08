import GradualSpacing from '@/components/ui/gradual-spacing'
import React from 'react'
import Tabs from './Tabs'

const SupportHero = () => {
    return (
        <>
            <div className="py-24 max-w-7xl mx-auto  flex flex-col justify-center items-center gap-6  mb-4">
                <GradualSpacing text='Need Support? We are here to help' className="text-5xl text-black dark:text-white" />
                <GradualSpacing text='Need Support? We are here to help Need Support? We are here to help Need Support? We ' className="text-xl text-black dark:text-white" />

                <div className="pt-12">
                    <Tabs/>
                </div>

            </div>


        </>
    )
}

export default SupportHero