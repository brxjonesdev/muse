import React from 'react';

export default function Settings() {
  return (
    <section className="text-app-text h-[100vh] w-[650px] mx-auto flex-grow border-x-2 border-gray-800 px-4 overflow-y-scroll pt-8">
      <h2 className="text-3xl">Settings</h2>
      <div className="w-full h-0.5 bg-gray-600 my-8" />
      <section className="rounded-b-lg h-full space-y-4">
        <div className="flex justify-between">
          <h3>Change Username</h3>
          <button className="bg-app-background text-app-text px-2 rounded-md">
            Edit
          </button>
        </div>
        <div className="flex justify-between">
          <h3>Change Password</h3>
          <button className="bg-app-background text-app-text px-2 rounded-md">
            Edit
          </button>
        </div>
        <div className="flex justify-between">
          <h3>Change Email</h3>
          <button className="bg-app-background text-app-text px-2 rounded-md">
            Edit
          </button>
        </div>
        <div className="flex justify-between">
          <h3>Delete Account</h3>
          <button className="bg-app-background text-app-text px-2 rounded-md">
            Delete
          </button>
        </div>
      </section>
    </section>
  );
}
