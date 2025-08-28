import React from 'react'
import Bookonline from './Book-online'
import { bookonline } from '../../../data/bookonline'

export default function page() {
  return (
    <div >
        <Bookonline data={bookonline} />
    </div>
  )
}
