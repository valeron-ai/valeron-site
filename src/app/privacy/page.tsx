import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Valeron",
  description: "Valeron Corporation Privacy Policy",
};

const linkClass =
  "text-white underline underline-offset-2 hover:text-neutral-300";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#141414] px-8 py-16 md:px-16 lg:px-32">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-16 inline-block">
          <Image
            src="/assets/valeron-wordmark.png"
            alt="VALERON"
            width={160}
            height={28}
            className="h-auto w-28"
          />
        </Link>

        <h1 className="mb-4 text-2xl font-semibold uppercase tracking-wider text-white">
          Privacy Policy
        </h1>
        <p className="mb-12 text-xs text-neutral-500">
          Last Updated: February 27, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-neutral-400">
          <p>
            Valeron Corporation (&ldquo;Valeron,&rdquo; &ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and
            is committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and protect
            information when you interact with our autonomous robotic systems,
            including the ACE Autonomous Follow Robot (&ldquo;ACE&rdquo;), our
            website, and related services (collectively, the
            &ldquo;Services&rdquo;). This Policy applies to users in the United
            States and is intended to comply with the California Consumer
            Privacy Act (CCPA), as amended by the California Privacy Rights Act
            (CPRA).
          </p>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              1. Information We Collect
            </h2>

            <h3 className="mb-2 text-sm font-semibold text-neutral-300">
              A. Personal Information You Provide
            </h3>
            <ul className="mb-6 list-disc space-y-1 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Account information</li>
              <li>Communications with us</li>
            </ul>

            <h3 className="mb-2 text-sm font-semibold text-neutral-300">
              B. Operational & Usage Data
            </h3>
            <p className="mb-2">
              When you use ACE or our Services, we may collect:
            </p>
            <ul className="mb-6 list-disc space-y-1 pl-5">
              <li>360&deg; video of gameplay</li>
              <li>Ball flight and shot-tracking data</li>
              <li>GPS location data during use</li>
              <li>Robot telemetry and navigation data</li>
              <li>Environmental context data</li>
              <li>Usage analytics and system performance data</li>
            </ul>

            <h3 className="mb-2 text-sm font-semibold text-neutral-300">
              C. Identification Features (Operational Use Only)
            </h3>
            <p className="mb-2">
              To enable real-time tracking during use of ACE, the system may
              process:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>Clothing appearance features</li>
              <li>Height and body proportion estimates</li>
              <li>Movement patterns (gait)</li>
              <li>General voice cues for command recognition</li>
            </ul>
            <p>
              These features are used solely for operational tracking and are
              processed locally as described below.
            </p>
          </section>

          {/* 2. Where and How Data Is Processed */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              2. Where and How Data Is Processed
            </h2>

            <h3 className="mb-2 text-sm font-semibold text-neutral-300">
              A. Local Processing
            </h3>
            <p className="mb-6">
              Video, tracking data, and identification features are processed
              locally on the robot and/or on secure on-site servers located at
              the golf course. Identification features used for real-time
              tracking are not used for marketing, not sold, not uploaded to the
              cloud as personal identifiers, and not used to create persistent
              identity profiles.
            </p>

            <h3 className="mb-2 text-sm font-semibold text-neutral-300">
              B. Cloud Processing
            </h3>
            <p>
              Certain information may be securely transmitted to our cloud
              infrastructure for video rendering and storage, account access and
              highlight delivery, software updates, system performance analysis,
              and AI model training using de-identified data. All transmission is
              encrypted. We implement commercially reasonable safeguards to
              protect data in transit and at rest.
            </p>
          </section>

          {/* 3. De-Identified & Aggregated Data */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              3. De-Identified & Aggregated Data
            </h2>
            <p className="mb-2">
              We may create de-identified (anonymized) derivatives of collected
              data, including:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>Ball trajectories</li>
              <li>Swing events</li>
              <li>Robot telemetry</li>
              <li>Environmental context</li>
              <li>Performance metrics</li>
            </ul>
            <p className="mb-4">
              We may use this de-identified information to train and improve
              navigation systems, enhance AI and machine-learning models, improve
              safety systems, develop new features and services, and conduct
              research and development.
            </p>
            <p className="mb-4">
              We do not use your name, email, or other direct identifiers in
              model training. De-identified data is processed in a manner
              designed to prevent it from reasonably identifying an individual.
            </p>
            <p>
              Valeron may use de-identified and aggregated data without
              restriction, consistent with applicable law.
            </p>
          </section>

          {/* 4. How We Use Personal Information */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              4. How We Use Personal Information
            </h2>
            <p className="mb-2">We use personal information to:</p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>Provide highlight videos and analytics</li>
              <li>Deliver round summaries</li>
              <li>Provide customer support</li>
              <li>Improve user experience</li>
              <li>Maintain and secure our systems</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="font-semibold text-neutral-300">
              We do not sell personal information.
            </p>
          </section>

          {/* 5. Disclosure of Personal Information */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              5. Disclosure of Personal Information
            </h2>
            <p className="mb-2">
              We may disclose personal information to:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>
                The hosting golf course (for operational reporting)
              </li>
              <li>
                Service providers (cloud storage, analytics, infrastructure
                support)
              </li>
              <li>
                Contractors subject to confidentiality obligations
              </li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>
              Service providers are contractually obligated to use personal
              information only to provide services to us.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              6. Data Retention
            </h2>
            <p className="mb-4">
              We retain personal information only as long as reasonably necessary
              to provide services, deliver user content, comply with legal
              obligations, resolve disputes, and enforce agreements.
            </p>
            <p>
              De-identified data may be retained for research and development
              purposes.
            </p>
          </section>

          {/* 7. Your California Privacy Rights */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              7. Your California Privacy Rights (CCPA / CPRA)
            </h2>
            <p className="mb-2">
              If you are a California resident, you have the following rights:
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5">
              <li>
                <span className="text-neutral-300">Right to Know</span> &ndash;
                Request categories and purposes of collected information.
              </li>
              <li>
                <span className="text-neutral-300">Right to Access</span>{" "}
                &ndash; Request a copy of personal information collected about
                you.
              </li>
              <li>
                <span className="text-neutral-300">Right to Delete</span>{" "}
                &ndash; Request deletion of personal information, subject to
                certain exceptions.
              </li>
              <li>
                <span className="text-neutral-300">Right to Correct</span>{" "}
                &ndash; Request correction of inaccurate personal information.
              </li>
              <li>
                <span className="text-neutral-300">
                  Right to Opt-Out of Sale or Sharing
                </span>{" "}
                &ndash; Valeron does not sell personal information.
              </li>
              <li>
                <span className="text-neutral-300">
                  Right to Limit Use of Sensitive Personal Information
                </span>{" "}
                &ndash; We do not use sensitive personal information beyond what
                is necessary to provide services.
              </li>
            </ul>
            <p>
              We will not discriminate against you for exercising your privacy
              rights.
            </p>
          </section>

          {/* 8. How to Exercise Your Rights */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              8. How to Exercise Your Rights
            </h2>
            <p className="mb-2">To exercise your rights, contact:</p>
            <p className="mb-1">
              Email:{" "}
              <a href="mailto:privacy@valeron.ai" className={linkClass}>
                privacy@valeron.ai
              </a>
            </p>
            <p>
              We may need to verify your identity before processing requests.
            </p>
          </section>

          {/* 9. Data Security */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              9. Data Security
            </h2>
            <p>
              We implement commercially reasonable technical and organizational
              safeguards, including encryption in transit, secure cloud storage,
              access controls, and system monitoring. No system is completely
              secure; however, we take data protection seriously.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our Services are not directed to children under 13. We do not
              knowingly collect personal information from children under 13. If
              we learn that we have collected such information, we will take
              appropriate steps to delete it.
            </p>
          </section>

          {/* 11. Third-Party Links */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              11. Third-Party Links
            </h2>
            <p>
              Our Services may contain links to third-party websites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          {/* 12. Changes to This Policy */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted with a revised &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          {/* 13. Contact Information */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-white">
              13. Contact Information
            </h2>
            <p>
              Valeron Corporation
              <br />
              Email:{" "}
              <a href="mailto:privacy@valeron.ai" className={linkClass}>
                privacy@valeron.ai
              </a>
              <br />
              Website:{" "}
              <a href="https://www.valeron.ai" className={linkClass}>
                www.valeron.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
