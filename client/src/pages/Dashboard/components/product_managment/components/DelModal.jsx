import React, { useState } from "react";
import _ from "lodash";
import { TiDelete } from "react-icons/ti";
import { useToasts } from "react-toast-notifications";
import Loading from "../../../../../components/Loading";

const DelModal = ({ open, setOpen, data, url, request }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const handleDeleteRequest = async () => {
    setLoading(true);
    const req = await request(data._id);
    if (req.status === 200) {
      setLoading(false);
      setOpen(false);

      addToast(req.data.message, {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      setLoading(false);
      addToast(req.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      {!_.isEmpty(data) ? (
        <div
          className=" top-0 right-0 z-40 w-full h-screen bg-gray-600 bg-opacity-50  justify-center items-center "
          style={
            open ? { display: "flex", position: "fixed" } : { display: "none" }
          }
        >
          <div
            className={`w-full h-3/4 md:w-2/3 md:h-3/4 flex flex-col justify-between gap-3 items-center  bg-white rounded-lg  in transition-all  duration-300 ease-in animate-[wiggle_0.3s_linear]`}
          >
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <Loading />
              </div>
            ) : (
              <>
                <div className="w-full flex flex-col justify-center items-center p-3 gap-3">
                  <div className=" w-full flex flex-col justify-center items-center">
                    <TiDelete className="text-8xl  text-rose-800" />
                  </div>
                  <img
                    alt="delete_item"
                    src={url + data.mainImage}
                    className="w-1/2 h-2/3"
                  />
                  <h3 className="md:text-xl text-gray-400 text-center">
                    آیا میخواهید {data && data.name} را حذف کنید ؟
                  </h3>
                </div>

                <div className="flex w-full p-2">
                  <button
                    className="w-full md:w-1/2 bg-rose-700 p-3 text-white rounded-lg mx-2"
                    onClick={handleDeleteRequest}
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-full md:w-1/2 bg-gray-400 p-3 text-white rounded-lg mx-2"
                  >
                    انصراف
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DelModal;

// <>

//
//           <>

//
//         )}

//         </div>
//     )}
//   </div>
// ) : null}
// </>
