// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  return (
    <li className="items">
      <div className="logo-container">
        <img
          src={item.currency_logo}
          alt={item.currency_name}
          className="logo"
        />
        <p>{item.currency_name}</p>
      </div>

      <div className="right-items">
        <p>{item.usd_value}</p>
        <p>{item.euro_value}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
