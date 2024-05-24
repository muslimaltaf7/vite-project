import React from "react";

function CampaignInfo() {
  return (
    <div className="flex flex-col px-4 ">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl mt-24 font-bold text-center  text-[#05195F]">
          Everything you need to know about high‑performing <br /> campaigns.
        </h2>
      </div>
      <div className="relative w-full flex justify-center items-center mb-2">
        <div className="relative">
          <svg
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[1000px] h-[600px"
          >
            <g stroke="black" strokeWidth="4" fill="none">
              <path d="M150 450 L650 450 Q670 450 670 430 L670 150 Q670 130 650 130 L150 130 Q130 130 130 150 L130 430 Q130 450 150 450 Z" />
              <path d="M200 470 L600 470 Q620 470 620 450 L620 450" />
              <path d="M180 490 L620 490 Q640 490 640 470 L640 450" />
              <line x1="150" y1="490" x2="150" y2="470" />
              <line x1="650" y1="490" x2="650" y2="470" />
              <line x1="120" y1="510" x2="680" y2="510" />
              <rect
                x="170"
                y="170"
                width="460"
                height="240"
                fill="none"
                stroke="black"
                strokeWidth="4"
              />
              <foreignObject x="170" y="170" width="460" height="240">
                <div className="w-full h-full">
                  <iframe
                    width="460"
                    height="240"
                    src="https://www.youtube.com/embed/0VYeLZV-KMc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </foreignObject>
            </g>
          </svg>
          <div class="text-center px-2 py-4 mb-12">
            <a
              href="https://demandscience.com/resources/operation-content-syndication-make-your-b2b-content-soar/"
              class="inline-block text-[#D52C5A] font-bold px-6 py-2 rounded-full border border-gray-900 "
            >
              Like what you see? View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignInfo;
