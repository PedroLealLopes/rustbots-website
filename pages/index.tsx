import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container py-2 bg-primary-400 intro">
      
    <video autoPlay muted loop id="myVideo">
      <source src="/55-face.mp4" type="video/mp4" />
    </video>

    </div>
  )
}

export default Home
  