import Image from "next/image";

function Navbar() {
  return (
    <nav className="shadow ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Image src="/logo.png" alt="logo" width={250} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
