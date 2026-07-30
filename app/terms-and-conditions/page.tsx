import { site } from '@/lib/data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | ' + site.title,
  description: 'Terms and Conditions for ' + site.title,
}

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg prose-gray max-w-none text-gray-600 space-y-8">
          <section>
            <p className="lead text-xl">
              Welcome to Mayur Dholera, operated by Mirrikh Infratech Pvt Ltd. By accessing our website and using our services, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Company:</strong> Refers to Mirrikh Infratech Pvt Ltd (operating as Mayur Dholera).</li>
              <li><strong>Customer:</strong> Any individual or entity that purchases or expresses interest in purchasing property through the Company.</li>
              <li><strong>Channel Partner/Dealer:</strong> Authorized agents or representatives who facilitate transactions between the Company and Customers.</li>
              <li><strong>Plot:</strong> A parcel of land designated for sale or development.</li>
              <li><strong>SIR:</strong> Special Investment Region, referring to the Dholera SIR project.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Code of Conduct for Channel Partners</h2>
            <p>
              All Channel Partners and Dealers must adhere to the Company's Code of Conduct. This includes maintaining ethical business practices, providing accurate information to Customers, and not engaging in any misleading or fraudulent activities. The Company reserves the right to terminate any Channel Partner agreement for a breach of this code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. Booking & Payment Terms</h2>
            <p>
              All bookings are subject to availability and the execution of necessary legal agreements. Payments must be made in accordance with the agreed schedule. The Company is not responsible for any delays in payment processing by financial institutions. Late payments may incur interest or result in the cancellation of the booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Cancellation & Refund Policy</h2>
            <p>
              Cancellation of bookings must be communicated in writing. Refunds, if applicable, will be processed according to the specific terms outlined in the booking agreement, minus any administrative fees or statutory deductions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">5. Transfer of Rights</h2>
            <p>
              Customers may not transfer or assign their rights and obligations under the booking agreement to a third party without prior written consent from the Company. Any unauthorized transfer will be considered void.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">6. Liability Limitations</h2>
            <p>
              The Company shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Information provided regarding plots, layouts, and infrastructure is subject to change based on regulatory approvals and project development phases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">7. Legal Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="mb-4">
              For any queries regarding these Terms and Conditions, please contact us at:
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
