import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constant";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState({});
  const [keywordModal, setKeywordModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  function fetchNews() {
    axios
      .get(API_URL + "/news")

      .then((res) => setNews(res.data))
      .catch((err) => {
        if (err.response?.status === 401) {
          localStorage.clear();
          navigate("/");
        }
        setError(err.response.data);
      });
  }

  return (
    <>
    <div className="min-h-screen bg-white text-black p-10">
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Starcore</h1>
        <div className="flex items-center gap-4">
          <button>
            <img
              src="src/assets/images/notification.png"
              alt="notif"
              className="w-5 h-5"
            />
          </button>
          <button>
            <img
              src="src/assets/images/account_circle.png"
              alt="notif"
              className="w-5 h-5"
            />
          </button>
        </div>
      </nav>

      <div className="flex gap-10">
        {/* article atau feeds */}
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-5">Starcore News</h2>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full border border-gray-300 px-5 py-2 mb-10 bg-[#F2F2F2]"
          />

          <h3 className="text-xl font-bold mb-4 flex justify-start">
            News History
          </h3>

          {/* Map news history dari API */}
          {[1].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start border-b py-6"
            >
              <div className="flex flex-col text-left gap-1">
                <p className="text-xs text-gray-500">by Cindy</p>
                <h4 className="font-bold text-lg">
                  AI–Native Test <br /> Automation is Here
                </h4>
                <p className="text-sm mt-2 text-gray-600 max-w-md">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
              <img
                src=""
                alt=""
                className="rounded-md w-[120px] h-[80px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* user nya */}
        <div className="w-1/3 pl-6 border-l">
          <h3 className="font-bold text-md mb-2">Subscribed</h3>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full border border-gray-300 px-4 py-1.5 mb-4 bg-[#F2F2F2]"
          />

          {[1].map((item, i) => (
            <div key={i} className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/30?img=1"
                  alt="User"
                  className="rounded-full w-8 h-8"
                />
                <p>El Armandio</p>
              </div>
              <button className="text-xl font-bold">＋</button>
            </div>
          ))}
          <div className="flex justify-end">
            <button className="bg-[#C4E0E5] text-black rounded-full px-6 py-2 mt-3">
              Send
            </button>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-md mb-3">Recommended Topics</h3>
            <div className="flex flex-wrap gap-3">
              {["sport"].map((topic, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#F2F2F2] text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-blue-500 cursor-pointer flex justify-start">
              See more
            </p>
          </div>
        </div>
      </div>
    </div>

    {keywordModal && (
      <input type="text" />
    )}
    </>
  );
}
