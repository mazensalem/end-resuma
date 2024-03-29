import React from "react";

export default function Skills() {
  return (
    <div className="mt-10 md:mt-5 md:items-start flex flex-col items-center">
      <p className="inline-block text-lg font-medium tracking-widest">
        / SKILLS
      </p>
      <main className="w-2/4 md:w-full">
        <ul className="flex justify-center flex-wrap">
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">REACT</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">NEXTJS</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">GIT</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">TESTING</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">REST API</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">TAILWIND CSS</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">
            MONGO DB
          </li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">GSP ANIMATION</li>
          <li className="rounded-xl px-5 mb-1 mr-2 bg-gray-300">THREE JS</li>
        </ul>
      </main>
    </div>
  );
}
