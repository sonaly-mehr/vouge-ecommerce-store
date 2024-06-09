import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const CartItems = ({ cart }: { cart: any }) => {
  const total = cart?.cartItems?.map((item: any) => item?.item?.price);
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative flex items-center max-md:hidden">
          <ShoppingBag />
          <span className="bg-[#EB0B0B] w-[20px] h-[20px] absolute -top-[6px] -right-[12px] rounded-full text-white text-xs flex justify-center items-center">
            {cart.cartItems.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col space-y-4 dark:bg-gray-50 dark:text-gray-800">
              {cart.cartItems.length === 0 ? (
                <div>
                <p className="text-body-bold h-full flex justify-center items-center mt-20">No item in cart</p>
                <button
                onClick={()=> router.push("/")}
                type="button"
                className="px-6 py-2 border rounded-md dark:border-violet-600 w-full bg-primary text-white mt-10"
              >
                Back
                <span className="sr-only sm:not-sr-only">to shop</span>
              </button>  
              
              </div>
            
            ) : (
                <div>
                  {cart.cartItems.map((cartItem: any) => (
                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-16 h-16 dark:border- rounded outline-none dark:bg-gray-500"
                            src={cartItem.item.media[0]}
                            alt={cartItem.item.title}
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-base font-semibold leading-snug sm:pr-8 text-gray-700">
                                  {cartItem.item.title}
                                </h3>
                                <p className="text-sm dark:text-gray-600">
                                  Classic
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold text-gray-700">
                                  ${cartItem.item.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex text-sm divide-x">
                              <button
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current text-gray-700"
                                >
                                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="168"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="240"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="312"
                                    y="216"
                                  ></rect>
                                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span className="text-gray-700">Remove</span>
                              </button>
                              <button
                                type="button"
                                className="flex items-center px-2 py-1 space-x-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              )}

              {cart.cartItems.length !== 0 && (
                <>
                  <div className="space-y-1 text-center">
                    <p>
                      Total amount:
                      <span className="font-semibold text-gray-700">${total}</span>
                    </p>
                    <p className="text-sm dark:text-gray-600">
                      Not including taxes and shipping costs
                    </p>
                  </div>
                  <div className="flex justify-between space-x-2 pt-5">
                    <button
                      type="button"
                      className="px-4 py-3 border rounded-md dark:border-violet-600"
                    >
                      Back&nbsp;
                      <span className="sr-only sm:not-sr-only">To shop</span>
                    </button>
                    <button
                      onClick={() => router.push("/cart")}
                      type="button"
                      className="px-4 py-3 border rounded-md bg-primary text-white"
                    >
                      <span className="sr-only sm:not-sr-only">
                        Continue To&nbsp;
                      </span>
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartItems;
