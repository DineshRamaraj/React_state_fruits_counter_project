// Write your code here
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {mangoes: 0, bananas: 0}

  mango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
    }))
  }

  banana = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="main-image-container">
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div className="button-container">
                <button type="button" className="button" onClick={this.mango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button type="button" className="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyComponent
