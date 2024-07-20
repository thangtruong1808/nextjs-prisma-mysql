"use client";

import React from "react";
import { useActionState } from "react";
import { createUser, State } from "../lib/action";

const CreateUserForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createUser, initialState);
  return (
    <>
      <form action={formAction}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
            aria-describedby="name-error"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {(state.errors !== undefined &&
              state.errors?.name?.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))) || (
              <p className="mt-2 text-sm text-red-500">
                Oops, something went wrong with form validation!
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your post title"
            aria-describedby="title-error"
          />
          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Tell us about yourself"
            aria-describedby="content-error"
          ></textarea>
          <div id="content-error" aria-live="polite" aria-atomic="true">
            {state.errors?.content?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={5}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Tell us about yourself"
            aria-describedby="bio-error"
          ></textarea>
          <div id="bio-error" aria-live="polite" aria-atomic="true">
            {state.errors?.bio?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
    </>
  );
};

export default CreateUserForm;
