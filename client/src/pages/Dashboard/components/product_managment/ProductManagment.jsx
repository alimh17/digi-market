import React, { useEffect, useState } from "react";

import AddProductComponents from "./components/AddProductComponents/AddProductComponents";
import { SwitchProduct } from "../../utils/SwitchProduct";
import Article from "./components/article/Article";
import RemoveAndEditPorduct from "./components/removeAndEditProduct/RemoveAndEditPorduct";
import { PorductManagmentContext } from "./context/productManagmentContext";

const ProductManagment = React.memo(({ active }) => {
  const [product, setProduct] = useState(new Array(6).fill(false));

  const handleSetState = () => {
    const copyProducts = [...product];
    copyProducts.fill(false);
    copyProducts[0] = true;
    setProduct(copyProducts);
  };

  useEffect(() => {
    handleSetState();
  }, []);

  const handleChangeProductState = (num) => {
    const copyProducts = [...product];
    copyProducts.fill(false);
    copyProducts[num] = true;
    setProduct(copyProducts);
  };

  return (
    <section
      className={`${active[0] ? "flex" : "hidden"} flex-col overflow-x-hidden `}
    >
      <h2 className="text-2xl m-3 border-b-rose-600 border-b-2 p-3  rounded-b-sm font-bold  ">
        دسته بندی
      </h2>
      <div
        className="flex
      flex-col md:flex-row flex-wrap overflow-hidden justify-center items-center 
      "
      >
        <Article
          product={product[0]}
          click={() => handleChangeProductState(0)}
          name="موبایل"
          path="dashboard/15d774761e234a15c1c559ac540963baad9e229f_1634390421.jpg"
        />
        <Article
          product={product[1]}
          click={() => handleChangeProductState(1)}
          name="لپ تاپ"
          path="dashboard/GS76 Stealth.jpg"
        />
        <Article
          product={product[2]}
          click={() => handleChangeProductState(2)}
          name="تبلت"
          path="/dashboard/fe079b9490f83bcf52cc8036e99c50641bf291a0_1631534772.jpg"
        />
        <Article
          product={product[3]}
          click={() => handleChangeProductState(3)}
          name="کنسول"
          path="dashboard/PlayStation 5 Drive.jpg"
        />
        <Article
          product={product[4]}
          click={() => handleChangeProductState(4)}
          name="ساعت هوشمند"
          path="dashboard/44mm Space Gray Aluminum Case with Nike Sport.jpg"
        />
        <PorductManagmentContext.Provider
          value={{ product, handleChangeProductState }}
        >
          <div className="p-2 col-span-full">
            <h2 className="text-2xl font-bold border-b-2 border-b-rose-600 rounded-b-sm p-3 mx-4">
              افزودن {SwitchProduct(product)} جدید
            </h2>
            <AddProductComponents product={product} />
          </div>
          <div className="p-2 col-span-full flex justify-center flex-col w-full container ">
            <h2 className="text-2xl font-bold border-b-2 border-b-rose-600 rounded-b-sm p-3 mx-4">
              ویرایش - حذف {SwitchProduct(product)}
            </h2>
            <RemoveAndEditPorduct product={product} />
          </div>
        </PorductManagmentContext.Provider>
      </div>
    </section>
  );
});

export default ProductManagment;
