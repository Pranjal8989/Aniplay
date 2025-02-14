export const Home = () => {
  return (
    <>
      {[...Array(100)].map((_, i) => (
        <h1 key={i}>Home page</h1>
      ))}
    </>
  );
};
