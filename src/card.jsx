function Card() {
  const cards = [];
  for (let i = 0; i < 20; i++) {
    cards.push(
      <div className="card">
        <div className="card-image">
          <figure className="image is-2by1">
            <img src="./src/img/ej.jpg" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title ">
                Este es un ejemplo de un titulo en el blog, sigo escribiendo
                xxd, quiero ver el wrap
              </p>
              <p className="subtitle is-6">Autor: Angel Aldaz</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a href="#">Ver mas...</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    );
  }
  return cards;
}

export default Card;
