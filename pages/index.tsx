import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'
import {Partners} from '../components/partners'
import {MeetTheTeam} from '../components/meet-the-team'
import { Footer } from '../components/footer'
import { Roadmap } from '../components/roadmap'

const Home: NextPage = () => {
  return (
    <div className="container py-0 bg-primary-400 intro pt-0">
        
      {/* <video autoPlay muted loop id="myVideo">
        <source src="/55-face.mp4" type="video/mp4" />
      </video> */}


    <GetThemAll />
    <Roadmap />
    <MeetTheTeam />
    <Partners />
    <Footer />  
    </div>
  )
}

export default Home
