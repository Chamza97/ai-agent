import { FaRobot } from 'react-icons/fa';
import Image from "next/image";
const posts = [
  {
    id: 1,
    agent_name: 'Agent name',
    twitter_link: '#',
    personality: 'Agent personality',
    tasks: 'Tasks tasks',
    author: {
      name: 'Michael Foster'
    }
  },
  {
    id: 2,
    agent_name: 'Agent name',
    twitter_link: '#',
    personality: 'Agent personality',
    category: { title: 'Marketing', href: '#' },
    tasks: 'Tasks tasks',
    author: {
      name: 'Michael Foster'
    }
  },
  {
    id: 3,
    agent_name: 'Agent name',
    twitter_link: '#',
    personality: 'Agent personality',
    tasks: 'Tasks tasks',
    author: {
      name: 'Michael Foster'
    }
  },
  {
    id: 4,
    agent_name: 'Agent name',
    twitter_link: '#',
    personality: 'Agent personality',
    tasks: 'Tasks tasks',
    author: {
      name: 'Michael Foster'
    }
  }
];

const CreateAgent = () => {
  return (
    <div className="bg-black">
      <div className="relative isolate ">
        <div className="py-24 sm:py-24 lg:pb-40">
          <div className="flex justify-center items-center flex-row">
            <div className="basis-2/3 p-5 rounded-lg">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-2xl">
                    Browse all agents created on our platform
                  </h2>
                  <p className="mt-2 text-lg/10 text-gray-500">
                    {' '}
                    Discover AI Agents created by our community.
                  </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {posts.map((post) => (
                    <article
                      key={post.id}
                      className="flex max-w-xl flex-col bg-gray-950 items-start  rounded-lg justify-between"
                    >
                      <div className="group relative text-white">
                        <h2 className="mt-2  text-white  text-sm/6 font-semibold">

                          <Image width={15}  height={15} src="/icons8-ai-64.png" className="inline mr-1" alt="logo"/>
                          {post.agent_name}
                        </h2>
                        <p className="text-sm/6 text-gray-500">Created by @{post.author.name}</p>
                      </div>
                      <div className="group relative">
                        <h2 className="mt-2 text-sm/6 font-semibold text-white">Personality</h2>
                        <p className="text-sm/6  text-gray-500">{post.personality}</p>
                      </div>
                      <div className="group relative">
                        <h2 className="mt-2 text-sm/6 font-semibold text-white">Tasks</h2>
                        <p className="text-sm/6 text-gray-500">{post.tasks}</p>
                      </div>
                      <div className="relative  flex items-center ">
                        <div className="text-sm/6">
                          <a
                            href={'' + post.twitter_link}
                            className="text-sky-700  font-semibold text-xs hover:text-gray-900 dark:hover:text-white dark:text-sky-700"
                          >
                            <svg
                                className="w-5 h-10 mr-1 mb-1  inline"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                            View on X
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAgent;
