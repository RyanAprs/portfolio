"use client";

import React, { useState } from "react";
import {
  Check,
  MessageCircle,
  Sparkles,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";
import { DATA } from "@/data/resume";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("website");

  const handleOrderClick = (packageTitle: string) => {
    const message = encodeURIComponent(
      `Hi Ryan! Saya tertarik dengan paket "${packageTitle}". Bisa dijelaskan lebih detail?`
    );
    window.open(`https://wa.me/${DATA.contact.tel}?text=${message}`, "_blank");
  };

  const handleCustomClick = () => {
    const message = encodeURIComponent(
      "Hi Ryan! Saya ingin konsultasi untuk kebutuhan custom project. Bisa kita diskusikan?"
    );
    window.open(`https://wa.me/${DATA.contact.tel}?text=${message}`, "_blank");
  };

  const currentPackages =
    activeTab === "website" ? DATA.websitePackages : DATA.mobileAppPackages;

  return (
    <div className="space-y-">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">
          Services & Packages
        </h1>
        <p className="text-muted-foreground">
          Choose the perfect package for your needs
        </p>
      </div>

      <div className="flex gap-2 p-1 bg-muted rounded-lg">
        <button
          onClick={() => setActiveTab("website")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-medium transition-all text-sm ${
            activeTab === "website"
              ? "bg-background shadow-sm"
              : "hover:bg-background/50"
          }`}
        >
          <Globe className="w-4 h-4" />
          Website
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-medium transition-all text-sm ${
            activeTab === "mobile"
              ? "bg-background shadow-sm"
              : "hover:bg-background/50"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          Mobile App
        </button>
      </div>

      <div className="space-y-6">
        {currentPackages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md ${
              pkg.popular ? "ring-2 ring-primary" : ""
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Popular
                </div>
              </div>
            )}

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <div className="text-2xl font-bold">{pkg.price}</div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-2">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  {pkg.additional}
                </p>
              </div>

              <button
                onClick={() => handleOrderClick(pkg.title)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center space-y-4">
        <Code className="w-12 h-12 mx-auto opacity-50" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Need Something Custom?</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Have a unique project in mind? Let&apos;s discuss your specific
            requirements and create a tailored solution just for you.
          </p>
        </div>
        <button
          onClick={handleCustomClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2.5 rounded-md transition-colors inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Konsultasi Gratis via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
