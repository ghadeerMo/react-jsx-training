import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function ToggleMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => setDark(!dark)}
        className="text-4xl gap-2 px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 transition"
      >
        {dark ? (
          <IoSunnyOutline className="text-yellow-400" />
        ) : (
          <IoMoonOutline className="text-blue-400" />
        )}
      </button>
      <h1 className="text-4xl font-bold mt-8">
        {dark ? "I'm Dark Mode" : "I'm Light Mode"}
      </h1>
    </div>
  );
}

export default ToggleMode;
