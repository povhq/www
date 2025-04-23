"use client";

import React, { useEffect, useState } from "react";
import { AnimatedTestimonials } from "./AnimatedTestimonials";

export default function Clients () {
  return (
    <div id="clients" className="bg-[#1A1C1F]  h-[18rem] flex flex-col antialiased  items-center justify-center relative overflow-hidden scroll-mt-20" style={{
      scrollMarginTop: "80vh"
    }}>
      <AnimatedTestimonials
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "PovTech helped us streamline our CI/CD and integrate security with zero overhead. Their DevSecOps solution is truly next-level.",
    name: "Jamie Liu, CTO at Replight",
    title: "",
  },
  {
    quote: "Migrating to the cloud was daunting until PovTech stepped in. Smooth, efficient, and with zero downtime—just what we needed.",
    name: "Global Top 10 Restaurant Giant",
    title: "",
  },
  {
    quote:
      "The Finops tool from PovTech slashed our AWS bill by 32% in a month. It’s a no-brainer for any cloud-heavy startup.",
    name: "Ankit Mehra, CEO at Billwise",
    title: "",
  },
  {
    quote:
      "PovTech’s Application Command Centre gave us complete visibility into our systems. It’s now our go-to for monitoring and alerts.",
    name: "Dina Park, Head of Engineering at Snaplet.io",
    title: "",
  },
  {
    quote:
      "Socially by PovTech is a game-changer for our marketing team—finally a scheduler that feels like it was built by engineers.",
    name: "Redbull",
    title: "",
  },
  {
    quote: "We turned to PovTech for automation, and within weeks, our ops were running faster and with fewer bugs. Highly recommend.",
    name: "Lena Roy, Encore Labs",
    title: "x`"
  }
];
