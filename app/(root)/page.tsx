"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Initialize state variables for card details and form submission
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Function to handle form submission
  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Update the card details state variables with form input values
    setCardNumber(e.currentTarget.cardNumber.value);
    setCardHolderName(e.currentTarget.cardHolderName.value);
    setExpMonth(e.currentTarget.expMonth.value);
    setExpYear(e.currentTarget.expYear.value);
    setCvc(e.currentTarget.cvc.value);

    // Set form submission flag to true
    setIsFormSubmitted(true);
  };

  const handleContinue = () => {
    // Reset the page by clearing the form data and resetting the submission flag
    setCardNumber("");
    setCardHolderName("");
    setExpMonth("");
    setExpYear("");
    setCvc("");
    setIsFormSubmitted(false);
  };

  return (
    <main className="lg:flex">
      <div className="bg-[url('/assets/left-bg.svg')] relative flex flex-col justify-center z-10 w-full lg:w-[400px] h-[200px] lg:h-screen ">
        <div className="bg-[url('/assets/card-front.svg')] p-6 absolute lg:static text-white flex w-[80%] flex-col rounded-lg bg-cover lg:w-[400px] lg:h-[30%] lg:ml-[30%] h-[80%] lg:left-0 lg:top:0 top-36 left-5 lg:mb-6 z-30 lg:z-20">
          <div className="hidden lg:flex lg:flex-col">
            <Image
              src="/assets/circle.svg"
              width={80}
              height={80}
              alt="circle"
              className=""
            />
          </div>
          <div className="lg:mt-8">
            <p className="text-2xl font-medium">
              {isFormSubmitted ? cardNumber : "0000 0000 0000 0000"}
            </p>
            <div className="flex justify-between mt-5">
              <p className="">
                {isFormSubmitted ? cardHolderName : "JANE APPLESEED"}
              </p>
              <p>{isFormSubmitted ? `${expMonth}/${expYear}` : "00/00"}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#DFE0E4] text-white flex lg:right-0 lg:top-0 right-5 top-5 flex-col absolute lg:static rounded-lg bg-cover w-[80%] lg:w-[400px] lg:h-[30%] lg:ml-[50%] mb-6 z-20">
          <div className="h-10 w-full bg-[#2F2F2F] mt-6"></div>
          <div className="bg-[#ADB5BE] rounded h-8 flex justify-end pt-1 px-3 my-5 mx-5">
            {isFormSubmitted ? cvc : "000"}
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/assets/dashes.svg"
              width={150}
              height={150}
              alt="dashes"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center content-center my-32 lg:my-0 w-full lg:w-[70%] ">
        <div className="flex flex-col w-full justify-center items-center content-center">
          {isFormSubmitted ? (
            <div className="text-center flex flex-col p-6 text-black">
              <Image
                src="/assets/tick.svg"
                width={80}
                height={80}
                alt="dashes"
                className="self-center"
              />
              <h1 className="text-[#21092F] my-2 text-3xl font-medium">
                THANK YOU!
              </h1>
              <p className="text-[#8F8694] my-2 text-xl font-medium">
                We’ve added your card details
              </p>
              <button
                className="bg-[#21092F] w-full my-3 rounded-lg text-white flex justify-center text-xl font-medium py-2"
                type="submit"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          ) : (
            <form className="lg:w-[40%] w-full px-5" onSubmit={handleConfirm}>
              <div className="flex flex-col my-3">
                <label
                  htmlFor="cardHolderName"
                  className="text-[#21092F] text-xs font-medium mb-1"
                >
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardHolderName"
                  name="cardHolderName"
                  placeholder="e.g. Jane Appleseed"
                  className="border w-full p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col my-3">
                <label
                  htmlFor="cardNumber"
                  className="text-[#21092F] text-xs font-medium mb-1 rounded-lg"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="e.g. 1234 5678 9123 0000"
                  className="border w-full p-2 rounded-lg"
                />
              </div>
              <div className="flex my-3">
                <div className="flex flex-col">
                  <label
                    htmlFor="expDate"
                    className="text-[#21092F] text-xs font-medium mb-1 rounded-lg"
                  >
                    Exp. Date (MM/YY)
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="expMonth"
                      name="expMonth"
                      placeholder="MM"
                      className="w-[25%] border p-2 mr-3 rounded-lg"
                    />
                    <input
                      type="text"
                      id="expYear"
                      name="expYear"
                      placeholder="YY"
                      className="w-[25%] border p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="cvc"
                    className="text-[#21092F] text-xs font-medium mb-1"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder="e.g. 123"
                    className="border w-[160%] -ml-[60px] rounded-lg p-2"
                  />
                </div>
              </div>
              <button
                className="bg-[#21092F] w-full my-3 rounded-lg text-white flex justify-center text-xl font-medium py-2"
                type="submit"
              >
                Confirm
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
