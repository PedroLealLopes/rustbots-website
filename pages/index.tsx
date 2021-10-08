import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'
import {Partners} from '../components/partners'
import {MeetTheTeam} from '../components/meet-the-team'
import {Roadmap} from '../components/roadmap'
import {Intro} from '../components/intro'
import {Footer} from '../components/footer'
import { MeetTheFam } from '../components/meet-the-fam'

const Home: NextPage = () => {
  return (
    <div className="container py-2 pt-0 pb-0">
      <Intro />
      <GetThemAll />
      <MeetTheFam />
      <Roadmap />
      <MeetTheTeam />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
