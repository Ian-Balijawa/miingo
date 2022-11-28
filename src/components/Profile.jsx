import React, { useState } from "react";
import axios from "../services/axios-config";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { Stack, Button, Spinner, Select } from "@chakra-ui/react";

export default function Profile({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [intro, setIntro] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [relationship, setRelationship] = useState("");
  const [livesIn, setlivesIn] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("Uganda");

  const dispatch = useDispatch();

  const id = user._id;
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(isLoading);
    try {
      const { data } = await axios.patch(`/user/profile/${id}`, {
        intro,
        birthDate,
        gender,
        phone,
        country,
        city,
        relationship,
        city,
        email,
        website,
      });
      console.log(data);
      setShowModal(false);
    } catch (err) {
      // setError(err.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div class="p-16 overflow-y-auto scrollbar-hide flex-grow   h-screen  pb-56 ">
        <div class="p-1 md:p-8  bg-white shadow mt-20">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Friends</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Photos</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Comments</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                onClick={() => setShowModal(true)}
                data-bs-toggle="modal"
                class=" text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mx-auto"
              >
                Edit Profile
              </button>
              {/* <button
  class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Message
</button> */}
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{user.name}</h1>
            <p class="font-light text-gray-600 mt-3">{user.email}</p>

            <p class="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p class="mt-2 text-gray-500">University of Computer Science</p>
          </div>

          <div class="mt-12 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none shadow-2xl">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    General Information
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 rounded px-8 pt-6 pb-8 w-full">
                    <Stack spacing="4">
                      <label className="block text-black text-sm font-bold mb-1">
                        Intro
                      </label>
                      <Input
                        value={intro}
                        onChange={({ target }) => setIntro(target.value)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Phone
                      </label>
                      <Input
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Email
                      </label>
                      <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Lives In
                      </label>

                      <Input
                        value={city}
                        onChange={({ target }) => setCity(target.value)}
                      />
                    </Stack>

                    <Stack spacing="4">
                      <label className="block text-black text-sm font-bold mb-1">
                        Gender
                      </label>
                      <Select
                        placeholder="Select Gender"
                        onChange={({ target }) => setGender(target.value)}
                        value={gender}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Select>
                      <label className="block text-black text-sm font-bold mb-1">
                        Birth Date
                      </label>
                      <Input
                        type="date"
                        value={birthDate}
                        onChange={({ target }) => setbirthDate(target.value)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Website
                      </label>
                      <Input
                        value={website}
                        onChange={({ target }) => setWebsite(target.value)}
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        RelationShip
                      </label>
                      <Input
                        value={relationship}
                        onChange={({ target }) => setRelationship(target.value)}
                      />
                    </Stack>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    fontSize="md"
                    onClick={handleSubmit}
                  >
                    {isLoading ? <Spinner size="sm" color="white" /> : "Save"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
