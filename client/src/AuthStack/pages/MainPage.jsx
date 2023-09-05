import React from 'react'
import FeatureOne from '../widgets/FeatureOne'
import { Dialog } from '@headlessui/react'
import { UserGroupIcon, UserIcon, StarIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
function MainPage() {
    const features = [


        {
          name: 'Interact with all those that have come across Activate Work.',
          description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
          icon: UserIcon,
        },
        {
          name: 'Showcase past projects or current ones!',
          description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
          icon: StarIcon,
        },
        {
          name: 'Resume Reviews? Techinical Interview Prep?',
          description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
          icon: UserGroupIcon,
        },
        {
          name: 'Contact Staff or Coaches for help on things.',
          description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
          icon: RectangleGroupIcon,
        },
      ]
  return (
    <div className='flex flex-col h-screen'>
        
       <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Presenting to you{' '}
              <a href="#https://github.com/whyyy1/finalProject" className="font-semibold text-indigo-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center p-5 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect Profession 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/login"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
              
            </div>
            
          </div>
        </div>
        {/* <dl className="carousel w-full bg-slate-600">
          {features.map((feature,index) => (
            <div key={feature.name} id={`slide${index}`} className=" carousel-item w-screen ">
              <div className='bg-red-400  w-full' > 
              <dt className="text-base font-semibold leading-7    rounded text-center">
                <div className=" absolute  top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-activate-2">
                  <feature.icon className="h-6 w-6 text-black " aria-hidden="true" />
                </div>
                {feature.name}
                
              </dt>
              <dd className="mt-2 text-lg leading-7 bg-activate-8 bg-opacity-75  rounded p-3 text-center text-black ">{feature.description}</dd>
              
              
                <div className='flex justify-between'>
                <a href={`#slide${index-1}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${index+1}`} className="btn btn-circle">❯</a>
                </div>
                
                </div> 
    
            </div>
          ))}
        </dl>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div> */}
        

    
        
    </div>
  )
}

export default MainPage


//  <FeatureOne image={'data:image/jpeg;base64,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'} 
//         imageDes={'TeamWork'} bodyDesc={'Join the platform to keep up to date with current events'} btnTitle={'Sign Up'}/>
//          <FeatureOne image={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F822%2F225%2Foriginal%2Fgroup-of-business-people-showing-teamwork-free-vector.jpg&tbnid=QsYjWnTxOq8uwM&vet=12ahUKEwjmrZum-ImBAxUtEN4AHcPrCUcQMyg1egUIARDrAQ..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F1822225-group-of-business-people-showing-teamwork&docid=fTIoFK7U9UkPuM&w=6250&h=6250&q=teamwork%20image%20free&client=firefox-b-1-d&ved=2ahUKEwjmrZum-ImBAxUtEN4AHcPrCUcQMyg1egUIARDrAQ'} 
//          imageDes={'Community'} bodyDesc={'Be apart of the community being there to help out anyone'} btnTitle={'Sign Up'}/>