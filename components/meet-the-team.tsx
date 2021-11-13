import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
})

const people = [
  {
    name: 'Soyco',
    role: 'Founder',
    imageUrl: '/Soy.png',
  },
  {
    name: 'Sam',
    role: 'Creative Director',
    imageUrl: '/Sam.png',
    twitterUrl: 'https://twitter.com/wackkysam',
  },
  {
    name: 'Nikolay',
    role: '3D Artist, Animator',
    imageUrl: '/Nik.png',
    twitterUrl: 'https://twitter.com/NikolajTrynin',
  },
  {
    name: 'All',
    role: '3D Artist',
    imageUrl: '/Alyona - All.png',
    twitterUrl: 'https://www.artstation.com/ll_simply',
  },
  {
    name: 'Artyom',
    role: '3D Artist',
    imageUrl: '/Artyom.png',
    twitterUrl: 'https://twitter.com/ArtemTutubalin',
  },
  {
    name: 'Igor',
    role: '3D Artist',
    imageUrl: '/Igor.png',
    twitterUrl: 'https://www.instagram.com/korepanoff25/?utm_medium=copy_link',
  },
  {
    name: 'Kokoro ',
    role: '3D Artist',
    imageUrl: '/Alex - 3D Artist.png',
    twitterUrl: 'https://twitter.com/KokoroKhartikov',
  },
  {
    name: 'Xico',
    role: 'Advisor',
    imageUrl: '/Xico.png',
    twitterUrl: 'https://twitter.com/XicoSR',
  },
  {
    name: 'Luckdude',
    role: 'Web Developer',
    imageUrl: '/luckdude.png',
    twitterUrl: 'https://twitter.com/devbyLuckdude',
  },
  {
    name: 'RickyPox',
    role: 'Web Developer',
    imageUrl: '/RickyPox.png',
    twitterUrl: 'https://twitter.com/NotRickyPox',
  },
]

export const MeetTheTeam: FC = () => {
  return (
    <div className="meet-the-team">
      <div className="mb-8 content lg:mb-40">
        <h1>MEET THE TEAM</h1>
      </div>

      {/* <Carousel
          plugins={[
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
            numberOfSlides: 2,
            },
          },
        ]}   
      >
        <div className="flex justify-center w-full">
          <div className="team-image"></div>
          <h2>Name</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.</p>
        </div>
        <div className="flex justify-center w-full">
          <div className="team-image"></div>
          <h2>Name</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.</p>
        </div>
      </Carousel> */}

      {/* <Carousel
        offset={1}
        plugins={[
          'centered',
          'infinite',
          'fastSwipe',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2,
            },
          },
        ]}
        breakpoints={{
          1024: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
      >
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="mt-2 mb-2 text-2xl font-bold">Pedro Lopes</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            praesentium ab mollitia earum repellat doloremque eum! Amet possimus
            dolore aut animi perferendis impedit, quaerat nemo temporibus cum
            tenetur aspernatur quo.
          </p>
        </div>
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="mt-2 mb-2 text-2xl font-bold">Ricard Ribeiro</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            praesentium ab mollitia earum repellat doloremque eum! Amet possimus
            dolore aut animi perferendis impedit, quaerat nemo temporibus cum
            tenetur aspernatur quo.
          </p>
        </div>
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="mt-2 mb-2 text-2xl font-bold">Xico</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            praesentium ab mollitia earum repellat doloremque eum! Amet possimus
            dolore aut animi perferendis impedit, quaerat nemo temporibus cum
            tenetur aspernatur quo.
          </p>
        </div>
      </Carousel> */}
      <div className="">
        <div className="mx-auto ">
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="px-6 py-10 text-center bg-gray-800 rounded-lg xl:px-10 xl:text-left"
                >
                  <div className="space-y-6 xl:space-y-10">
                    <img
                      className="w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3 className="text-white">{person.name}</h3>
                        <p className="text-indigo-400">{person.role}</p>
                      </div>

                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a
                            href={person.twitterUrl}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
