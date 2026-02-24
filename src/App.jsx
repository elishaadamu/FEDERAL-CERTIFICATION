/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import annualObligatedProjectsImg from "./assets/Annual Listing of Obligated Projects.png";
import reportingProgressImg from "./assets/Reporting of Progress Toward Achieving Targets.png";
import multimodalPlanImg from "./assets/2025 Regional Multimodal Transportation Plan.png";
import titleVIImg from "./assets/2024 Title VI Plan.png";

const HierarchicalTree = () => {
  // The JSON data from your uploaded file
  const data = {
    name: "Performance Measures",
    children: [
      {
        name: "Review",
        children: [
          {
            name: "Corrective Actions",
            description: "PPT Corrective Actions",
            children: [
              { 
                name: "MPO’s Website",
                iframeUrl: "https://tri-cities-plan.vercel.app/"
              },
              { 
                name: "Crater PDC Transportation",
                iframeUrl: "https://craterpdc.org/our-works/transportation/"
              },
            ],
          },
          {
            name: "Recommendations",
            description: "PPT Recommendations",
            children: [
              { 
                name: "Develop goals and objectives",
                iframeUrl: "https://mtp-cmp-pm-dash-v1.netlify.app/"
              },
              { 
                name: "Include transit projects beyond the first six years",
                content: [
                  { label: "Status", text: "In Progress" },
                ]
              },
              { 
                name: "Include vision statement",
                content: [
                  { label: "Adopted Plan 2050 Vision Statement", text: "An integrated network, cost effective, multimodal transportation system that safely and efficiently moves people and goods throughout the region in an equitable and environmentally responsible manner to support economic prosperity and improved quality of life for all users." },
                  { label: "Adopted Plan 2045 Vision Statement", text: "Encourage a transportation system that equitably improves safety, economic vitality, and quality of life for people living and working in the Tri-Cities area." }
                ]
              },
              { 
                name: "Linking investment to performance targets",
                content: [
                  { label: "MTIP - Funding for Safety Projects", text: "Safety targeted improvements are implemented through HSIP projects. Each year Virginia is allocated ~$55 Million for HSIP and $5 Million for Railway Grade Crossing improvements. Virginia is also subject to a Penalty Transfer provision, Section 154 “Open Container”, such that 2.5% of NHPP funds are reserved for either NHTSA Alcohol-Impaired Driving or HSIP projects. The State determines what proportion goes to each program. Of the HSIP funds, about 10 percent is set aside for non-motorized safety projects and 20 percent of the remainder for improvements on locally-maintained roadways." }
                ]
              },
              { 
                name: "3-C Agreement <> IIJA",
                content: [
                  { label: "Status", text: "In Progress" },
                ]
              },
              { 
                name: "Title VI training",
                content: [{ label: "Recommendation", text: "Schedule comprehensive Title VI compliance training for all new leadership and staff members." }]
              },
              { 
                name: "Replace buses with CVTA Revenues",
                content: [
                  { label: "Status", text: "In Progress" },
                ]
              },
              { 
                name: "Have a complete Annual Listing of Obligated Projects",
                imageUrl: annualObligatedProjectsImg,
              },
            ],
          },
        ],
      },
      {
        name: "MTP",
        children: [
          {
            name: "Metropolitan Transportation Plan",
            description: "Plan Elements",
            children: [
              { 
                name: "Financial Planning",
                content: [
                  { label: "Financial Planning", text: "a. Fiscal constraint (Revenue – Cost ≥ $0)\nb. Illustrative projects" }
                ]
              },
              { 
                name: "PBPP (Performance Based Planning and Programming)",
                imageUrl: reportingProgressImg,
                content: [
                  { label: "PBPP", text: "a. Development and Sharing of Performance Management Data\nb. Selection of Performance Targets\nc. Reporting of Performance Targets\nd. Reporting of Progress Toward Achieving Targets (System Performance Report)" }
                ]
              },
              { 
                name: "Public Participation for MTP",
                content: [
                  { label: "Public Participation", text: "a. Meeting notices\n        i. one to two weeks in advances\n        ii. electronic (website, SM), non-electronic-local libraries, Newspapers, public outreach" }
                ]
              },
              
            ],
          },
        ],
      },
      {
        name: "UPWP",
        children: [
          {
            name: "Unified Planning Work Program",
            description: "Program Management",
            children: [
              { 
                name: "Budgeting Process & Coordination",
                content: [{ label: "Budgeting", text: "a. Internal Coordination\nb. External Coordination" }]
              },
              { 
                name: "Ensure Consistency with VDOT",
                content: [{ label: "Consistency", text: "a. Regional Priorities\nb. Use of VDOT approved Templates & Forms" }]
              },
              { 
                name: "Amendments and Modifications",
                content: [{ label: "Management", text: "Procedures for updating the UPWP mid-cycle to account for new funding or changing project priorities." }]
              },
              { 
                name: "Fiscal Monitoring",
                content: [{ label: "Monitoring", text: "a. Routine invoice payment\nb. Quarterly Report" }]
              },
             
             
            ],
          },
        ],
      },
      {
        name: "Agreements",
        children: [
          {
            name: "Agreements & Bylaws",
            description: "Core Documents",
            children: [
              { 
                name: "Agreements (Air Quality)",
                content: [{ label: "Agreements", text: "Inter-agency agreements ensuring that transportation plans conform to state air quality implementation plans." }]
              },
              { 
                name: "3C Agreement",
                content: [{ label: "Agreements", text: "The foundational Continuous, Cooperative, and Comprehensive (3C) agreement between the MPO, the State, and transit operators." }]
              },
              { 
                name: "Bylaws",
                content: [{ label: "Agreements", text: "The governing rules for the MPO Policy Board and Technical Advisory Committee operations and decision-making." }]
              },
            ],
          },
        ],
      },
      {
        name: "TIP",
        children: [
          {
            name: "Transportation Improvement Program",
            description: "Project Programming",
            children: [
              { 
                name: "Annual Listing of Obligated Projects",
                imageUrl: annualObligatedProjectsImg,
              },
              { 
                name: "Public Comments",
                iframeUrl: "https://tcampo-tip-2050-projects.netlify.app/"
              },
            ],
          },
        ],
      },
      {
        name: "Multimodal",
        children: [
          {
            name: "Freight & Transit",
            description: "Specialized Planning",
            children: [
              { 
                name: "2025 Regional Multimodal Transportation Plan",
                imageUrl: multimodalPlanImg,
              },
              { 
                name: "Freight Planning",
                iframeUrl: "/iframe/CUCF_TriCities_Map.html"
              },
            ],
          },
        ],
      },
      {
        name: "Participation",
        children: [
          {
            name: "Participation Plan",
            description: "Outreach & Compliance",
            children: [
              { 
                name: "Participation Plan",
                imageUrl: titleVIImg,
                content: [{ label: "Participation Plan", text: "a. 2024 Title VI Plan" }]
              },

            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-gray-200 h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-grow overflow-hidden">
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default HierarchicalTree;
