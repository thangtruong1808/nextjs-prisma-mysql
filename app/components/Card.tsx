"use client";
import React from "react";
const Card = ({ user }: any) => {
  // console.log("---------- you are here CARD PAGE----------");
  // console.log(user);
  return (
    <>
      <div
        // key={user.id}
        className="p-3 bg-sky-200 m-3 rounded-md shadow-lg hover:border-4 border-sky-500/100"
      >
        <p className="text-red-500">ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {user.posts && user.posts.length > 0 ? (
          <div className="bg-yellow-200 p-2 m-2 rounded">
            {user.posts.map((post: any) => (
              <div key={post.id}>
                <p>Title: {post.title}</p>
                <p>Content: {post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}

        <p className="bg-indigo-200 m-2 p-2 rounded">
          Bio: {user.profile?.bio}
        </p>
        {/* {user.profile && user.profile.length > 0 ? (
          <div className="bg-grey-200">
            {user.profile.map((userprofile: any) => (
              <div key={userprofile.id}>
                <p>Bio: {userprofile.bio}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No profile available.</p>
        )} */}
      </div>
    </>
  );
};

export default Card;
