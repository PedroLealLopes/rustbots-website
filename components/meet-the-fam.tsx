// @ts-nocheck
import React, { FC, useState } from 'react'

import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
})

import { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const imagesTest = [
  '/bot00.png',
  '/bot01.png',
  '/bot02.png',
  '/bot03.png',
  '/bot04.png',
]

export const MeetTheFam: FC = () => {
  const [current, setCurrent] = useState(0)

  const onChange = (value) => {
    if (value === -1) value = 4
    if (value === 5) value = 0
    setCurrent(value)
  }

  const botDescription = (val) => {
    switch (val) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">
              VectorBot v1.0 Civilian Version - Sparky
            </h3>
            <p>
              Sparky was initially designed to be used by the government on
              secret reconnaissance missions, but times changed and so did
              Sparky’s purpose… or did it!. Sparky was redesigned and
              manufactured by DSDC, a defense contractor turned technology
              giant, with the goal of meeting people’s everyday needs. From
              walking your dog to using his surveillance capabilities to be on
              the lookout for intruders, you’ll be sure to feel safe around
              Sparky! (Or scared... we’re still figuring that part out.)
            </p>
          </div>
        )
        break
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">
              FunBot v1.0 StandUp Comedian Bur
            </h3>
            <p>
              Originally designed to assist people in practicing their social
              skills, it was found that Burr had a bug in his humor settings.
              The bug made the bot useless for practice as it would quickly blow
              your self-esteem. The design’s failure gave the creator of FunBots
              a new idea… What if they developed bots for entertainment
              purposes? Soon enough, FunBots began to dominate the stand-up
              comedy world, one of them even got its own talk show called
              &quot;Every Night with Billy the Bot!&quot;
            </p>
          </div>
        )
        break
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">
              CanBot v1.0 Personal Assistant Sebastian
            </h3>
            <p>
              Sebastian is a virtual assistant that takes service to a whole new
              level of satisfaction. CanBots were first introduced to the public
              by SAYA in 2051. Their advanced systems allow them to adapt and
              connect to any smart device, and a set of peripherals allows
              sebastian to turn any home into a smart home with a simple plugin.
              CanBots have the latest infotainment technology, state of the art
              house protection protocols, and an incredible A.I. powered
              personality that adapts to their owners; this personality has
              found itself popular as CanBots have amazing babysitting
              capabilities.
            </p>
          </div>
        )
        break
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">
              HeavyBot v1.0 Industrial Model Tony
            </h3>
            <p>
              Designed and developed by Perez Manufacturing Company, these
              HeavyBots were made to operate in large industries such as
              construction, oil and gas, nuclear, and more. Tony’s design allows
              him to withstand rough environments and overcome extremely high or
              low temperatures. He can even operate in water at depths of up to
              1,800 meters. ‍Every HeavyBot is plated with a very special kind
              of metal, an alloy of the rarest of metals, a material that is
              only synthesized by Perez Manufacturing. Despite their heavy
              weight, HeavyBots are easily maneuverable thanks to their four
              legs, which allow them to adjust to any type of terrain
              automatically!
            </p>
          </div>
        )
        break
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">
              OctoBot v1.0 Emotional Support Angelica
            </h3>
            <p>
              Angelica was designed to function as a healthcare bot. Her primary
              focus is to help people with mental disorders, from anxiety and
              depression, to schizophrenia and psychosis. She scans and monitors
              her owner’s health using a variety of onboard tools to make sure
              their body is operating properly at all times. OctoBot has
              especially found significant success in assisting people with
              epilepsy, as OctoBots can be at their owners side at all times to
              provide first aid and to contact emergency response units when
              needed.
            </p>
          </div>
        )
        break
    }
  }

  return (
    <div id="collections" className="meet-the-fam">
      <div className="content mb-8 flex justify-center items-center flex-col lg:mb-40">
        <h1>MEET THE FAM</h1>
        <p className="w-1/2">
          Over the years many RustBots have been introduced to the public by
          various corporations, government agencies, and even celebrities… join
          the movement and try to collect them all!
        </p>
      </div>

      <Carousel
        value={current}
        onChange={onChange}
        plugins={[
          'centered',
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
        {imagesTest.map((img, index) => {
          return <img key={index} src={img} style={{ width: '500px' }} alt="" />
        })}
      </Carousel>

      <div className="w-full sm:w-1/2">{botDescription(current)}</div>
    </div>
  )
}
