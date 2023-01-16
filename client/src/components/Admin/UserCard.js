import React from "react";

function UserCard({ client, handleDelete }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 mt-6">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={client.client_image}
          alt="user pic"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {client.client_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {client.email}
        </span>
        <div className="flex flex-col text-gray-500">
          <div className="flex space-x-2 p-2 justify-between">
            <span>Tickets:</span>
            <span>{client.tickets.length}</span>
          </div>
          <div className="flex space-x-2 p-2 justify-between">
            <span>Total Spent: </span>
            <span>1500</span>
          </div>
          <div className="flex space-x-2 p-2 justify-between">
            <span>Comments: </span>
            <span>{client.comments.length}</span>
          </div>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6 justify-between">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  bg-red-500 rounded-md"
            onClick={() => {
              handleDelete(client.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
