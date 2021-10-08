import React, {FC} from 'react'
import { Button } from './button'

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="content">
        <h1>THATS ALL FOLKS!</h1>
        
        <div className="button-list" style={{ width: "100%" }}>
          <Button Title="MAGIC EDEN" Href="#" />
          <Button Title="CONNECT WALLET"  Href="#"/>
          <div className="button-list-socials">
            <Button Social="twitter" />
            <Button Social="instagram" />
            <Button Social="discord" />
          </div>
        </div>
      </div>
      <div className="footer-image" />
    </div>
  )
}


