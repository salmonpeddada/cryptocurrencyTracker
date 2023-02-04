// Write your code he
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)
    this.setState({cryptocurrenciesList: data, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList, isLoading} = this.state
    console.log(isLoading)
    return (
      <>
        <div className="bg-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <div className="bg-container">
              <h1>Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
              <div className="table">
                <div className="table-rows">
                  <h1>Coin Type</h1>
                  <div className="right-rows">
                    <h1>USD</h1>
                    <h1>EURO</h1>
                  </div>
                </div>
                <ul>
                  {cryptocurrenciesList.map(each => (
                    <CryptocurrenyItem key={each.id} item={each} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default CryptocurrencyTracker
