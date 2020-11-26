/* 
* <license header>
*/

import React from 'react'
import { Provider, defaultTheme, Button } from '@adobe/react-spectrum'

function App (props) {
  console.log('runtime object:', props.runtime)
  console.log('ims object:', props.ims)

  // use exc runtime event handlers
  // respond to configuration change events (e.g. user switches org)
  props.runtime.on('configuration', ({ imsOrg, imsToken, locale }) => {
    console.log('configuration change', { imsOrg, imsToken, locale })
  })
  // respond to history change events
  props.runtime.on('history', ({ type, path }) => {
    console.log('history change', { type, path })
  })

  // TypeScript
  const label: string = 'A Button';

  return (
      <Provider theme={defaultTheme} colorScheme={`light`}>
        <Button variant="cta">{label}</Button>
      </Provider>
  );
}

export default App
