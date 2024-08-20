import TransitionLink from "./TransitionLink";

const Navbar = () => {
  return (
    <nav className="w-full p-5 flex flex-row justify-between place-items-center">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">
        Treva
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
        <TransitionLink href="/work" label="Work" />
      </div>
    </nav>
  );
};

export default Navbar;
