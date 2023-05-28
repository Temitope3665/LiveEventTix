import { DateIcon, PeopleIcon, TagIcon, VenueIcon } from "../../assets/svg";
import Button from "../button";

const ConcertCard = () => (
  <div className="rounded-lg shadow-card bg-[#12131C] border-[0.1px] border-grey h-fit w-[400px] shadow-normal relative">
    <img
      src="https://res.cloudinary.com/enyata-nig/image/upload/v1685181351/pexels-trinity-kubassek-342520_xnpvui.jpg"
      alt="concert-banner"
      className="min-h-[300px] object-cover rounded-t-lg w-full"
    />
    <div className="bg-primary w-fit px-3 py-1 rounded text-sm font-gilroyMd absolute right-0 top-20 text-dark">
      <p>3 S/O</p>
    </div>
    <div className="rounded-full h-[50px] w-[50px]">
      <img
        src="https://res.cloudinary.com/dboqyj4bp/image/upload/v1684494027/Frame_1000003589_k9eu2j.svg"
        className="h-[70px] w-[70px] -mt-9 ml-5"
        alt="profile"
      />
    </div>
    <div className="px-5 py-6">
      <p className="font-gilroyBold text-dark text-[22px] text-white mt-6">
        Title of concert | Artist
      </p>
      <div className="flex my-5 text-dark items-center text-grey">
        {DateIcon}
        <p className="text-md ml-3">Sun, Apr 9, 2023 3:18 PM</p>
      </div>
      <div className="flex my-5 text-dark items-center text-grey">
        {VenueIcon}
        <p className="text-md ml-3">Indigo, 02 Arena</p>
      </div>
      <div className="flex my-5 text-dark items-center text-grey">
        {PeopleIcon}
        <p className="text-md ml-3">10 capacity | <span className="text-error font-gilroyMd">Sold out</span></p>
      </div>
      <div className="flex mt-5 text-dark items-center text-grey">
        {TagIcon}
        <p className="text-md ml-3">0.001 cUSD</p>
      </div>

      <Button color="text-[#12131C]" mt="4" hover="hover:text-primary hover:bg-dark hover:border hover:border-primary" backgroundColor="bg-primary">Buy ticket</Button>
    </div>
  </div>
);

export default ConcertCard;