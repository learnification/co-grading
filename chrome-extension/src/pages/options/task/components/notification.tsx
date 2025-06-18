import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@src/components/ui/button";

interface NotificationProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

const Notification = ({ message, type, onClose }: NotificationProps) => {
  // Define styles based on type
  const bgColor =
    type === "success"
      ? "bg-green-100"
      : type === "error"
      ? "bg-red-100"
      : "bg-blue-100";
  const textColor =
    type === "success"
      ? "text-green-700"
      : type === "error"
      ? "text-red-700"
      : "text-blue-700";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-dismiss after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} ${textColor} px-4 py-3 rounded shadow-md flex items-center space-x-2 z-50`}
    >
      <span>{message}</span>
      <Button variant="ghost" onClick={onClose} aria-label="Close Notification">
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Notification;
