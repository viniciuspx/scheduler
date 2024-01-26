import { lemon } from "@/app/fonts/fonts";
import { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import { postList } from "../router/postList";
import { getList } from "../router/getList";

import { BiSolidTrashAlt } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { deleteList } from "../router/deleteList";

interface userboard {
  id: string;
}

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

export const Board: FC<userboard> = ({ id }) => {
  const [mainList, setmainList] = useState([{}]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(false);
  const [saved, setSaved] = useState(false);

  const date = new Date();

  useEffect(() => {
    var resArray: any = [];
    getList(id).then((r) => {
      if (r && mainList.length === 1) {
        r.forEach((element: any) => {
          resArray.push(element);
        });
        setmainList(resArray);
      }
    });
  }, [[], mainList]);

  const afterOpenModal = () => {};
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleAddItem = (e: any) => {
    e.preventDefault();

    var list = [...mainList];
    const time = e.target.elements.time.value;
    const task = e.target.elements.task.value;
    const item = {
      time: time,
      task: task,
    };

    if (time && task) list.push(item);

    setmainList(list);
    setIsOpen(false);
  };

  const handleSaveList = async (e: any) => {
    e.preventDefault();
    if (mainList.length < 250) {
      try {
        const res = await postList(id, mainList);
        setSaved(res);
        setTimeout(() => {
          setSaved(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Max list length.");
    }
  };

  const handleSelectItem = () => setSelectItem(!selectItem);

  const handleDeleteItem = (event: any) => {
    const selectedIndex = Number(event.target.id);
    var tempList = [...mainList];
    tempList.splice(selectedIndex, 1);
    setmainList(tempList);
  };

  const handleDeleteList = async () => {
    await deleteList(id);
    setmainList([{}]);
  };

  return (
    <div className="w-full">
      <h1
        className={`text-center text-[32px] md:text-[42px] font-bold text-[#24669C] ${lemon.className} p-10`}
      >
        {date.toLocaleDateString()}
      </h1>
      <div className="w-full my-auto border-t-2 border-b-2 border-[#24669c5a] border-dashed pt-10 pb-10">
        {mainList.map((item: any, index) => {
          if (item.time && item.task) {
            return (
              <div
                className="p-2 border-b-2 flex flex-row flex-wrap text-center text-wrap overflow-auto hover:bg-[#0000000A]"
                key={index}
                onClick={handleSelectItem}
              >
                {selectItem && (
                  <button id={String(index)} onClick={handleDeleteItem}>
                    <BiSolidTrashAlt className="w-[20px] text-red-600 cursor-pointer m-auto pointer-events-none" />
                  </button>
                )}
                <div className="w-1/5">{item.time}</div>
                <div className={selectItem ? `w-3/5` : `w-4/5`}>
                  {item.task}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex py-20">
        <button
          className="w-4/5 md:w-1/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-[#F4FAFF] m-auto"
          onClick={openModal}
        >
          Add Item
        </button>
        <button
          className="w-4/5 md:w-1/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-[#F4FAFF] m-auto"
          onClick={handleSaveList}
        >
          Save List
        </button>
        {saved && (
          <span className="my-auto text-green-700">
            <BiCheckCircle />
          </span>
        )}
      </div>
      <div className="flex flex-row flex-wrap">
        <button
          className="w-4/5 md:w-1/5 max-w-[600px] text-[#ff2929] font-bold border-[#ff2929] rounded-xl border-2 hover:bg-[#ff2929] hover:text-[#F4FAFF] m-auto"
          onClick={handleDeleteList}
        >
          Delete List
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
          <textarea
            name="task"
            id="task"
            placeholder="Task descriptions..."
            maxLength={144}
            className="p-2 md:w-[400px] md:h-[150px] border-2 m-4 break-words"
          ></textarea>
          <button className="w-2/5 md:w-2/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-[#F4FAFF] m-auto">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};
