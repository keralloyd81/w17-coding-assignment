// Bootstrap header image with overlayed text
function Header() {
  return (
    <header
      className="text-center py-5"
      style={{
        background: "url('/images/foodHeader.jpeg') center/cover no-repeat",
        height: '400px',
        position: 'relative',
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="p-4 bg-white bg-opacity-75 rounded shadow">
          <h1 className="display-2 fw-bold text-dark">
            Discover All of Mom's Tasty Recipes
          </h1>
          <p className="lead fs-3 fw-semibold text-dark">
            Just like the ones you had as a kid
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
