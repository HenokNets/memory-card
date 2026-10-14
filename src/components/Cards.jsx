import "./Cards.css";
export default function Cards({ images }) {
  return (
    <section className="cards-grid">
      {images.map((image) => {
        return (
          <div className="card" key={image.id}>
            <img onClick={} src={image.images.sm} width="150"></img>

            <p>{image.name}</p>
          </div>
        );
      })}
    </section>
  );
}
