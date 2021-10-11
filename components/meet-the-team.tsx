import React, {FC} from 'react'
import dynamic from 'next/dynamic';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Carousel = dynamic(
  () => import ('@brainhubeu/react-carousel'),
  {
  ssr: false
  }
)

export const MeetTheTeam: FC = () => {
  return (
      <div className="meet-the-team">
      <div className="content content mb-8 lg:mb-40">
        <h1>MEET THE TEAM</h1>
        <h1>
          COMING SOON!
        </h1>
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
{/* 
      <Carousel
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
      >
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="text-2xl font-bold mb-2 mt-2">Pedro Lopes</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.</p>
        </div>
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="text-2xl font-bold mb-2 mt-2">Ricard Ribeiro</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.</p>
        </div>
        <div className="flex flex-col justify-center w-96">
          <div className="team-image"></div>
          <h3 className="text-2xl font-bold mb-2 mt-2">Xico</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.</p>
        </div>
      </Carousel> */}


        
  </div>
  )
}
