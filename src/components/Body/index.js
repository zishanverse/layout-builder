import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Header = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const contentReturn = () => (
        <div className="content-card">
          <h1 className="head">Content</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const rightReturn = () => (
        <div className="nav-card">
          <h1 className="menu">Right Navbar Menu</h1>
          <div className="ad-card">Ad 1</div>
          <div className="ad-card">Ad 2</div>
        </div>
      )

      const leftReturn = () => (
        <div className="nav-card">
          <h1 className="menu">Left Navbar Menu</h1>
          <ul className="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      return (
        <div className="body">
          {showLeftNavbar && leftReturn()}
          {showContent && contentReturn()}
          {showRightNavbar && rightReturn()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Header
