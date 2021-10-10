import type { NextPage } from 'next'
import {GetThemAll} from '../components/get-them-all'
import {Partners} from '../components/partners'
import {MeetTheTeam} from '../components/meet-the-team'
import {Roadmap} from '../components/roadmap'
import {Intro} from '../components/intro'
import {Footer} from '../components/footer'
import { MeetTheFam } from '../components/meet-the-fam'
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div className="container py-2 pt-0 pb-0">
      <Head>
        <title>RustBots Home 🤖</title>
        <meta property="og:title" content="RustBots Home 🤖" key="title" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      </Head>
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
