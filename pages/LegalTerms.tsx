import React from "react";

const LegalTerms: React.FC = () => {
  return (
    <main className="p-6 max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">Legal Terms</h1>
      <p className="mb-4">
        Welcome to Webonism. By accessing our website or using our services, you agree to the following terms:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Ownership</h2>
      <p className="mb-4">
        All content, designs, code, and intellectual property created by Webonism remain the property of Webonism unless otherwise agreed upon in writing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Work</h2>
      <p className="mb-4">
        Clients may use deliverables only for the agreed-upon purpose. Redistribution, resale, or reuse outside the scope of the project is prohibited without consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments & Invoicing</h2>
      <p className="mb-4">
        Payments must be made as per the schedule in the contract or invoice. Late payments may incur penalties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Revisions & Changes</h2>
      <p className="mb-4">
        Revision scope is limited to what's outlined in the proposal. Additional changes may be billed separately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4">
        Either party may terminate the agreement with proper notice. Completed work until that point will be billed accordingly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Liability</h2>
      <p className="mb-4">
        Webonism is not liable for any direct or indirect damages arising from the use of our work or services.
      </p>

      <p className="mt-6">Last updated: May 2025</p>
    </main>
  );
};

export default LegalTerms;
