"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Loader2, User, Phone, Mail, CheckCircle2 } from "lucide-react";

export interface BrochureDownloadProps {
  brochureUrl: string;
  projectName: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export default function BrochureDownload({
  brochureUrl,
  projectName,
  accentColor = "#0F172A",
  children,
}: BrochureDownloadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6d5666cd-0375-4737-9a88-af583ff06544",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `Brochure Request for ${projectName}`,
          project_name: projectName,
          from_name: `${projectName} Brochure Request`,
        }),
      });

      const data = await response.json();

      if (data.success || response.ok) {
        setIsSuccess(true);
        
        // Open brochure PDF in new tab after brief success feedback
        setTimeout(() => {
          if (brochureUrl) {
            window.open(brochureUrl, "_blank");
          }
        }, 600);

        // Close modal and reset form after success display
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({ name: "", phone: "", email: "" });
        }, 2200);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Web3Forms submit error:", err);
      setErrorMessage("Network error. Opening brochure directly...");
      
      // Fallback: open brochure even if API fetch fails
      setTimeout(() => {
        if (brochureUrl) {
          window.open(brochureUrl, "_blank");
        }
        setIsOpen(false);
        setFormData({ name: "", phone: "", email: "" });
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false);
      setErrorMessage("");
      setIsSuccess(false);
    }
  };

  // Determine if accentColor is inline CSS (hex/rgb/hsl) or Tailwind class
  const isCustomColor =
    accentColor &&
    (accentColor.startsWith("#") ||
      accentColor.startsWith("rgb") ||
      accentColor.startsWith("hsl"));

  const submitButtonStyle = isCustomColor
    ? { backgroundColor: accentColor }
    : undefined;

  const submitButtonClass = isCustomColor
    ? "text-white hover:opacity-90 transition-opacity"
    : accentColor || "bg-slate-900 text-white hover:bg-slate-800";

  return (
    <>
      {/* Trigger Button */}
      {children ? (
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          className="inline-block cursor-pointer"
        >
          {children}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 ${submitButtonClass}`}
          style={submitButtonStyle}
        >
          <Download className="w-4 h-4" />
          <span>Download Brochure</span>
        </button>
      )}

      {/* Lead Capture Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-100 z-10 overflow-hidden"
            >
              {/* Top Decorative Header Accent */}
              <div
                className="h-2 w-full"
                style={isCustomColor ? { backgroundColor: accentColor } : undefined}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors disabled:opacity-50 z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8">
                {/* Header Info */}
                <div className="mb-6 text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner"
                    style={
                      isCustomColor
                        ? { backgroundColor: `${accentColor}15`, color: accentColor }
                        : { backgroundColor: "#F1F5F9", color: "#0F172A" }
                    }
                  >
                    <Download className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    Download Brochure
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    Enter your details to receive the official brochure for{" "}
                    <span className="font-semibold text-neutral-800">{projectName}</span>.
                  </p>
                </div>

                {isSuccess ? (
                  /* Success Feedback */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-3"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800">Thank You!</h3>
                    <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                      Your request has been submitted. Opening brochure now...
                    </p>
                  </motion.div>
                ) : (
                  /* Lead Form */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Notice */}
                    {errorMessage && (
                      <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="brochure-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="brochure-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label
                        htmlFor="brochure-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="brochure-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="brochure-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="brochure-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${submitButtonClass}`}
                      style={submitButtonStyle}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Get Brochure PDF</span>
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-[11px] text-neutral-400 text-center mt-3">
                      🔒 Your details are safe with us. We respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
