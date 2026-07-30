import { site } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ' + site.title,
  description: 'Privacy Policy for ' + site.title,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <p className="lead text-xl">
              This Privacy Policy describes how Mayur Dholera, operated by Mirrikh Infratech Pvt Ltd, collects, uses, and protects your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Information Collection</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and physical address when you register for our services, request information, or contact us. We also collect non-personal browsing data such as IP addresses, browser types, and usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Use of Information</h2>
            <p>
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Process your inquiries and provide requested services</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Send administrative information and marketing communications</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Cookies & Tracking</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and personalize content. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet can be guaranteed as 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">5. Third-Party Sharing</h2>
            <p>
              We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website and business, provided they agree to keep this information confidential. We may also disclose information when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2">
              <p><span className="font-medium text-gray-900">Email:</span> <a href={`mailto:${site.email}`} className="text-[#FACC15] hover:underline">{site.email}</a></p>
              <p><span className="font-medium text-gray-900">Phone:</span> <a href={`tel:${site.phoneDisplay.replace(/[^0-9+]/g, '')}`} className="text-[#FACC15] hover:underline">{site.phoneDisplay}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
