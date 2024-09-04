function Welcome() {
  return (
    <div className="bg-gray-800 text-white flex flex-col items-center gap-4">
      <img className="w-60" src="https://react.dev/images/uwu.png" alt="" />
      <h1 className="text-5xl font-bold">Welcome to the </h1>
      <h1 className="text-5xl font-bold"> React community</h1>
      <button className=" text-slate-700 text-xl font-semibold opacity-90 p-2 button rounded-lg bg-cyan-300">Get Started</button>
    </div>
  );
}

export default Welcome;
