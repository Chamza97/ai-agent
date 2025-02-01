"use client"
import Image from "next/image";
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";


import { toast } from "react-toastify";
import LoadingCircle from "@/components/Loader/loading-circle";
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
const getAgents = async () => {

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  try {

    const response = await axios.get("https://bf19-197-15-57-248.ngrok-free.app/agents",{
      headers: { "ngrok-skip-browser-warning": "true" }
    });
    // Vérifie si la réponse contient bien des données

    if (!response.data || !Array.isArray(response.data.agents)) {
      throw new Error("Données invalides reçues de l'API");
    }

    // Formate chaque agent reçu dans le bon modèle
    return response.data.agents;

  } catch (error) {
    throw new Error("Impossible de récupérer les agents.");
  }
};
const BrowseAgents = () => {
  const queryClient = useQueryClient();
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const { data: agents, isLoading, error } = useQuery({
    queryKey: ["agents"],
    queryFn: getAgents,
    staleTime: 30, // Met en cache les données 5 minutes
    retry: 2, // Tente de refaire la requête 2 fois en cas d'échec
  });

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
                  {agents && agents.map((agent: any) => (
                    <article
                      key={agent.id}
                      className="flex max-w-xl flex-col bg-gray-950 items-start  rounded-lg justify-between"
                    >
                      <div className="group relative text-white">
                        <h2 className="mt-2  text-white  text-sm/6 font-semibold">
                          <Image width={15}  height={15} src="/icons8-ai-64.png" className="inline mr-1" alt="logo"/>
                          {agent.agent_name}
                        </h2>
                        <p className="text-sm/6 text-gray-500">Created by @{agent.name}</p>
                      </div>
                      <div className="group relative">
                        <h2 className="mt-2 text-sm/6 font-semibold text-white">Personality</h2>
                        <p className="text-sm/6  text-gray-500">{agent.personality}</p>
                      </div>
                      {/*<div className="group relative">*/}
                      {/*  <h2 className="mt-2 text-sm/6 font-semibold text-white">Tasks</h2>*/}
                      {/*  <p className="text-sm/6 text-gray-500">{post.tasks}</p>*/}
                      {/*</div>*/}
                      <div className="relative  flex items-center ">
                        <div className="text-sm/6">
                          <a
                            href={'' + agent.twitter_link}
                            className="text-sky-700  font-semibold text-xs hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                          >
                            <svg fill="currentColor" viewBox="0 0 24 24">
                              <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                              />
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
export default BrowseAgents;
