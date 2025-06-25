"use client";
import { useState } from "react";
import Link from "next/link";
import { FilterSvg, HomeSvg } from "@/components/svg";
import CourseFilterDropdownArea from "./course-filter/course-filter-dropdown-area";
import FilterSearchTerm from "@/components/form/filter-search-term-form";
import "@/assets/css/main.css";
import GridListToggle from "./course-filter/grid-list-toggle";
import HeaderTwo from "@/components/header/header-two";
import CustomHeader from "@/components/header/custom-header/CustomHeader";

type IProps = {
  spacing?: string;
  totalItems?: number;
};
export default function CourseFilterBanner({
  spacing = "pt-180 pb-220",
  totalItems = 48,
}: IProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");

  return (
    <section className={`tp-course-filter-area p-relative ${spacing}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-breadcrumb__content-filter mb-50">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/">
                    <HomeSvg />
                  </Link>
                </span>
                <span className="color">Home / Courses</span>
              </div>
              <h3 className="h3Title">All Courses</h3>
              <p>
                We have the largest collection of <span>{totalItems}</span>{" "}
                courses
              </p>
            </div>
            <div className="tp-course-filter-wrap p-relative">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-left d-flex align-items-center">
                    <GridListToggle
                      activeView={activeView}
                      onToggle={setActiveView}
                    />
                    <div className="tp-course-filter-top-result mb-20">
                      <p>Showing 1–4 of 4 results</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-right d-flex align-items-center justify-content-start justify-content-lg-end">
                    <div className="tp-course-filter-top-right-search d-none d-lg-block mb-20">
                      <FilterSearchTerm />
                    </div>
                    <div
                      className="tp-course-filter-btn mb-20"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        type="button"
                        className="tp-filter-btn filter-show-dropdown-btn filter-open-btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "6px 12px",
                        }}
                      >
                        <span>
                          <FilterSvg />
                        </span>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tp-filter-dropdown-area tp-filter-dropdown-wrapper d-none d-md-block ${
                  isFilterOpen ? "filter-dropdown-opened" : ""
                }`}
              >
                <CourseFilterDropdownArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
