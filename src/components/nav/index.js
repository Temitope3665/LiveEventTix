import Button from "../button";

const NavBar = () => (
  <nav className="px-6 flex items-center justify-between w-full">
    <div className="w-[40%]">
      <img
        className="my-4"
        src="https://res.cloudinary.com/enyata-nig/image/upload/v1685182266/Group_36_1_dhb9sh.svg"
        alt="brand-logo"
        width={200}
      />
    </div>
    <div className="w-[55%] flex justify-between items-center">
      <div className="flex w-[35%] items-center">
        <p className="cursor-pointer hover:text-primary trans hover:underline-offset-8 hover:underline mr-14">Selling ticket</p>
        <p className="cursor-pointer hover:text-primary trans trans hover:underline-offset-8 hover:underline">Past events</p>
      </div>
      <div className="w-[38%] flex items-center">
        <Button
          color="text-primary"
          width="w-fit"
          backgroundColor="bg-none"
          border="border border-primary"
        >
            Add a Show
          {/* Connect With Masa */}
        </Button>
        <Button color="text-dark" backgroundColor="bg-primary" hover="hover:text-dark" width="w-fit" ml="ml-4">
            Buy a ticket
          {/* Connect Wallet */}
        </Button>
      </div>
    </div>
  </nav>
);

export default NavBar;