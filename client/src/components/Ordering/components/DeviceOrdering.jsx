import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { hideOrdering } from "../../../actions/orderingAction";

import { FaTimes } from "react-icons/fa";

import { OrderingContext } from "../context/OrderingContext";

import "./style.css";

const DeviceOrdering = ({ sell, view, cheapest, expensive }) => {
  const ordering = useSelector((state) => state.ordering);
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);

  const context = useContext(OrderingContext);

  return (
    <Transition.Root show={ordering} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(hideOrdering())}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 font-sans">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="mx-auto  flex items-center justify-center h-12 w-12 rounded-full bg-rose-500 "
                    onClick={() => dispatch(hideOrdering())}
                  >
                    <FaTimes className="text-white" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mx-3">
                    <Dialog.Title
                      as="h3"
                      className="w-full text-lg leading-6 font-medium text-gray-900"
                    >
                      مرتب سازی بر اساس
                    </Dialog.Title>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <ul className="w-full">
                  <li
                    className="border text-right p-3 my-2 rounded-2xl"
                    onClick={(e) => {
                      context.setGrouping(e.target.textContent);
                      dispatch(hideOrdering());
                      dispatch(sell());
                    }}
                  >
                    پرفروش ترین
                  </li>
                  <li
                    className="border text-right p-3 my-2 rounded-2xl"
                    onClick={(e) => {
                      context.setGrouping(e.target.textContent);
                      dispatch(hideOrdering());
                      dispatch(view());
                    }}
                  >
                    پر بازدید ترین
                  </li>
                  <li
                    className="border text-right p-3 my-2 rounded-2xl"
                    onClick={(e) => {
                      context.setGrouping(e.target.textContent);
                      dispatch(hideOrdering());
                    }}
                  >
                    جدید ترین
                  </li>
                  <li
                    className="border text-right p-3 my-2 rounded-2xl"
                    onClick={(e) => {
                      context.setGrouping(e.target.textContent);
                      dispatch(hideOrdering());
                      dispatch(cheapest());
                    }}
                  >
                    ارزان ترین
                  </li>
                  <li
                    className="border text-right p-3 my-2 rounded-2xl"
                    onClick={(e) => {
                      context.setGrouping(e.target.textContent);
                      dispatch(hideOrdering());
                      dispatch(expensive());
                    }}
                  >
                    گران ترین
                  </li>
                </ul>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeviceOrdering;
