import VideosList from "../VideosList/VideosList";

const Home = () => {
  return (
    <section
      id="home"
      className="home-container flex direction--column justify--center align-center"
    >
      <h1>Videos List</h1>

      <VideosList />
    </section>
  );
};

export default Home;
