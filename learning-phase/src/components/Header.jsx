function Header() {
  return (
    <div className="bg-slate-800 text-white px-10 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img
          src="https://react.dev/_next/image?url=%2Fimages%2Fuwu.png&w=64&q=75"
          alt=""
        />
        <h3 className="text-sm font-semibold text-slate-300 hover:underline underline-offset-2">
          v18.3.1
        </h3>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Youtube</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
