"use client"

import Link from "next/link";
import { RoundButton } from "@/components";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Inquiry } from "@/types/inquiry";



export default function Form() {

const [formData, setFormData] = useState<Omit<Inquiry, "timestamp">>({
    name: "",
    company: "",
    projectDescription: "",
    deadline: "",
    budget: "",
    email: "",
    extraDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async () => {
    if (
  !formData.name ||
  !formData.company ||
  !formData.projectDescription ||
  !formData.deadline ||
  !formData.budget ||
  !formData.email
) {
  alert("Please fill in all required fields.");
  return;
}
    try {
          if (!formData.name || !formData.company || !formData.email) {
            alert("Please fill in all required fields.");
}
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      alert("Submitted successfully!");
    } catch (err) {
      console.error("Error submitting:", err);
      alert("Something went wrong.");
    }
  };




	return (
	<section className="w-full padding-x padding-y">
  <div className="w-full flex flex-col gap-[15px]">
    {/* Name and Company */}
    <div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
      <div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            Hi, I’m
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Your name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
          />
        </div>
      </div>
      <div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            from
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name*"
            className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
          />
        </div>
      </div>
    </div>

    {/* Goal */}
    <div className="w-full flex gap-[10px]">
      <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            I’m looking for support with
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Briefly describe your project*"
            className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
          />
        </div>
      </div>
    </div>

    {/* Deadline */}
    <div className="w-full flex gap-[10px]">
      <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            Ideally, I’d like it done by
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            placeholder="Timeline / Deadline*"
            className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
          />
        </div>
      </div>
    </div>

    {/* Budget */}
    <div className="w-full flex gap-[10px]">
      <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            My budget is around
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Estimated budget*"
            className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
          />
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="w-full flex gap-[10px]">
      <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            You can reach me at
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address*"
            className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
          />
        </div>
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            to get started.
          </h2>
        </div>
      </div>
    </div>

    {/* Extra Details */}
    <div className="w-full flex gap-[10px]">
      <div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
        <div className="xl:min-w-max lg:min-w-max md:min-w-max">
          <h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
            Anything else you’d like to share?
          </h2>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="extraDetails"
            value={formData.extraDetails}
            onChange={handleChange}
            placeholder="More details, context, or vision..."
            className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Consent + Button */}
  <div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
    <div className="flex sm:flex-col xm:flex-col gap-[25px]">
      <div className="flex gap-[10px] items-center">
        <div className="flex gap-[10px]">
          <input type="checkbox" className="w-[30px]" />
          <p className="paragraph text-secondry font-NeueMontreal font-normal">
            I agree to the
          </p>
        </div>
        <Link
          className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
          href="/privacy">
          Privacy Policy
        </Link>
      </div>
      <div onClick={handleSubmit} className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
        <RoundButton
          bgcolor="#212121"
          href="/"
          title="Send Inquiry"
          className="bg-white text-black"
          style={{ color: "#fff" }}
        />
      </div>
    </div>
  </div>
</section>

	);
}