import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MoreHorizontal } from "lucide-react";
import React from "react";

// Create arrays for mesh gradient images to map over them
const meshImages = [
  { id: 101, src: "", alt: "Mesh 101" },
  { id: 102, src: "", alt: "Mesh 102" },
  { id: 103, src: "", alt: "Mesh 103" },
  { id: 104, src: "", alt: "Mesh 104" },
  { id: 105, src: "", alt: "Mesh 105" },
  { id: 106, src: "", alt: "Mesh 106" },
  { id: 107, src: "", alt: "Mesh 107" },
  { id: 108, src: "", alt: "Mesh 108" },
  { id: 109, src: "", alt: "Mesh 109" },
  { id: 110, src: "", alt: "Mesh 110" },
  { id: 111, src: "", alt: "Mesh 111" },
  { id: 112, src: "", alt: "Mesh 112" },
  { id: 113, src: "", alt: "Mesh 113" },
  { id: 114, src: "", alt: "Mesh 114" },
  { id: 115, src: "", alt: "Mesh 115" },
  { id: 116, src: "", alt: "Mesh 116" },
  { id: 117, src: "", alt: "Mesh 117" },
  { id: 118, src: "", alt: "Mesh 118" },
  { id: 119, src: "", alt: "Mesh 119" },
  { id: 120, src: "", alt: "Mesh 120" },
];

// Additional mesh variants
const meshVariants = [
  { id: "106-2", src: "", alt: "Mesh 106-2" },
  { id: "106-3", src: "", alt: "Mesh 106-3" },
  { id: "114-2", src: "", alt: "Mesh 114-2" },
  { id: "114-3", src: "", alt: "Mesh 114-3" },
  { id: "117-2", src: "", alt: "Mesh 117-2" },
  { id: "117-3", src: "", alt: "Mesh 117-3" },
  { id: "118-2", src: "", alt: "Mesh 118-2" },
  { id: "118-3", src: "", alt: "Mesh 118-3" },
  { id: "120-2", src: "", alt: "Mesh 120-2" },
];

// Group mesh images for display rows
const meshRows = [
  [
    meshImages[1],
    meshImages[6],
    meshImages[15],
    meshImages[18],
    meshImages[12],
  ],
  [meshImages[2], meshImages[10], meshImages[9], meshImages[7], meshImages[3]],
  [meshImages[0], meshImages[4], meshImages[8], meshImages[14], meshImages[11]],
  [
    meshImages[16],
    meshImages[17],
    meshImages[19],
    meshImages[13],
    meshImages[5],
  ],
  [
    { id: "image", src: "", alt: "Mesh Image" },
    meshVariants[2],
    meshVariants[4],
    meshVariants[6],
    meshVariants[0],
  ],
  [
    meshVariants[8],
    meshVariants[3],
    meshVariants[5],
    meshVariants[7],
    meshVariants[1],
  ],
];

