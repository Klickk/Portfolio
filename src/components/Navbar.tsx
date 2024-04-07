const Navbar = () => {
  return (
    <div className="w-screen top-0 fixed c-primary h-16 border-b-8 text-tertiary border-pentenary z-50 flex justify-center items-center space-x-52">
      <a href="#component1" className="font-kumbh mt-2 text-[25px]">
        Home
      </a>
      <a href="#component2" className="font-kumbh mt-2 text-[25px]">
        Experience
      </a>
      <a href="#component3" className="font-kumbh mt-2 text-[25px]">
        Projects
      </a>
      <a href="#component4" className="font-kumbh mt-2 text-[25px]">
        Contacts
      </a>
    </div>
  );
};

export default Navbar;
