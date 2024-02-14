import React from "react";
import Link from "next/link";
import { FaTrash, FaEdit } from "react-icons/fa";
const TopicsList = ({ title, text }) => {
  return (
    <>
      <div className="flex justify-between">
        <h1>Api title</h1>
        <div>
          <button>
            <FaTrash size={20} /> {/* Delete Icon */}
          </button>
          <button>
            <FaEdit size={20} /> {/* Edit Icon */}
          </button>
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quo
        minima! Doloribus, facere sit id repellendus dolorum aut reprehenderit
        facilis quod similique unde natus totam, commodi labore tempora ipsam
        molestiae.
      </div>
    </>
  );
};

export default TopicsList;
