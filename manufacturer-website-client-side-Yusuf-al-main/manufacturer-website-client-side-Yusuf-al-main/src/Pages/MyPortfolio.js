import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="shadow-xl bg-slate-600 lg:w-[60%] w-fit mx-auto my-20 h-1/2 rounded-lg ">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        <div className="p-4">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5103AQFZF_K_2cc3OQ/profile-displayphoto-shrink_200_200/0/1549947875413?e=1657152000&v=beta&t=MyOWC43-OqnwX0hkEU03NdO5dgEeRP4zXpcSEZcCOrI"
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="bg-white col-span-2 p-4">
          <div>
            <h1 className="text-md p-4 bg-slate-600 text-white">
              Personal Information
            </h1>
            <h1 className="text-sm uppercase mt-3 mb-1">Name: </h1>
            <h1 className="text-md uppercase mb-3">Yusuf Al Naiem</h1>
            <h1 className="text-sm uppercase my-1">Email: </h1>
            <h1 className="text-md  mb-3">naiem.n123@gmail.com</h1>
            <h1 className="text-sm uppercase my-1">Address: </h1>
            <h1 className="text-md  mb-3">
              1383/05 Rayenda Bazar Sarankhola
              <br /> Bagerhat,Khulna,Bangladesh
            </h1>
          </div>
          <div>
            <h1 className="text-md p-4 bg-slate-600 text-white">
              Academic Information
            </h1>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>Examination name</th>
                    <th>Institution Name</th>
                    <th>Passing Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSC</td>
                    <td>Rayenda Pilot High School</td>
                    <td>2015</td>
                  </tr>

                  <tr>
                    <td>HSC</td>
                    <td>Saronkhola Govt College</td>
                    <td>2017</td>
                  </tr>

                  <tr>
                    <td>B.Tech</td>
                    <td>Lovely Professional University,India</td>
                    <td>2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h1 className="text-md p-4 bg-slate-600 text-white">Skills</h1>
            <div className="flex items-center">
              <div
                style={{ width: 120, height: 120 }}
                className="flex flex-col items-center"
              >
                <CircularProgressbar
                  className="mt-3"
                  styles={{ path: { stroke: `gray` } }}
                  value={70}
                  text={`70%`}
                />
                CSS
              </div>
              <div
                style={{ width: 120, height: 120 }}
                className="flex flex-col items-center"
              >
                <CircularProgressbar className="mt-3" value={68} text={`68%`} />
                Javascript
              </div>
              <div
                style={{ width: 120, height: 120 }}
                className="flex flex-col items-center"
              >
                <CircularProgressbar
                  className="mt-3"
                  styles={{ path: { stroke: `green` } }}
                  value={80}
                  text={`80%`}
                />
                HTML
              </div>
              <div
                style={{ width: 120, height: 120 }}
                className="flex flex-col items-center"
              >
                <CircularProgressbar
                  className="mt-3"
                  styles={{ path: { stroke: `blue` } }}
                  value={65}
                  text={`65%`}
                />
                Node Js
              </div>
              <div
                style={{ width: 120, height: 120 }}
                className="flex flex-col items-center"
              >
                <CircularProgressbar
                  className="mt-3"
                  styles={{ path: { stroke: `red` } }}
                  value={62}
                  text={`62%`}
                />
                React JS
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-md p-4 bg-slate-600 text-white mt-5">
              Important Links
            </h1>
            <p className="my-3">
              <b>Warehouse Management Project :</b>
              <a
                className="ml-2"
                href="https://bike-park-d18a5.web.app/"
                target="_blank"
              >
                Warehouse Management Project Link
              </a>
            </p>
            <p className="my-3">
              <b>Product Analysis Project :</b>
              <a
                className="ml-2"
                href="https://calm-snickerdoodle-e3f93c.netlify.app/"
                target="_blank"
              >
                Product analysis Project Link
              </a>
            </p>
            <p className="my-3">
              <b>Manufecture Project :</b>
              <a
                className="ml-2"
                href="https://tech-pc-1f59b.web.app"
                target="_blank"
              >
                Manufecture Project Link
              </a>
            </p>
            <p className="my-3">
              <b>LinkedIN :</b>
              <a
                className="ml-2"
                href="https://www.linkedin.com/in/yusuf-al-naiem-23662517b/?originalSubdomain=in"
                target="_blank"
              >
                LinkedIN Profile Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
