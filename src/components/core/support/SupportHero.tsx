import GradualSpacing from '@/components/ui/gradual-spacing'
import WorldMap from '@/components/ui/world-map'
import React from 'react'
import Tabs from './Tabs'

const dots = [
    {
        start: {
            lat: 64.2008,
            lng: -149.4937,
        },
        end: {
            lat: 34.0522,
            lng: -118.2437,
        },
    },
    {
        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
        start: { lat: 51.5074, lng: -0.1278 }, // London
        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
]

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
            <WorldMap dots={dots} lineColor="#F97316" />


        </>
    )
}

export default SupportHero