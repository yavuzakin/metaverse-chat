function Backdrop({ clickHandler }) {
  return (
    <div
      onClick={clickHandler}
      className="fixed inset-0 bg-gray-900 opacity-80 overflow-y-auto h-full w-full"
    ></div>
  );
}

export default Backdrop;
