"use server";
import React from "react";
import CreateUserForm from "../components/createUserForm";
import Link from "next/link";
import { useActionState } from "react";

const Userpage = () => {
  return (
    <>
      <div className="p-5 text-center bg-yellow-200 mb-5">
        Welcome to Create User page
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/"}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md w-1/6 text-center"
        >
          Home Page
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md bg-zinc-100">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Create User
          </h2>
          <CreateUserForm />
        </div>
      </div>
    </>
  );
};

export default Userpage;
