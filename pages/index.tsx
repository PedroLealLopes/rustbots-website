import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'
import {Partners} from '../components/partners'
import {MeetTheTeam} from '../components/meet-the-team'
import {Intro} from '../components/intro'
import {Footer} from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className="container py-2 pt-0 pb-0">
      <Intro />
      <GetThemAll />
      <MeetTheTeam />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
