import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'
import {Partners} from '../components/partners'
import {MeetTheTeam} from '../components/meet-the-team'
import {Intro} from '../components/intro'

const Home: NextPage = () => {
  return (
    <div className="container py-2 pt-0">
      <Intro />
      <GetThemAll />
      <MeetTheTeam />
      <Partners />
    </div>
  )
}

export default Home
