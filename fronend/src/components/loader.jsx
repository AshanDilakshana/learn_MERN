export function Loader() {
  return (
    <div className="w-full h-full min-h-[400px] flex justify-center items-center ">
      <div className="loader">
        <div className="spinner"></div>
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
      <style>{`
        .loader {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .spinner {
          width: 100%;
          height: 100%;
          border: 8px solid transparent;
          border-top: 8px solid #6366f1; /* Indigo for modern, vibrant feel */
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #10b981; /* Emerald green for contrast */
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .dot1 {
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 0s;
        }

        .dot2 {
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          animation-delay: 0.5s;
        }

        .dot3 {
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          animation-delay: 1s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .loader {
            width: 60px;
            height: 60px;
          }
          .dot {
            width: 10px;
            height: 10px;
          }
          .spinner {
            border-width: 6px;
          }
        }
      `}</style>
    </div>
  );
}