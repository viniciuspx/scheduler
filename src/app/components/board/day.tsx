import { lemon } from "@/app/fonts/fonts";
import { useState } from "react";
import Modal from "react-modal";
import { postList } from "../router/postList";

var dummy = [{ time: "", task: "" }];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    border: "solid 2px #24669C",
  },
};

Modal.setAppElement("body");

export const Board = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const afterOpenModal = () => {};
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleAddItem = (e: any) => {
    e.preventDefault();
    const time = e.target.elements.time.value;
    const task = e.target.elements.task.value;
    const item = {
      time: time,
      task: task,
    };
    if (time && task) dummy.push(item);
    setIsOpen(false);
  };

  const handleSaveList = async (e: any) => {
    e.preventDefault();
    try {
      const res = await postList("4", dummy);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <h1
        className={`text-center text-[32px] md:text-[42px] font-bold text-[#24669C] ${lemon.className} p-10`}
      >
        For today:
      </h1>
      <div className="w-full border-2 border-[#24669c5a] border-dashed rounded-xl p-4">
        {dummy.map((item, index) => {
          return (
            <div
              className="text-center p-2 border-b-2 flex flex-row"
              key={index}
            >
              <div className="w-1/5">{item.time}</div>
              <div className="w-4/5">{item.task}</div>
            </div>
          );
        })}
      </div>
      <div className="flex p-20">
        <button
          className="w-4/5 md:w-2/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-white m-auto"
          onClick={openModal}
        >
          Add Item
        </button>
        <button
          className="w-4/5 md:w-2/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-white m-auto"
          onClick={handleSaveList}
        >
          Save List
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="flex flex-col" onSubmit={handleAddItem}>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            name="time"
            className="p-2 m-4 border-2"
            id="time"
          ></input>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            placeholder="Task descriptions..."
            name="task"
            className="p-2 md:w-[400px] md:h-[150px] border-2 m-4"
            id="task"
          ></input>
          <button className="w-2/5 md:w-2/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-white m-auto">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};
