"use client";
import {
  File,
  Menu,
  Minus,
  Pointer,
  Plus,
  VideoIcon,
  FileVideo,
  CirclePlay,
  FileQuestion,
} from "lucide-react";
import React, { useState } from "react";
import { coursecontent } from "../constants";

const ContentBar: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first section
  const [selectedItem, setSelectedItem] = useState<{
    sectionIndex: number;
    itemIndex: number;
  } | null>(null);

  const toggleSection = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleSelect = (
    sectionIndex: number,
    itemIndex: number,
    itemData: any
  ) => {
    setSelectedItem({ sectionIndex, itemIndex });

    // ✅ You can now do something with itemData
    console.log("Selected item data:", itemData);
  };

  return (
    <div>
      <div className="contenttop">
        <h1 className="playerheading">Contents</h1>
        <button>
          <Menu color="black" size={20} />
        </button>
      </div>

      {coursecontent.map((course, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div className="contentbar" key={idx}>
            <div className="contenttitle" onClick={() => toggleSection(idx)}>
              {isOpen ? (
                <Minus size={15} color="gray" />
              ) : (
                <Plus size={15} color="gray" />
              )}
              <h3 className="primarycol">{course.title}</h3>
            </div>

            <div className={`contentsubtitles-wrapper ${isOpen ? "open" : ""}`}>
              <div className="contentsubtitles">
                {course.subtitles.map((subs, index) => {
                  const isActive =
                    selectedItem?.sectionIndex === idx &&
                    selectedItem?.itemIndex === index;

                  return (
                    <div
                      className={`subs ${isActive ? "active-item" : ""}`}
                      key={index}
                      onClick={() => handleSelect(idx, index, subs)}
                      data-id={subs.id || `${idx}-${index}`} // optional identifier
                    >
                      {subs.type === "Quiz" ? (
                        <FileQuestion size={14} color="gray" />
                      ) : (
                        <CirclePlay size={14} color="black" />
                      )}
                      <p>
                        {/* {subs.type}: <span>{subs.subtitle}</span> */}
                        <span>{subs.subtitle}</span>
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
