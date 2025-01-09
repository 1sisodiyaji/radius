import DotPattern from '@/components/ui/dot-pattern';
import Image from 'next/image';
const cards = [
  {
    id: 1,
    image: 'https://radius-ois.ai/wp-content/uploads/2023/10/call-back-3.png',
    title: 'Call Backs',
    description: 'Transform your customer engagement strategy from multichannel to a cohesive omnichannel experience that spans Voice, Chat, Email, Video, Social Media, & more'
  },
  {
    id: 2,
    image: 'https://radius-ois.ai/wp-content/uploads/2023/10/dashboard.png',
    title: 'Custom Wallboard',
    description: 'Transform customer service into team effort with dashboards that highlight agent and call center statistics.'
  }
]

const cards2 = [
  {
    id: 1,
    image: 'https://radius-ois.ai/wp-content/uploads/2023/10/ivr.png',
    title: 'IVR',
    description: 'Effortlessly create the Interactive Voice Response based on DTMF'
  },
  {
    id: 2,
    image: 'https://radius-ois.ai/wp-content/uploads/2023/10/control-system-1.png',
    title: 'Quality Management',
    description: 'Monitor agent performance through analytics & quality assurance scorecards, both at the individual and team level.'
  },
  {
    id: 3,
    image: 'https://radius-ois.ai/wp-content/uploads/2023/10/online-business.png',
    title: 'Real Time Coaching',
    description: 'Provide supervisors with capabilities like Barge-in, whisper, so that they can take over whenever required.'
  },

];

const Features = () => {

  return (
    <>
      <div className="relative py-12 mx-auto">
        <DotPattern className="z-0 opacity-80" />
        <div className='z-10 relative'>
          <h1 className='text-2xl font-semibold text-center'>Designed for both Agents and Customer</h1>
          <div className="flex md:flex-row flex-col justify-center items-center space-x-4 mb-6">

            {cards.map((card) => (
              <div
                key={card.id}
                className="block md:w-1/2 w-full min-h-80 p-6 rounded-xl cursor-grabbing"
              >
                <Image src={card.image} width={500} height={500} alt={card.title} className="w-32 h-32 mx-auto" />
                <h1 className="font-semibold text-2xl mt-10">{card.title}</h1>
                <p className="font-normal text-md mt-2">{card.description}</p>

              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center">
            {cards2.map((card) => (
              <div key={card.id} className="block max-w-sm min-h-80 p-6 rounded-xl cursor-grabbing">

                <Image src={card.image} width={500} height={500} alt={card.title} className="w-32 h-32 mx-auto hover:scale-105" />
                <h1 className="font-semibold text-2xl mt-10">{card.title}</h1>
                <p className="font-normal text-md mt-2">{card.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
