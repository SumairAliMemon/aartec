import AffiliatesSection from '@/components/AffiliatesSection';
import React from "react";

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page wrapper */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Affiliate Section */}
        <AffiliatesSection />
      </div>
    </main>
  );
}