import React from 'react';
import Branch from './Branch';

function Branches() {
  return (
    <div className="">
      <h1 className="text-center">Our Branches</h1>
      <div className="flex flex-wrap justify-center">
        <Branch state="ABUJA, F.C.T" phone="+234(0)803 404 2781" />
        <Branch state="GOMBE" phone="+234(0)907 716 1025" />
        <Branch state="KANO" phone="+234(0)810 355 1496" />
        <Branch state="KEBBI" phone="+234(0)703 222 6508" />
        <Branch state="NIGER" phone="+234(0)807 625 5816" />
        <Branch state="SOKOTO" phone="+234(0)803 720 7898" />
      </div>
    </div>
  );
}

export default Branches;
