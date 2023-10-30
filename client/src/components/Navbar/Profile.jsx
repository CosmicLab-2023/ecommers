"use client";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
function Profile() {
  const [show, setShow] = useState();
  return (
    <div className="relative">
      <div>
        <button className="flex btn-icon">
          <BsPerson size={20} />
        </button>
      </div>
      <ul></ul>
    </div>
  );
}

export default Profile;
