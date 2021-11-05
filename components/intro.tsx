import React, { FC } from 'react'
import { Button } from './button'
import Hamburger from 'hamburger-react'
import Swal from 'sweetalert2'

export const Intro: FC = () => {
  const onClickHandler = () => {
    Swal.fire({
      title: 'Coming Soon!',
      icon: 'info',
      confirmButtonText: 'Cool',
    })
  }

  return (
    <div className="intro">
      <div className="screen" />

      <div className="nav-container">
        <a className="logo" href="">
          <img width="64px" src="/logoMark.svg" alt="" />
        </a>
        <nav>
          <a className="hvr-underline-from-center" href="#about">
            About
          </a>
          <a className="hvr-underline-from-center" href="#collections">
            Collections
          </a>
          <a
            onClick={onClickHandler}
            className="hvr-underline-from-center"
            href="#"
          >
            Contact
          </a>
        </nav>
        <div className="mobile-menu">
          <div className="mobile-menu-toggle">
            <a className="mobile-a" href="#about">
              About
            </a>
            <a className="mobile-a middle" href="#collections">
              Collections
            </a>
            <a className="mobile-a" href="#">
              Contact
            </a>
          </div>
          <Hamburger
            color="#22e2ff"
            direction="left"
            onToggle={(toggled) => {
              if (toggled) {
                document.querySelectorAll<HTMLElement>(
                  '.mobile-menu-toggle'
                )[0].style.top = '0'

                document.querySelectorAll<HTMLElement>(
                  '.intro-content'
                )[0].style.zIndex = '0'
              } else {
                document.querySelectorAll<HTMLElement>(
                  '.mobile-menu-toggle'
                )[0].style.top = '-200px'
                setTimeout(() => {
                  document.querySelectorAll<HTMLElement>(
                    '.intro-content'
                  )[0].style.zIndex = '1'
                }, 500)
              }
            }}
          />
        </div>
      </div>

      <video autoPlay muted loop>
        <source src="/55-face.mp4" type="video/mp4" />
      </video>

      <div className="intro-content">
        <h1>
          Who needs friends?
          <br />
          We have Rustbots!
        </h1>
        <p>
          An advanced NFT collection like you&apos;ve never seen before
          incorporating all aspects of robot society. The bots of Solana have
          arrived! Find your RustBot and join the swarm.
        </p>
        <div className="button-list">
          <Button Title="MAGIC EDEN" Href="#" />
          <Button Title="CONNECT WALLET" Href="#" />
          <div className="button-list-socials">
            <Button Social="twitter" />
            <Button Social="instagram" />
            <Button Social="discord" />
          </div>
        </div>
      </div>
    </div>
  )
}
