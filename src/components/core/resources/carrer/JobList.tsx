import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'

const JobList = () => {
    const jobs = [
        {
            id: '1',
            title: 'Software Engineer',
            level: 'Freshers',
            location: 'San Francisco, CA',
        },
        {
            id: '2',
            title: 'Software Engineer',
            level: 'Freshers',
            location: 'San Francisco, CA',
        },
        {
            id: '3',
            title: 'Software Engineer',
            level: 'Freshers',
            location: 'San Francisco, CA',
        },
        {
            id: '4',
            title: 'Software Engineer',
            level: 'Freshers',
            location: 'San Francisco, CA',
        }
    ]
  return (
   <>
   
   <div className="flex flex-col justify-center items-center md:my-24 space-y-4">
                    <h1 className='uppercase text-xl text-orange-500'>open Roles</h1>
                    <h2 className='text-4xl capitalize font-semibold'> we are hiring </h2>
                    <p className='text-lg text-center'>Our customers entrust us with the enormous responsibility of helping to run their livelihoods. We work tirelessly to be worthy of that trust. Here’s a partial list of things that keep us up at night.</p>
                    <div className='w-full'>
                        {jobs.map((job, index) => {
                            return (
                                <div
                                    key={job.id || index}
                                    className='border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 text-black dark:text-white flex justify-between items-center w-full my-4'>
                                    <h3 className='text-lg'>{job.title}</h3>
                                    <h4 className='text-md'>{job.level}</h4>
                                    <h3 className='text-md'>{job.location}</h3>
                                    <ShimmerButton shimmerColor="#f76716" children="Apply Now" className='p-2 text-white dark:text-white' />
                                </div>
                            )
                        })}
                    </div>
                    <button
                        type="button"
                        className="text-white dark:text-black bg-orange-400 hover:bg-orange-500  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                        See All Jobs
                    </button>
                </div>

   </>
  )
}

export default JobList