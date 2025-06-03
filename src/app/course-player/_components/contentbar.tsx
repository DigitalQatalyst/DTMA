import { File, Menu, Minus, Pointer } from "lucide-react";
import React from "react";
import { coursecontent } from "../constants";

const ContentBar: React.FC = () => {
  return (
    <div>
      <div className="contenttop">
        <h1 className="playerheading">Contents</h1>
        <button>
          <Menu color="black" size={20} />
        </button>
      </div>

      {/* content bar */}
      {coursecontent.map((course, idx) => {
        return (
          <div className="contentbar" key={idx}>
            <div className="contenttitle">
              <Minus size={15} color="gray" />
              <h3 className="primarycol">{course.title}</h3>
            </div>
            <div className="contentsubtitles">
              <div className="w-full">
                {course.subtitles.map((subs, index) => {
                  return (
                    <div className="subs" key={index}>
                      {subs.type === "Quiz" ? (
                        <File size={14} color="gray" />
                      ) : (
                        <Pointer color="white" size={14} />
                      )}
                      <p className="">
                        {subs.type}:<span>{subs.subtitle}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentBar;
