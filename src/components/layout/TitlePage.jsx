

function TitlePage({title}) {
  return (
    <div className=" sticky top-0 bg-white z-30 p-2 w-full">
      <h1 className="text-4xl mt-3 text-center lg:text-6xl font-bold mb-6 shadow-xl pb-6 z-30">
        {title}
      </h1>
    </div>
  );
}

export default TitlePage
