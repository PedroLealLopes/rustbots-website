import React, {FC, useState} from 'react'

import dynamic from 'next/dynamic';

const Carousel = dynamic(
  () => import ('@brainhubeu/react-carousel'),
  {
  ssr: false
  }
)

import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const imagesTest = ["/bot00.png", "/bot01.png", "/bot02.png", "/bot03.png", "/bot04.png"];

export const MeetTheFam: FC = () => {
  const [current, setCurrent] = useState(0)

  
  const onChange = (value) => {
    if(value === -1)
      value = 4
    if(value === 5)
      value = 0
    setCurrent(value)
  }

  const botDescription = (val) => {
    switch (val) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">CanBot v1.0 - Personal Assistant - Sebastion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et dolore quas accusamus, esse placeat assumenda distinctio. Odio distinctio a quisquam, voluptatem sint, voluptas pariatur inventore, provident dolorem voluptatibus repellat.</p>
          </div>
        )
        break;
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">CanBot v2.0 - Personal Assistant - Sebastion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et dolore quas accusamus, esse placeat assumenda distinctio. Odio distinctio a quisquam, voluptatem sint, voluptas pariatur inventore, provident dolorem voluptatibus repellat.</p>
          </div>
        )
        break;
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">CanBot v3.0 - Personal Assistant - Sebastion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et dolore quas accusamus, esse placeat assumenda distinctio. Odio distinctio a quisquam, voluptatem sint, voluptas pariatur inventore, provident dolorem voluptatibus repellat.</p>
          </div>
        )
        break;
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">CanBot v4.0 - Personal Assistant - Sebastion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et dolore quas accusamus, esse placeat assumenda distinctio. Odio distinctio a quisquam, voluptatem sint, voluptas pariatur inventore, provident dolorem voluptatibus repellat.</p>
          </div>
        )
        break;
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold mb-2">CanBot v5.0 - Personal Assistant - Sebastion</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias et dolore quas accusamus, esse placeat assumenda distinctio. Odio distinctio a quisquam, voluptatem sint, voluptas pariatur inventore, provident dolorem voluptatibus repellat.</p>
          </div>
        )
        break;
    }
  }

  return (
    <div className="meet-the-fam">
      <div className="content mb-8 lg:mb-40">
        <h1>MEET THE FAM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laboriosam fugit error obcaecati dicta officiis, fugiat est pariatur corrupti vitae laborum voluptas vel perferendis, rem tempore incidunt aut, autem culpa!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium ab mollitia earum repellat doloremque eum! Amet possimus dolore aut animi perferendis impedit, quaerat nemo temporibus cum tenetur aspernatur quo.
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
                  numberOfSlides: 1
                }
              },
            ]
          }
        }}
      >
        {
          imagesTest.map((img, index) => {
            return (
              <img key={index} src={img} style={{ width: "500px" }} alt="" />
            )
          })
        }
      </Carousel>
        
      
      <div className="w-full sm:w-1/2">
        {botDescription(current)}
      </div>

      
    </div>
  )
}
