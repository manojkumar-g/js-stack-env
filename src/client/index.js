import React from 'react'
import ReactDOM from 'react-dom'
import App from'../shared/app.jsx'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

const render = (Component) => {
  ReactDOM.render(
    wrapApp(App),
    document.getElementById('root')
  )
}

const wrapApp = (AppComponent) =>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>

render(App);

if (module.hot) {
  module.hot.accept('../shared/app.jsx', () => {
    render(App)
  });
}
