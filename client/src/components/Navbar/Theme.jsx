"use client";
import useTheme from "@/hooks/useTheme";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Theme() {
  const {theme, toggleLightDark} = useTheme();
  return (
    <div className="relative">
      <div>
        <button className="flex btn-icon" onClick={toggleLightDark}>
          {theme === "dark" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>
      </div>
      <ul></ul>
    </div>
  );
}

export default Theme;
