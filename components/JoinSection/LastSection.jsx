import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";

const LastSection = () => {
  return (
    <div className="w-full bg-primary pt-[150px] px-4 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mt-20 flex flex-col xl:flex-row gap:[75px] xl:gap-[150px]">
          <div>
            <div className="max-w-[715px] md:h-[288px] bg-white rounded-[19px] flex flex-col md:flex-row gap-8 p-8 relative">
              <div className="h-full flex items-center justify-center">
                <div className="w-[171px] h-[171px] rounded-full bg-primary flex justify-center items-center">
                  <img src="/shop-bag.svg" />
                </div>
              </div>
              <div className="text-left h-full flex flex-col justify-center">
                <h3 className="text-[25px] text-primary mb-2 text-center md:text-left">
                  About Lynk Town
                </h3>
                <p className="text-[16px] text-[#3B3B3B]">
                  We are a digital platform helping to build an ecosystem that
                  seamlessly connects creatives, business owners, suppliers,
                  customers, trading partners, to collaborate, grow businesses
                  and give the customers the best possible experience.
                </p>
              </div>
              <div className="w-[55px] h-[55px] rounded-full shadow-xl bg-white absolute -top-[20px] -right-[20px] flex justify-center items-center">
                <img src="/Vector.svg" alt="" srcset="" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <img
                className="max-w-[187px] max-h-[56px]"
                src="/Google_Play_Store_badge_EN.svg"
                alt=""
                srcset=""
              />
              <img
                className="max-w-[187px] max-h-[56px]"
                src="/Download_on_the_App_Store_Badge.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[75px] mg:gap-[150px] pt-10 text-left">
            <div className="space-y-2">
              <h3 className="text-[20px] text-white font-bold">Company</h3>

              <p className="text-[18px] text-white">About us</p>
              <p className="text-[18px] text-white">Contact us</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[20px] text-white font-bold">Contact us</h3>

              <p className="text-[18px] text-white flex items-start gap-3">
                <span>
                  <HiOutlineMail className="mt-2" />
                </span>
                contact@company.com
              </p>
              <p className="text-[18px] text-white flex items-start gap-3">
                <span>
                  <IoCallOutline className="mt-2" />
                </span>
                (414) 687 - 5892
              </p>
              <p className="text-[18px] text-white flex items-start gap-3">
                <span>
                  <IoLocationOutline className="mt-2" />
                </span>
                794 Mcallister St San Francisco, 94102
              </p>
              {/* <div className="text-[18px] text-white">Contact us</div> */}
            </div>
          </div>
        </div>

        <div className="text-white text-[16px] flex flex-col md:flex-row justify-between mt-20 border-t pt-3">
          <div>Copyright © 2022 LynkTown</div>
          <div className="flex flex-col md:flex-row mt-3 md:mt-0 space-y-2 md:space-y-0">
            <div className="px-2 md:border-r">All Rights Reserved </div>
            <div className="px-2 md:border-r">Terms and Conditions</div>
            <div className="px-2 md:border-r">Privacy Policy </div>
            <div className="px-2">For support</div>
            <IoLogoWhatsapp className="!mt-1 text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
