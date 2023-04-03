type ThanksProps = {
  selectedRating: number | undefined;
};

export function Thanks(props: ThanksProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className=" text-white bg-gray-800 p-10 flex flex-col items-center justify-center text-center w-80 h-90 rounded-xl">
        <img src="./src/assets/images/thanks.svg" alt="thanks card" />

        <p className="mt-5 p-2 px-5 bg-gray-700 text-orange-500 rounded-3xl text-xs">
          You selected {props.selectedRating} out of 5
        </p>

        <h1 className="mt-5 text-xl font-bold">Thank you !</h1>
        <p className="mt-5 text-gray-400 text-sm ">
          We appreciate you taking the time to give us a rating. if you ever
          need more support, don't hesitate to get in touch
        </p>
      </div>
    </div>
  );
}

export default Thanks;
