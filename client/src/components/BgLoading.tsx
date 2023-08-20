import React from "react";

function BgLoading() {
  return (
    <div className="bg-slate-950 text-white p-10 rounded-lg h-[75vh] overflow-scroll relative">
      <img
        className={`top-[50%] translate-y-[-50%] right-[50%] translate-x-[-50%] absolute  w-12 h-12 searchLoad`}
        src="/icons/loading.svg"
        alt="loading icon"
      />
    </div>
  );
}

export default BgLoading;
