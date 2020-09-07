import React from 'react';
import Branch from './Branch';

function Branches() {
  return (
    <div className="">
      <h1 className="text-center">Our Branches</h1>
      <div className="flex flex-wrap justify-center">
        <Branch
          state="ABUJA, F.C.T"
          phone="+234(0)803 404 2781"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599461483/har/abuja_city_gate_f1oxhp.jpg"
        />
        <Branch
          state="GOMBE"
          phone="+234(0)907 716 1025"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599462653/har/Gombe-State_cnjuiu.jpg"
        />
        <Branch
          state="KANO"
          phone="+234(0)810 355 1496"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599462304/har/kano_vurwiz.jpg"
        />
        <Branch
          state="KEBBI"
          phone="+234(0)703 222 6508"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599462861/har/kebbi_vbimfg.jpg"
        />
        <Branch
          state="NIGER"
          phone="+234(0)807 625 5816"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599462927/har/Zuma_Rock_wzms6d.jpg"
        />
        <Branch
          state="SOKOTO"
          phone="+234(0)803 720 7898"
          background="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1599463028/har/sokoto_h31mxg.jpg"
        />
      </div>
    </div>
  );
}

export default Branches;
