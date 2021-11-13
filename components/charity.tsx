import React, { FC } from 'react'

export const Charity: FC = () => {
  return (
    <div id="about" className="Charity">
      <div className="content Ucc">
        <h1>Charity</h1>
        <h2>Universidad Cooperativa de Colombia</h2>
        <p>
          We are super excited to announce that we will partnering with
          Universidad Cooperativa de Colombia
          <a className="ucc-link" href="https://twitter.com/UniCoopSedeCali">
            {' '}
            @UniCoopSedeCali
          </a>{' '}
          to fund a tech outreach program in marginalized communities in the
          city of Cali, Colombia. We will use a percentage of our proceeds to
          fund this program directly 🤖!
        </p>
      </div>
      <div className="ucc-image" />
    </div>
  )
}
