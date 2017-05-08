import React from 'react'
import ReactDOM from 'react-dom'
import App from'./components/app.jsx'
import { AppContainer } from 'react-hot-loader'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app.jsx', () => {
    render(App)
  });
}
