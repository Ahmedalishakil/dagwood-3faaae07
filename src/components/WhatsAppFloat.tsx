import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/923262188824?text=Hi%20Sandy%20AI!%20I'd%20like%20to%20order...";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-shadow hover:shadow-2xl"
      style={{ background: "#25D366" }}
      title="Chat with Sandy AI"
      aria-label="Chat with Sandy AI on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "#25D366" }} />
    </motion.a>
  );
};

export default WhatsAppFloat;