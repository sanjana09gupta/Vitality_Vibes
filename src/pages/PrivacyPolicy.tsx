const PrivacyPolicy = () => {
  return (
    
      <div className="flex-grow max-w-4xl mx-auto px-6 pt-30 ">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Privacy Policy
        </h2>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-[#7D6855]">
              Data Collection
            </h3>
            <p>
              We collect personal information such as your name, contact
              details, and preferences when you book an appointment or interact
              with our website. This helps us provide personalized services and
              improve your experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7D6855]">Data Use</h3>
            <p>
              Your data is used to manage bookings, communicate with you, and
              tailor our services to your needs. We may also use it for
              marketing purposes, but only with your consent.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7D6855]">
              Data Protection
            </h3>
            <p>
              We implement robust security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
              Your data is stored securely and accessed only by authorized
              personnel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7D6855]">
              User Rights
            </h3>
            <p>
              You have the right to access, correct, or delete your personal
              information. For questions or concerns about our privacy policy,
              please contact us at{" "}
              <a
                href="mailto:privacy@serenespa.com"
                className="text-[#7D6855] underline"
              >
                privacy@serenespa.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
  
  );
};

export default PrivacyPolicy;
