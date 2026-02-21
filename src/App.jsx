/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

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
            ],
          },
          {
            name: "Recommendations",
            description: "PPT Recommendations",
            children: [
              { 
                name: "Develop goals and objectives",
                content: [{ label: "Recommendation", text: "Establish clear, measurable goals for the upcoming fiscal year based on regional growth patterns." }]
              },
              { 
                name: "Include transit projects beyond the first six years",
                content: [{ label: "Recommendation", text: "Incorporate long-term transit planning that extends to a 10-20 year horizon." }]
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
                content: [{ label: "Recommendation", text: "Align all current 3-C agreements with the latest IIJA (Infrastructure Investment and Jobs Act) requirements." }]
              },
              { 
                name: "Title VI training",
                content: [{ label: "Recommendation", text: "Schedule comprehensive Title VI compliance training for all new leadership and staff members." }]
              },
              { 
                name: "Replace buses with CVTA Revenues",
                content: [{ label: "Recommendation", text: "Allocate 15% of CVTA revenue specifically for the replacement of aging bus fleet components." }]
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
                name: "Financial Planning methodology",
                content: [{ label: "Overview", text: "The MTP financial planning methodology ensures that the transportation plan is fiscally constrained and based on realistic revenue projections from federal, state, and local sources." }]
              },
              { 
                name: "PBPP (Performance Based Planning and Programming)",
                content: [{ label: "Strategic Focus", text: "PBPP uses performance data to inform relative investment decisions, focusing on achieving specific national and regional goals for the transportation system." }]
              },
              { 
                name: "Public Participation for MTP",
                content: [{ label: "Engagement Strategy", text: "Ensuring effective public participation throughout the MTP development process, reaching out to diverse communities to gather input on long-range vision." }]
              },
              { 
                name: "System Performance Report",
                content: [{ label: "Annual Assessment", text: "A detailed report assessing the current performance of the regional transportation system against established targets and benchmarks." }]
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
                content: [{ label: "Financial Management", text: "Outlines the collaborative process for developing the annual budget, coordinating between VDOT, DRPT, and local jurisdictions." }]
              },
              { 
                name: "Ensure Consistency with VDOT",
                content: [{ label: "Policy Alignment", text: "Mechanisms to ensure all planning activities are consistent with state policies and long-term VDOT infrastructure goals." }]
              },
              { 
                name: "Amendments and Modifications",
                content: [{ label: "Program Updates", text: "Procedures for updating the UPWP mid-cycle to account for new funding or changing project priorities." }]
              },
              { 
                name: "Fiscal Monitoring",
                content: [{ label: "Oversight", text: "Continuous monitoring of expenditures to ensure all planning funds are used efficiently and in compliance with federal guidelines." }]
              },
              { 
                name: "Audits, Certifications & Reviews",
                content: [{ label: "Accountability", text: "Regular reviews and audits to certify that the MPO's planning process meets all federal and state requirements." }]
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
                content: [{ label: "Environmental Compliance", text: "Inter-agency agreements ensuring that transportation plans conform to state air quality implementation plans." }]
              },
              { 
                name: "3C Agreement",
                content: [{ label: "Coordination", text: "The foundational Continuous, Cooperative, and Comprehensive (3C) agreement between the MPO, the State, and transit operators." }]
              },
              { 
                name: "Bylaws",
                content: [{ label: "Governance", text: "The governing rules for the MPO Policy Board and Technical Advisory Committee operations and decision-making." }]
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
                content: [{ label: "Project Tracking", text: "A comprehensive list of all transportation projects for which federal funds have been obligated in the past fiscal year." }]
              },
              { 
                name: "Performance Based Planning and Programming (PBPP)",
                content: [{ label: "Implementation", text: "Integrating performance targets directly into the TIP project selection and prioritization process." }]
              },
              { 
                name: "Financial Planning",
                content: [{ label: "Fiscal Constraint", text: "Demonstrating that the TIP is fiscally constrained by showing that funds are reasonably expected to be available." }]
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
                name: "Freight Planning",
                content: [{ label: "Logistics", text: "Strategies to improve the efficiency and safety of freight movement throughout the tri-cities region." }]
              },
              { 
                name: "Transit Planning (service across MPA boundary)",
                content: [{ label: "Connectivity", text: "Coordinated planning for public transit services that cross the Metropolitan Planning Area boundaries." }]
              },
            ],
          },
        ],
      },
      {
        name: "Participation",
        children: [
          {
            name: "Public Participation & Civil Rights",
            description: "Outreach & Compliance",
            children: [
              { 
                name: "Public Participation Plan",
                content: [{ label: "Outreach Strategy", text: "The formal plan detailing how the MPO will engage the public in all aspects of the planning process." }]
              },
              { 
                name: "Civil Rights",
                content: [{ label: "Compliance", text: "Documentation ensuring the MPO’s programs and activities comply with Title VI and other civil rights requirements." }]
              },
              { 
                name: "Non-discrimination",
                content: [{ label: "Equity", text: "Polices and procedures designed to ensure that no person is excluded from participation in the planning process." }]
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
