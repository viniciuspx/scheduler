import { lemon } from "@/app/fonts/fonts";
import { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import { postList } from "../router/postList";
import { getList } from "../router/getList";

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

  useEffect(() => {
    var resArray: any = [];
    getList(id).then((r) => {
      if (mainList.length === 1) {
        r.forEach((element: any) => {
          resArray.push(element);
        });
        setmainList(resArray);
      }
    });
  }, []);

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
        console.log(mainList);
        const res = await postList(id, mainList);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Max list length.");
    }
  };

  return (
    <div className="w-full">
      <h1
        className={`text-center text-[32px] md:text-[42px] font-bold text-[#24669C] ${lemon.className} p-10`}
      >
        For today:
      </h1>
      <div className="w-3/5 m-auto border-2 border-[#24669c5a] border-dashed rounded-xl p-4">
        {mainList.map((item: any, index) => {
          if (item.time && item.task) {
            return (
              <div
                className="p-2 border-b-2 flex flex-row flex-wrap text-center text-wrap overflow-auto"
                key={index}
              >
                <div className="w-1/5">{item.time}</div>
                <div className="w-4/5">{item.task}</div>
              </div>
            );
          }
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
          <textarea
            name="task"
            id="task"
            placeholder="Task descriptions..."
            maxLength={144}
            className="p-2 md:w-[400px] md:h-[150px] border-2 m-4 break-words"
          ></textarea>
          <button className="w-2/5 md:w-2/5 max-w-[600px] text-[#24669C] font-bold border-[#42A5F5] rounded-xl border-2 hover:bg-[#42A5F5] hover:text-white m-auto">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
};