const Cover = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden bg-[url(/cover.png)] bg-cover bg-[50%_50%] w-[1920px] h-[1080px]">
        <div className="relative top-[-609px] w-[2617px] h-[1957px]">
          <div className="absolute top-0 left-0 w-[2617px] h-[1957px]">
            <img
              className="absolute w-[1435px] h-[383px] top-[1306px] left-0"
              alt="Vector"
              src=""
            />

            <img
              className="absolute w-[1435px] h-[383px] top-[1306px] left-0"
              alt="Vector"
              src=""
            />

            <Card className="absolute top-[731px] left-[200px] bg-[#ffffff33] rounded-[20px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] border-none">
              <CardContent className="flex flex-col items-start gap-10 px-[50px] py-10">
                <div className="flex flex-col items-start gap-6 relative">
                  <Badge className="h-[100px] px-[30px] py-0 rounded-[20px] [background:linear-gradient(0deg,rgba(190,103,0,1)_0%,rgba(190,103,0,1)_100%)] border-none">
                    <span className="relative w-fit mt-[-13.00px] mb-[-11.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[42px] tracking-[0] leading-[124px] whitespace-nowrap">
                      100+
                    </span>
                  </Badge>

                  <img
                    className="relative w-[427.95px] h-[163.46px] object-cover"
                    alt="Free mesh gradients"
                    src=""
                  />
                </div>

                <div className="flex items-center gap-[65px] relative self-stretch w-full">
                  <div className="flex items-center justify-center gap-3 pl-2 pr-[18px] py-1.5 bg-[#0000001a] rounded-[80px] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)]">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback>BP</AvatarFallback>
                    </Avatar>

                    <a
                      className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0.24px] leading-[normal] underline"
                      href="https://www.instagram.com/designedge3/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @bprashant3
                    </a>
                  </div>

                  <Button
                    variant="ghost"
                    className="flex items-center justify-center gap-2.5 p-2 rounded-lg h-auto"
                  >
                    <div className="flex w-9 h-9 items-center justify-center bg-white rounded">
                      <BookOpen className="w-8 h-8 text-black" />
                    </div>

                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Design Resources
                    </span>
                  </Button>
                </div>

                <div className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0] leading-[75px]">
                  100+ Mesh gradients
                  <br />
                  High resolution PNG
                  <br />
                  Extra helpful resource
                  <br />4 Different types
                </div>
              </CardContent>
            </Card>

            <div className="inline-flex flex-col items-start justify-center gap-20 absolute top-[179px] left-[1113px] rotate-[-23.00deg]">
              {meshRows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]"
                >
                  {row.map((mesh, index) => {
                    // Apply different styling based on the mesh ID and position
                    let imgClasses = "relative rotate-[23.00deg] object-cover";

                    if (mesh.id === 102) {
                      imgClasses +=
                        " w-[262.25px] h-[59.77px] mb-[-23.08px] ml-[-70.68px]";
                    } else if (mesh.id === 107) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-892.91px] ml-[-2539.92px]";
                    } else if (mesh.id === 116) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-994.50px] ml-[-2300.59px]";
                    } else if (mesh.id === 119) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-1096.09px] ml-[-2061.26px]";
                    } else if (mesh.id === 113) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-1197.68px] ml-[-1821.93px]";
                    } else if (mesh.id === 103) {
                      imgClasses +=
                        " w-[262.25px] h-[262.25px] mt-[-31.12px] mb-[-31.12px] ml-[-31.12px]";
                    } else if (mesh.id === 111) {
                      imgClasses += " w-[262.25px] h-[215.92px] mb-[-29.28px]";
                    } else if (mesh.id === 110) {
                      imgClasses += " w-[262.25px] h-[114.33px] mb-[-25.24px]";
                    } else if (mesh.id === 108) {
                      imgClasses += " w-[242.6px] h-[12.74px] mb-[-17.37px]";
                    } else if (mesh.id === 104) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-917.68px] ml-[-1821.93px]";
                    } else if (mesh.id === 101) {
                      imgClasses +=
                        " w-[262.25px] h-[262.25px] mt-[-31.12px] mb-[-31.12px] ml-[-31.12px]";
                    } else if (mesh.id === 105 || mesh.id === 109) {
                      imgClasses +=
                        " w-[262.25px] h-[262.25px] mt-[-31.12px] mb-[-31.12px]";
                    } else if (mesh.id === 115) {
                      imgClasses +=
                        " w-[133.2px] h-[262.25px] mt-[-56.34px] mb-[-5.91px]";
                    } else if (mesh.id === 112) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-637.68px] ml-[-1821.93px]";
                    } else if (mesh.id === 117) {
                      imgClasses +=
                        " w-[262.25px] h-[262.25px] mt-[-31.12px] mb-[-31.12px] ml-[-31.12px]";
                    } else if (mesh.id === 118 || mesh.id === 120) {
                      imgClasses +=
                        " w-[262.25px] h-[262.25px] mt-[-31.12px] mb-[-31.12px]";
                    } else if (mesh.id === 114) {
                      imgClasses += " w-[23.79px] h-[262.25px] mt-[-77.71px]";
                    } else if (mesh.id === 106) {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-357.68px] ml-[-1821.93px]";
                    } else if (mesh.id === "image") {
                      imgClasses +=
                        " w-[262.25px] h-[251.51px] mt-[-30.70px] mb-[-20.81px] ml-[-29.03px]";
                    } else if (mesh.id === "114-2") {
                      imgClasses +=
                        " h-[262.25px] mt-[-31.12px] mb-[-31.12px] w-[262.25px]";
                    } else if (mesh.id === "117-2") {
                      imgClasses +=
                        " w-[153.72px] h-[262.25px] mt-[-52.33px] mb-[-9.92px]";
                    } else if (mesh.id === "118-2") {
                      imgClasses +=
                        " w-[200px] h-[200px] mt-[-23.91px] ml-[-2061.26px]";
                    } else if (mesh.id === "106-2") {
                      imgClasses +=
                        " w-[200px] h-[200px] mb-[-77.68px] ml-[-1821.93px]";
                    } else if (mesh.id === "120-2") {
                      imgClasses +=
                        " w-[200px] h-[200px] mt-[-608.68px] ml-[-2779.25px]";
                    } else if (mesh.id === "114-3") {
                      imgClasses += " h-[95.36px] mt-[-24.49px] w-[262.25px]";
                    } else if (mesh.id === "117-3") {
                      imgClasses += " w-[44.31px] h-[196.95px] mt-[-71.10px]";
                    } else if (mesh.id === "118-3") {
                      imgClasses +=
                        " w-[200px] h-[200px] mt-[-303.91px] ml-[-2061.26px]";
                    } else if (mesh.id === "106-3") {
                      imgClasses +=
                        " w-[200px] h-[200px] mt-[-202.32px] ml-[-1821.93px]";
                    } else {
                      imgClasses += " w-[200px] h-[200px]";
                    }

                    return (
                      <img
                        key={`mesh-${mesh.id}-${index}`}
                        className={imgClasses}
                        alt={mesh.alt}
                        src={mesh.src}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <MoreHorizontal className="absolute w-[91px] h-[149px] top-[1074px] left-[885px]" />
        </div>
      </div>
    </div>
  );
};

export default Cover;