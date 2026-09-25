"use client";
import React, { useMemo } from "react";

export default function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  // ใช้ Intl.Segmenter เพื่อแยกตัวอักษรไทย โดยรักษาสระและวรรณยุกต์ให้อยู่ติดกับพยัญชนะ (สำคัญมาก!)
  const letters = useMemo(() => {
    if (!text) return [];
    const segmenter = new Intl.Segmenter("th-TH", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text)).map((s) => s.segment);
  }, [text]);

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {letters.map((char, index) => (
        <span
          key={index}
          // จัดการช่องว่าง (Space) ไม่ให้หดหาย
          className={`hover-letter ${char === " " ? "w-[0.3em]" : ""}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}