import Link from "next/link";

function Navbar() {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          href={`/`}
          className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Hello World
        </Link>
      </div>
      <div className="flex-none gap-2">

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
