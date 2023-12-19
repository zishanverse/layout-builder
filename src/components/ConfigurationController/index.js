import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      return (
        <div className="controller-container">
          <h1 className="layout">Layout</h1>
          <ul className="list">
            <li className="list-item">
              <input
                id="content"
                type="checkbox"
                onClick={() => onToggleShowContent()}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="list-item">
              <input
                id="leftnav"
                type="checkbox"
                onClick={() => onToggleShowLeftNavbar()}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftnav" className="label">
                Left Navbar
              </label>
            </li>
            <li className="list-item">
              <input
                id="rightnav"
                type="checkbox"
                onClick={() => onToggleShowRightNavbar()}
                checked={showRightNavbar}
              />
              <label htmlFor="rightnav" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
