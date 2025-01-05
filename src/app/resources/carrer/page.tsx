"use client"
import CarrerHero from '@/components/core/resources/carrer/Hero'
import JobList from '@/components/core/resources/carrer/JobList'
import JobProcess from '@/components/core/resources/carrer/JobProcess'
import OurEthics from '@/components/core/resources/carrer/OurEthics'
import PerksBenefit from '@/components/core/resources/carrer/PerksBenefit'


const CarrerPage = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <CarrerHero />
                <JobList /> 
                <PerksBenefit /> 
                <OurEthics />
                <JobProcess /> 
            </div>
        </>
    )
}

export default CarrerPage