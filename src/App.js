import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  toggleContent = () => this.setState(pre => ({showContent: !pre.showContent}))

  toggleLeftNavbar = () =>
    this.setState(pre => ({showLeftNavbar: !pre.showLeftNavbar}))

  toggleRightNavbar = () =>
    this.setState(pre => ({showRightNavbar: !pre.showRightNavbar}))

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.toggleContent,
            onToggleShowLeftNavbar: this.toggleLeftNavbar,
            onToggleShowRightNavbar: this.toggleRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
