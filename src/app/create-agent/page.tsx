"use client";

import {z} from "zod";
import { useState, ChangeEvent, FormEvent  } from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import { toast } from 'react-hot-toast';
const CreateAgentSchema = z.object({
  name: z.string().nonempty(),
  personalityPrompt: z.string().min(3),
  apiKey: z.string().min(3),
  apiSecret: z.string().min(3),
  accessToken: z.string().min(3),
  accessTokenSecret: z.string().min(3),
  bearerToken: z.string().min(3),
});
const CreateAgent = () => {
  type FormData = z.infer<typeof CreateAgentSchema>;
  type FormErrors = Partial<Record<keyof FormData, string[]>>;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    personalityPrompt: "",
    apiKey: "",
    apiSecret: '',
    accessToken: "",
    accessTokenSecret: "",
    bearerToken: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [toastError, setToastError] = useState(false);

  const validateForm = (data: FormData): FormErrors => {
    try {
      CreateAgentSchema.parse(data);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      }
      return {};
    }
  };
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const createAgent = async (data: FormData) => {
    const { data: response } = await axios.post('https://1c7f-197-15-126-168.ngrok-free.app/create-agent', data);
    return response.data;
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createAgent, {
    onSuccess: data => {
      console.log(data);
       toast.success('Agent create with success');
    },
    onError: () => {
      toast.error('Error while create AI agent !');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      mutate(formData)
    }
  };

  const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    // Validate form on each change
    const newErrors = validateForm(updatedFormData);
    setErrors(newErrors);
  };
  const {  error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
        fetch('https://api.github.com/repos/TanStack/query').then((res) =>
            res.json(),
        ),
  })

  return (
    <div className="bg-black">
      <div className="relative isolate ">
        <div className="py-24 sm:py-24 lg:pb-40">
          <div className="flex  justify-center items-center flex-row">
            <div className=" basis-2/3 p-5 bg-gray-950  rounded-lg">
              <form onSubmit={handleSubmit} className="ring-1 shadow-xs ring-gray-900/5 sm:rounded-xl ">
                <div className="border-b border-white/10 pb-5">

                  <h2 className="text-base/8 font-semibold text-white">Define your agents profiles, instructions and personality settings</h2>
                  <p className="mt-2 text-sm/6 text-gray-400">
                    Create your AI Agents personality and behaviour for twitter.
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div className="col-span-full">
                      <label
                          htmlFor="name"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Your X username
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="name"
                              name="name"
                              type="text"
                              onChange={handleChange}
                              value={formData.name}
                              placeholder="Name"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.name && <span className="text-red-500">{errors.name[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="apiKey"
                          className="block text-sm/6 font-medium text-white"
                      >
                       Api key
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="apiKey"
                              name="apiKey"
                              type="text"
                              onChange={handleChange}
                              value={formData.apiKey}
                              placeholder="api Key"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.apiKey && <span className="text-red-500">{errors.apiKey[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="personalityPrompt"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Personality Prompt
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="personalityPrompt"
                              name="personalityPrompt"
                              type="text"
                              onChange={handleChange}
                              value={formData.personalityPrompt}
                              placeholder="personality Prompt"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.personalityPrompt && <span className="text-red-500">{errors.personalityPrompt[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="apiSecret"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Api Secret
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="apiSecret"
                              name="apiSecret"
                              type="text"
                              onChange={handleChange}
                              value={formData.apiSecret}
                              placeholder="api Secret"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.apiSecret && <span className="text-red-500">{errors.apiSecret[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="accessToken"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Access Token
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="accessToken"
                              name="accessToken"
                              type="text"
                              onChange={handleChange}
                              value={formData.accessToken}
                              placeholder="access Token"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.accessToken && <span className="text-red-500">{errors.accessToken[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="accessTokenSecret"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Access Token Secret
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="accessTokenSecret"
                              name="accessTokenSecret"
                              type="text"
                              onChange={handleChange}
                              value={formData.accessTokenSecret}
                              placeholder="Access Token Secret"
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.accessTokenSecret && <span className="text-red-500">{errors.accessTokenSecret[0]}</span>}
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                          htmlFor="bearerToken"
                          className="block text-sm/6 font-medium text-white"
                      >
                        Bearer Token
                      </label>
                      <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                              id="bearerToken"
                              name="bearerToken"
                              type="text"
                              onChange={handleChange}
                              value={formData.bearerToken}
                              placeholder="bearer Token "
                              className="block w-full grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                        {errors.bearerToken && <span className="text-red-500">{errors.bearerToken[0]}</span>}
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
