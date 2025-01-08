import NumberTicker from '@/components/ui/number-ticker'
import Image from 'next/image'
import React from 'react'

const stats = [
  {
    id: 1,
    title: "Uptime Reliability",
    value: 99.99,
    suffix: "%",
    description: "Tailored for Enterprises to build enduring customer relationships.",
  },
  {
    id: 2,
    title: "Integrated Solutions",
    value: 30,
    suffix: "+",
    description: "Years of Technology Presence.",
  },
  {
    id: 3,
    title: "Multichannel Support",
    value: 24,
    suffix: "x7",
    description: "Around-the-clock assistance for enterprises.",
  },
  {
    id: 4,
    title: "Customers Served",
    value: 10,
    suffix: "+",
    description: "Building trust with organizations worldwide.",
  },
];


const Device = () => {
  return (
    <> 
      <div className='text-center'>
        <h1 className="uppercase text-xl text-orange-500">Stastics</h1>
        <h2 className="text-4xl capitalize font-semibold">Some marketting line will be there</h2>

        <div className="flex justify-between items-center">

          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" className="dark:hidden w-[272px] h-[572px]" alt="imagesd" width={500} height={500} />
              <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt="imagesd" width={500} height={500} />

            </div>
          </div>

          <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-bgLight dark:bg-bgDark text-textLight dark:text-darkText rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-4 h-72 border-gray-900"
              >

                <div className="flex items-baseline space-x-1">
                  <NumberTicker
                    value={stat.value}
                    direction="up"
                    delay={0}
                    decimalPlaces={stat.suffix === "%" ? 2 : 0}
                    className="text-4xl font-bold text-orange-500"
                  />
                  <span className="text-4xl font-semibold text-orange-500">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{stat.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Device