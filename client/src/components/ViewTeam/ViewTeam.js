import React from 'react'

import Channels from './Channels'
import Teams from './Teams'
import Header from './Header'
import Input from './Input'
import Messages from './Messages'
import AppLayout from './AppLayout'

export default () => (

    <AppLayout>
        <Teams>Teams</Teams>
        <Channels>Channels</Channels>
        <Header>Header</Header>
            <Messages>
    <ul class="message-list">
      <li></li>
      <li></li>
    </ul>
  </Messages>

    </AppLayout>
    
  <Input>
    <input type="text" placeholder="CSS Grid Layout Module"/>
  </Input>
) 