import "./Cards.css";
export default function Cards({ images, handleClick }) {
  return (
    <section className="cards-grid">
      {images.map((image) => {
        return (
          <div className="card" key={image.id}>
            <img onClick={handleClick} src={image.images.sm} alt="image.name" width="150" id={image.id}></img>

            <p>{image.name}</p>
          </div>
        );
      })}
    </section>
  );
}
