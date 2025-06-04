// Homepage with a hero image and welcome message

const HomePage = () => {
  return (
    <div className="text-center mt-4">
      <img
        src="/images/recipe-banner.jpg" // must match your public/images/ file
        alt="Banner"
        className="img-fluid mb-4"
        style={{ maxHeight: '300px' }}
      />
      <h1>Welcome to the Recipe Book</h1>
      <p className="lead">Your place to save and share delicious ideas 🍲</p>
    </div>
  );
};

export default HomePage;
