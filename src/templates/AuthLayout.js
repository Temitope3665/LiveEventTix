import NavBar from "../components/nav";
import Button from "../components/button";

const AuthLayout = ({ children }) => (
  <div className="">
    <NavBar />
    <div className="w-full h-500px relative">
      <img
        className="h-[500px] w-[100%] object-cover"
        src="https://res.cloudinary.com/enyata-nig/image/upload/v1685181351/pexels-trinity-kubassek-342520_xnpvui.jpg"
        alt="background"
      />
      <div className="absolute top-[35%] right-0 left-0 w-full">
        <h2 className="font-gilroyMd text-[50px] w-[50%] leading-[60px] text-center mx-auto shadow-lg shadow-primary">
            Your Gateway to Live Music <span className="text-primary font-gilroyBold">Experiences...</span>
        </h2>
        <div className="mx-auto flex justify-center w-[15%] mt-5">
        <Button
          color="text-primary"
          width="w-[13%]"
          backgroundColor="bg-none"
          border="border border-primary"
          hover="hover:bg-primary hover:text-dark"
        >
          Buy a ticket
        </Button>
            {/* <Button color="text-dark" width="w-[15%]">
            Book a show
            </Button> */}
        </div>
      </div>
    </div>
    <div className="my-8 px-8">{children}</div>
  </div>
);

export default AuthLayout;
