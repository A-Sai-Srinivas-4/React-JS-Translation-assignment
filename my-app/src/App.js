import * as React from "react";
import { LineChart, Line } from "recharts";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import World from "./components/World";

import "./App.css";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 18698,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 55800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 55908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 80000,
    amt: 2181,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 70800,
    amt: 2290,
  },
  {
    name: "Page H",
    uv: 2780,
    pv: 80908,
    amt: 2000,
  },
  {
    name: "Page I",
    uv: 1890,
    pv: 99800,
    amt: 2181,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 3698,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 55800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 45908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 90000,
    amt: 2181,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 30800,
    amt: 2290,
  },
  {
    name: "Page H",
    uv: 2780,
    pv: 85908,
    amt: 2000,
  },
  {
    name: "Page I",
    uv: 1890,
    pv: 99000,
    amt: 2181,
  },
];

const data3 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 10698,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 55800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 45908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 70000,
    amt: 2181,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 90800,
    amt: 2290,
  },
  {
    name: "Page H",
    uv: 2780,
    pv: 75908,
    amt: 2000,
  },
  {
    name: "Page I",
    uv: 1890,
    pv: 99800,
    amt: 2181,
  },
];

const data4 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 18698,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 10800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 55908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 30000,
    amt: 2181,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 90800,
    amt: 2290,
  },
  {
    name: "Page H",
    uv: 2780,
    pv: 90508,
    amt: 2000,
  },
  {
    name: "Page I",
    uv: 1890,
    pv: 99999,
    amt: 2181,
  },
];

export default function App() {
  return (
    <div className="App">
      <nav className="nav-bar-container">
        <ul className="options-container">
          <li className="menu-item">Projects</li>
          <li className="menu-item">Languages</li>
          <li className="menu-item">Language Translation Engines</li>
          <li className="menu-item active">
            Dashbord <br />
            <p className="underline"></p>
          </li>
          <li className="menu-item">User Management</li>
        </ul>
      </nav>
      <div className="app-container">
        <div className="date-container">
          <div className="date-input-container">
            <p className="date-heading">Date</p>
            <input type="date" className="date-input" />
            <p className="dash">-</p>
            <input type="date" className="date-input" />
          </div>
        </div>
        <div className="cards-container">
          <div className="card total">
            <div className="count-icon-container">
              <h1 className="count-text">525</h1>
              <BsFillPiggyBankFill className="icon" />
            </div>
            <h1 className="translation-heading">Total Onboarded Projects</h1>
          </div>
          <div className="card in-progress">
            <div className="count-icon-container">
              <h1 className="count-text">282</h1>
              <BiTimeFive className="icon" />
            </div>
            <h1 className="translation-heading">Translation In Progress</h1>
          </div>
          <div className="card completed">
            <div className="count-icon-container">
              <h1 className="count-text">243</h1>
              <AiFillCheckCircle className="icon" />
            </div>
            <h1 className="translation-heading">Translations Completed</h1>
          </div>
        </div>
        <div className="line-chart-container">
          <div className="line-chart-characters-container">
            <p className="line-text">Characters Translated</p>
            <h1 className="translation-count">65,894,387</h1>
            <div className="line-container">
              <LineChart width={700} height={60} data={data1}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="rgb(249, 249, 89)"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
          <div className="line-chart-characters-container">
            <p className="line-text">Translation Memory Capacity</p>
            <h1 className="translation-count">5GB</h1>
            <div className="line-container">
              <LineChart width={700} height={60} data={data2}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#800000"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
        </div>

        <div className="line-chart-container">
          <div className="line-chart-characters-container">
            <p className="line-text">Human in The Middle Reviews</p>
            <h1 className="translation-count">43,487</h1>
            <div className="line-container">
              <LineChart width={700} height={60} data={data3}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#9400d3"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
          <div className="line-chart-characters-container">
            <p className="line-text">Total Saving</p>
            <h1 className="translation-count">$1,376,923</h1>
            <div className="line-container">
              <LineChart width={700} height={60} data={data4}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#87CEEB"
                  strokeWidth={2}
                />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="world-map-and-region-data-heading-container">
          <h1 className="region-heading">Translations by Region</h1>
          <div className="world-map-region-container">
            <div className="world-map-container">
              <World />
            </div>
            <div className="region-sheet-container">
              <table>
                <tr>
                  <td>USA</td>
                  <td>176,880</td>
                </tr>
                <tr>
                  <td>France</td>
                  <td>54,748</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td>86,068</td>
                </tr>
                <tr>
                  <td>China</td>
                  <td>96,304</td>
                </tr>
                <tr>
                  <td>Mexico</td>
                  <td>75,969</td>
                </tr>
                <tr>
                  <td>Indonesia</td>
                  <td>66,870</td>
                </tr>
                <tr>
                  <td>Brazil</td>
                  <td>14,757</td>
                </tr>
                <tr>
                  <td>Philippines</td>
                  <td>77,482</td>
                </tr>
                <tr>
                  <td>Cuba</td>
                  <td>18,418</td>
                </tr>
                <tr>
                  <td>Iran</td>
                  <td>74,834</td>
                </tr>
                <tr>
                  <td>UK</td>
                  <td>89,934</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>25,808</td>
                </tr>
                <tr>
                  <td>Africa</td>
                  <td>93,998</td>
                </tr>
                <tr>
                  <td>Argentina</td>
                  <td>72,762</td>
                </tr>

              </table>
            </div>
          </div>
        </div>
        <div className="language-sheet-container">
              <table>
                <tr className="language-text">
                  <td  >Translation by Language</td>
                  <td ></td>
                </tr>
                <tr>
                  <td>Japanese</td>
                  <td>82,776</td>
                </tr>
                <tr>
                  <td>Portuguese</td>
                  <td>75,477</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td>59,055</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>58,150</td>
                </tr>
                <tr>
                  <td>Italian</td>
                  <td>56,956</td>
                </tr>
                <tr>
                  <td>Hindi</td>
                  <td>43,229</td>
                </tr>
                <tr>
                  <td>Spanish</td>
                  <td>42,757</td>
                </tr>
                <tr>
                  <td>Turkish</td>
                  <td>38,482</td>
                </tr>
                <tr>
                  <td>Russian</td>
                  <td>26,933</td>
                </tr>
                

              </table>
            </div>
      </div>
    </div>
  );
}
