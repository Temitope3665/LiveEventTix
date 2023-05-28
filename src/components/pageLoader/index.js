import { PageLoading } from "../../assets/svg/pageLoading";

const PageLoader = ({ loaderText }) => {
  return (
      <div className="">
        <PageLoading />
        <p className="font-bold text-[22px] text-white text-center w-full flex justify-center mx-auto">
          {loaderText || ''}
        </p>
      </div>
  );
};
export default PageLoader;
