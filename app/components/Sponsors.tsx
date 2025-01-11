function Sponsors() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 justify-center bg-grayishBlue my-8">
      <span className="text-black text-lg text-wrap text-center md:text-3xl font-bold my-4">
        Join the thousands of teams doing smart work.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 mx-4 justify-center">
        <img src="/public/Vector-sportify.png" alt="Spotify" className="" />
        <img src="/public/microsoft.png" alt="Microsoft" className="" />
        <img src="/public/spacex.png" alt="Space-x" className="" />
        <img src="/public/piggyvest.png" alt="PiggyVest" className="" />
        <img src="/public/opera.png" alt="Opera browser" className="" />
      </div>
    </div>
  );
}

export default Sponsors;
