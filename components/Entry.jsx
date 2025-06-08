
export default function Entry(props) {
  return(
    <>
    <article className="article-entry">
      <div className="container-picture">
        <img src={props.img.src} className="picture" alt={props.img.alt}/>

      </div>

      <div className="details-wrapper">
        <div className="wrapper-destination">
          <div class="wrapper-location">
            <span className="material-symbols-outlined map-symbol symbol">location_on</span>
            <p className="country">{props.title}</p>
          </div>
          <a href={props.googleMapsLink} className="send-map">View on Google Maps</a>
        </div>

        <div className="wrapper-description">
          <h2 className="tourist-routes">{props.country}</h2>
          <p className="date">{props.dates}</p>
          <p className="text-rote">{props.text}</p>
        </div>

      </div>
    </article>
    <p className="line"></p>
    <br></br>
  </>
  )
}