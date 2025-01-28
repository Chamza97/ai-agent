const CreateAgent = () => {
  return (
    <div className="bg-black">
      <div className="relative isolate ">
        <div className="py-24 sm:py-24 lg:pb-40">
          <div className="flex  justify-center items-center flex-row">
            <div className=" basis-2/3 p-5 bg-gray-950  rounded-lg">
              <form className="ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl ">
                <div className="border-b border-white/10 pb-5">
                  <h2 className="text-base/8 font-semibold text-white">Define your agents profiles, instructions and personality settings</h2>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    Create your AI Agents personality and behaviour for twitter.
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                          htmlFor="agent-name"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Agent username
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="username"
                              name="username"
                              type="text"
                              placeholder="username"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="agent-name"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Your X username
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="username"
                              name="username"
                              type="text"
                              placeholder="Your x username"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                      </div>

                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="agent ftp"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Agent ftp
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="agent-ftp"
                              name="agent-ftp"
                              type="text"
                              placeholder="Your agent ftp"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                      </div>

                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="personality"
                        className="block text-sm/6 font-medium text-white"
                      >
                        Personality prompt
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="personality"
                          name="personality"
                          rows={2}
                          placeholder="Describe your agent personality and tone"
                          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500  sm:text-sm/6"
                          defaultValue={''}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="agent-tasks"
                        className="block text-sm/6 font-medium text-white"
                      >
                        Agent tasks
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="agent-tasks"
                          name="agent-tasks"
                          rows={2}
                          placeholder="List the tasks your agent should perform"
                          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500   sm:text-sm/6"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-center ">
                  <button
                    type="submit"
                    className="rounded-md bg-white w-full px-12 py-2 text-sm font-semibold text-black shadow-xs "
                  >
                    Create your agent
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgent;
