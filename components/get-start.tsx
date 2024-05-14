import GetStartedBtn from "./get-started-btn"

const GetStarted = () => {
  return (
    <div>
      <form className="relative mx-auto  flex  h-full   max-w-7xl w-full flex-col items-start justify-center space-y-5 overflow-hidden rounded-3xl border   border-neutral-500 bg-gradient-to-tr from-transparent to-transparent/90 p-3 px-10  py-20 text-neutral-800">
        <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12   z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
          <span className="uppercase font-extrabold font-heading2 flex justify-start items-center text-center text-4xl font-heading2 bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text text-transparent">
            Get more updates
          </span>
          <p className="text-neutral-700">
            Sign up for our newsletter and you&apos;ll be the first to find out about
            new features
          </p>
        </div>
        <div className="flex gap-1 max-w-full justify-start">
          <div className="relative rounded-lg w-96 mr-auto  overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
              placeholder="xyz@shadow.com"
              className="relative  bg-transparent ring-0 outline-none border border-neutral-500 text-white  text-sm rounded-2xl focus:ring-[#E0B379] placeholder-opacity-60 focus:border-[#E0B379] placeholder-white/50  block w-full p-2.5 checked:bg-emerald-500"
              type="text"
            />
          </div>
          <GetStartedBtn />
          {/* <button className="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400">
            Subscribe
          </button> */}
        </div>
      </form>
    </div>
  )
}
export default GetStarted
