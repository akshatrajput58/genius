"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("212d1e47-d10e-412f-93f4-c4290bcc5878");
  }, []);

  return null;
};
