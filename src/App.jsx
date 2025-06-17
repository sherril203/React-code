import CutsomButton from "./components/Button";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handeReset = () => {
    console.log("Form reset");
  };

  const handleGoBack = () => {
    console.log("Go back clicked");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-96 flex flex-col gap-4"
        onSubmit={handleSubmit}
        onReset={handeReset}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Signup Form</h1>
        <input
          className="p-2 border border-gray-300 outline-0"
          placeholder="Enter a Email"
        />
        <input
          className="p-2 border border-gray-300 outline-0"
          placeholder="Enter a password"
        />
        <div className="flex flex-row gap-3">
          <CutsomButton
            className={"bg-blue-500"}
            buttonName={"Reset"}
            type="reset"
            // onClick={handeReset}
          />
          <CutsomButton
            className={"bg-green-500"}
            buttonName={"Submit"}
            type="submit"
            // onClick={handleSubmit}
          />

          <CutsomButton
            className={"bg-gray-500"}
            buttonName={"Go Back"}
            type="button"
            onClick={handleGoBack}
          />
        </div>
      </form>
    </div>
  );
};

export default App;
