import React, { useState, useEffect } from "react";
import {
  Code,
  Terminal,
  FileCode,
  Braces,
  TextCursor,
  Lock,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import logo from "../assets/logo.svg";

const AuthImagePattern = ({ title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const codeSnippets = [
    `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
  
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}`,
    `function isValid(s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (map[last] !== s[i]) return false;
    }
  }
  
  return stack.length === 0;
}`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-100 p-12 relative overflow-hidden border-l border-base-300">
      {/* Floating code icons */}
      <div className="absolute inset-0 opacity-10 text-primary">
        {[Braces, FileCode, Terminal, Code].map((Icon, i) => (
          <Icon
            key={i}
            size={40 + i * 5}
            className={`absolute animate-pulse`}
            style={{
              top: `${15 + i * 20}%`,
              left: `${15 + i * 20}%`,
              animationDelay: `${i * 300}ms`,
            }}
          />
        ))}
      </div>

      <div className="z-10 max-w-md w-full flex flex-col items-center">
        {/* Code editor */}
        <div className="w-full bg-base-200 rounded-lg shadow-lg mb-8 overflow-hidden border border-base-300">
          <div className="bg-base-300 px-4 py-2 flex items-center border-b border-base-300">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="text-xs font-mono text-base-content/70">
              problem.js
            </div>
          </div>

          <div className="p-4 font-mono overflow-hidden relative h-80">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                background: "transparent",
                fontSize: "0.875rem",
                margin: 0,
                padding: 0,
              }}
              showLineNumbers
            >
              {codeSnippets[activeIndex]}
            </SyntaxHighlighter>
            <div className="absolute bottom-4 right-4 w-0.5 h-4 bg-primary animate-pulse"></div>
          </div>
        </div>

        {/* Logo and text */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-13 h-13 my-6" />
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            {title || "Welcome Back"}
          </h1>
          <p className="text-center text-base-content/80 mb-6">
            {subtitle || "Sign in to continue your journey with us"}
          </p>
          <div className="flex items-center text-sm text-base-content/60">
            <Lock className="w-4 h-4 mr-1" />
            <span>Secure authentication</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
