const Header = ({ image, title, description }) => (
  <header>
    {image && <img src={image} alt={title} />}
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </header>
)

export default Header
