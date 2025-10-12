import React, { useState } from "react";
import Bulb from "./ProductNavItems/Bulb";
import Switches from "./ProductNavItems/Switches"
import Fan from "./ProductNavItems/Fan";
import Wires from "./ProductNavItems/Wires";
import Lights from "./ProductNavItems/Lights/Lights"
import Mcb from "./ProductNavItems/Mcb";
import Holder from "./ProductNavItems/Holder";
import Boxes from "./ProductNavItems/Boxes";
import Brands from "./ProductNavItems/Brands";

export default function ProductNav() {

  return (
    <div className="h-10 bg-gray-200 w-full text-black flex items-center px-4 sticky top-20 z-40">
      <div className="relative flex justify-around w-full pl-4">
       <Bulb/>
       <Switches/>
       <Fan/>
       <Wires/>
       <Lights/>
       <Mcb/>
       <Holder/>
       <Boxes/>
       <Brands/>
      </div>
    </div>
  );
}
