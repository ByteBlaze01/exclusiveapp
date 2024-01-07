export default async function LoginPage() {
  return (
    <main>
      <div className="grid grid-cols-2 ">
        <div className=" mb-[50px] mt-[50px] ">
          <img src="/Images/loginImg.svg " alt="error"></img>
        </div>
        <div className=" mx-auto  mt-[170px]  ">
          <h2 className="lg:text-[35px]  sm:mx-2 text-[30px]  sm:text-[25px] font-semibold ">
            Login in to Exclusive
          </h2>
          <p className=" text-[15px] sm:mx-2 font-semibold">Enter your details below</p>
          <br />
          <input
            type="email"
            placeholder="Email or Phone Numbers "
            className="outline-none sm:mx-2 border-b pb-3 border-black  "
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            className="outline-none sm:mx-2 border-b pb-3 border-black sm:my-3 md:my-5 my-5" 
          />
          <br />
          <br />
          <input
            type="submit"
            className="bg-[#c2410c] text-white p-2 rounded   md: hover:bg-[#c2410c] cursor-pointer"
          />
          <span className="text-[#c2410c]  ml-10">Forget password?</span>
        </div>
      </div>
    </main>
  );
}
