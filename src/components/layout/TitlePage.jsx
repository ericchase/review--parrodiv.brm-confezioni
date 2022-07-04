

function TitlePage({title}) {
  return (
    <div className=" sticky top-0 p-5 bg-white z-30 p-1 w-full">
      <h1 className="text-4xl mt-3 text-center lg:text-6xl font-bold mb-6 shadow-xl pb-3 z-30">
        {title}
      </h1>
    </div>
  );
}

export default TitlePage
