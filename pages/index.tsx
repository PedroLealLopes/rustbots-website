import type { NextPage } from 'next'
import { GetThemAll } from '../components/get-them-all'
import { Partners } from '../components/partners'
import { MeetTheTeam } from '../components/meet-the-team'
import { Roadmap } from '../components/roadmap'
import { Intro } from '../components/intro'
import { Footer } from '../components/footer'
import { MeetTheFam } from '../components/meet-the-fam'
import { Charity } from '../components/charity'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container py-2 pt-0 pb-0">
      <Head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/logoMark.svg" />
        <title>Rustbots | Home 🤖</title>
        <meta name="title" content="Rustbots | Home 🤖" />
        <meta
          name="description"
          content="An advanced NFT collection like you've never seen before incorporating all aspects of robot society. The bots of Solana have arrived! Find your RustBot and join the swarm."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rustbots.io/" />
        <meta property="og:title" content="Rustbots | Home 🤖" />
        <meta
          property="og:description"
          content="An advanced NFT collection like you've never seen before incorporating all aspects of robot society. The bots of Solana have arrived! Find your RustBot and join the swarm."
        />
        <meta property="og:image" content="/RUSTBOTS-05.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rustbots.io/" />
        <meta property="twitter:title" content="Rustbots | Home 🤖" />
        <meta
          property="twitter:description"
          content="An advanced NFT collection like you've never seen before incorporating all aspects of robot society. The bots of Solana have arrived! Find your RustBot and join the swarm."
        />
        <meta property="twitter:image" content="/RUSTBOTS-05.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rustbots.io/" />
        <meta property="og:title" content="Rustbots | Home 🤖" />
        <meta
          property="og:description"
          content="An advanced NFT collection like you've never seen before incorporating all aspects of robot society. The bots of Solana have arrived! Find your RustBot and join the swarm."
        />
        <meta property="og:image" content="/RUSTBOTS-05.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rustbots.io/" />
        <meta property="twitter:title" content="Rustbots | Home 🤖" />
        <meta
          property="twitter:description"
          content="An advanced NFT collection like you've never seen before incorporating all aspects of robot society. The bots of Solana have arrived! Find your RustBot and join the swarm."
        />
        <meta property="twitter:image" content="/RUSTBOTS-05.png" />
      </Head>
      <Intro />
      <GetThemAll />
      <MeetTheFam />
      <Roadmap />
      <Charity />
      <MeetTheTeam />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
