"use client";

import React from "react";
import Head from "next/head";
import style from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={style.bodyClass}>
        <div className="col">
          <div className="content-section" id="cs3">
            <img src="/ohin1.png" alt="" />
            <img src="/ohin2.png" alt="" />
            <img src="/ohin3.png" alt="" />
          </div>
        </div>
        {/* Page 2 */}
        <div className={style.page2}>
          <div className="content-section" id="p2cs">
            {/* #id="page2-Content section 1" */}
            <div className="p2cs-a" id="p2cs1">
              <div className="p2c1">
                <img src="/memorykid.png" alt="" />
                <h1>Дасгалын программ</h1>
              </div>

              <div className="p2c2">
                <p>
                  Монголын Оюун Ухааны Академи Та бүхэнд ой тогтоолтын хөтөлбөрт
                  зориулсан дасгалын MemoKid Math программаа хүргэж байна.
                  Амжилт хүсье!
                </p>
              </div>

              <div className="p2c3">
                {/* db=download button */}
                <button id="p2db-w">Windows хувилбар татах</button>
                <a href="#"> Мас хувилбар татах </a>
                <p>Программын хувилбар 3.0.8</p>
              </div>

              <div className="p2c4">
                <h3>Системийн шаардлага</h3>
                <p>
                  Super Memory программ нь Mac болон Windows үйлдлийн системд
                  зориулагдан бүтээгдсэн ба хамгийн багадаа дараах үзүүлэлт
                  бүхий систем дээр ажиллана. Windows: Windows 8 болон түүнээс
                  дээш хувилбар Windows 7(64bit)-ийн сүүлийн үеийн хувилбар дээр
                  ажиллана. Mac: Mac OS 10.13 болон түүнээс дээш хувилбар
                  Программаа суулгахаас өмнө үйлдлийн системээ сайтар шалгаарай.
                </p>
              </div>
            </div>

            {/* #id="page2-Content section 2" */}
            <div className="p2cs-b" id="p2cs2">
              <img src="/image1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className={style.page3}>
          <div className="content-section" id="p3cs">
            {/* #id="page3-Content section 1" */}
            <div className="p3cs-a" id="p3cs2">
              <img src="/image2.png" alt="" />
            </div>

            {/* #id="page3-Content section 2" */}
            <div className="p3cs-b" id="p3cs1">
              <div className="p3c1">
                <img src="/mathkid.png" alt="" />
                <h1>Дасгалын программ</h1>
              </div>

              <div className="p3c2">
                <p>
                  Монголын Оюун Ухааны Академи Та бүхэнд ой тогтоолтын хөтөлбөрт
                  зориулсан дасгалын MemoKid Math программаа хүргэж байна.
                  Амжилт хүсье!
                </p>
              </div>

              <div className="p3c3">
                {/* db=download button */}
                <button id="p3db-w">Windows хувилбар татах</button>
                <a href="#"> Мас хувилбар татах </a>
                <p>Программын хувилбар 3.0.8</p>
              </div>

              <div className="p3c4">
                <h3>Системийн шаардлага</h3>
                <p>
                  Super Memory программ нь Mac болон Windows үйлдлийн системд
                  зориулагдан бүтээгдсэн ба хамгийн багадаа дараах үзүүлэлт
                  бүхий систем дээр ажиллана. Windows: Windows 8 болон түүнээс
                  дээш хувилбар Windows 7(64bit)-ийн сүүлийн үеийн хувилбар дээр
                  ажиллана. Mac: Mac OS 10.13 болон түүнээс дээш хувилбар
                  Программаа суулгахаас өмнө үйлдлийн системээ сайтар шалгаарай.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="content-section" id="footercs">
            <div className="footercs-a">
              <div className="footerc-a1">
                <img src="/memok.png" alt="" />
              </div>

              <div className="footerc-a2">
                <p>
                  Хаяг: ХУД, 15-р хороо, Зайсан гудамж, Гэгээнтэн цогцолбор,
                  6-603 <br /> 120-ийн тэмээтэй хөшөөний зүүн урд талд
                </p>
              </div>

              <div className="footerc-a3">
                <p>Утас: 7000-2266 И-мэйл: support@mastermind.mn</p>
              </div>
            </div>
            <div className="footercs-b">
              <div className="footerc-b1">
                <img src="/facebook.png" alt="facebook" id="cs1-logo" />
                <img src="/Instagram.png" alt="instagram" id="cs1-logo" />
                <img src="/Youtube.png" alt="youtube" id="cs1-logo" />
                <img src="/Twitter.png" alt="twitter" id="cs1-logo" />
              </div>

              <div className="footerc-b2">
                <button className={style.cus}>Contact us</button>
              </div>
            </div>
          </div>
        </footer>

        <div className={style.Copyright}>Copyright © 2023, memokid.com</div>
      </div>
    </div>
  );
}
