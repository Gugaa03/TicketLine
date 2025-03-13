"use client";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Logo.css"
const Logo = () => {
  return (
    <Link href="/">
      
      <img src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
      
    </Link>
  );
};

export default Logo;
