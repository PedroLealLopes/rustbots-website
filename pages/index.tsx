import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'

const Home: NextPage = () => {
  return (
    <div className="container py-2 bg-primary-400 intro pt-0">
        
      {/* <video autoPlay muted loop id="myVideo">
        <source src="/55-face.mp4" type="video/mp4" />
      </video> */}


    <GetThemAll />
    </div>
  )
}

export default Home
