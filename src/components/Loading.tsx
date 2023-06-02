import { BounceLoader } from "react-spinners";

export const LoadingPage = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center">
      <BounceLoader color="#4375ae" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
