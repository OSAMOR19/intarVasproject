"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Puzzle } from "@/lib/puzzle";

interface PuzzleModalProps {
  isOpen: boolean;
  puzzle: Puzzle | null;
  onClose: () => void;
  onSuccess: (answer: number) => void;
}

const PuzzleModal: React.FC<PuzzleModalProps> = ({
  isOpen,
  puzzle,
  onClose,
  onSuccess,
}) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  if (!isOpen || !puzzle) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!answer) {
      setError("Please enter an answer");
      return;
    }

    const numericAnswer = parseInt(answer, 10);
    if (isNaN(numericAnswer)) {
      setError("Please enter a valid number");
      return;
    }

    // Clear error and pass answer to parent
    setError("");
    onSuccess(numericAnswer);
    setAnswer("");
  };

  const handleClose = () => {
    setAnswer("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Security Verification
          </h3>
          <p className="text-gray-600 text-sm">
            Please solve this simple math problem to verify you're human
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Question */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {puzzle.question}
            </p>
          </div>

          {/* Answer Input */}
          <div>
            <input
              type="number"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError("");
              }}
              placeholder="Enter your answer"
              autoFocus
              className="w-full px-4 py-3 text-center text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Verify & Submit
          </Button>

          <p className="text-xs text-gray-500 text-center">
            This helps us prevent spam and protect your information
          </p>
        </form>
      </div>
    </div>
  );
};

export default PuzzleModal;

