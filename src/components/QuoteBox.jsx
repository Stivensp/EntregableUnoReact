import "./styles/QuoteBox.css";
const QuoteBox = ({ quote, handleChangeQuote }) => {
    console.log(quote)
  return (
    <article className="quotebox">
        <h1 className="quotebox___tittle">FORTUNE COOKIES</h1>
        <button className="button" onClick={handleChangeQuote}>Try my luck</button>
        <img className="img" src="\images\Rectangle 2.png" alt="" />
        <div className="container"><p className="ps">{quote.phrase}</p>   </div>
        <div className="autor">{quote.author}</div>
    </article>
  )
}

export default QuoteBox