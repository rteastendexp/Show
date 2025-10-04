import React from "react";
import ContactoOficial from "../components/ContactoOficial";
import FloatingPrintButton from "../components/FloatingPDFButton";

const ReturnPolicy: React.FC = () => (
  <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
  <FloatingPrintButton />
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-teal-700">
        BOOKING POLICY & TERMS OF SERVICE
      </h1>
    </div>
    <p className="mb-4">
      Roatan East Hidden Gem, hereinafter referred to as “REHG”
    </p>
    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <strong>Booking and Payment</strong>
        <ul className="list-disc pl-6">
          <li>Full payment is required at the time of booking.</li>
          <li>
            We accept credit cards, bank transfers, and payments via WhatsApp
            Business or direct link.
          </li>
          <li>International payments must be made by credit card.</li>
        </ul>
      </li>
      <li>
        <strong>International Transactions</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>All prices and payments are in US dollars (USD).</li>
          <li>
            The client is responsible for any exchange rates and international
            fees that may apply.
          </li>
          <li>
            For transactions originating outside Honduras, only credit card
            payments are accepted.
          </li>
        </ul>
      </li>
      <li>
        <strong>Communications and Notifications</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            All booking confirmations, receipts, instructions, and
            communications will be sent to the email or phone number provided
            during booking.
          </li>
          <li>
            The client is responsible for:
            <ul className="list-disc pl-6">
              <li>Providing accurate contact information.</li>
              <li>Maintaining a valid email and phone number.</li>
              <li>Checking their inbox (including “spam”).</li>
              <li>Ensuring receipt of text or WhatsApp messages.</li>
            </ul>
          </li>
          <li>
            REHG will keep a record of sent communications but is not
            responsible for: undelivered messages, spam blocks, incorrect data,
            technical failures, or lack of review by the client.
          </li>
        </ul>
        <p className="mt-2">
          📧 It is recommended to add{" "}
          <strong>rteastendexp@gmail.com</strong> to your safe contacts list.
        </p>
        <p>
          By completing a booking, the client accepts responsibility to review
          all communications. Not receiving or reviewing the information does
          not exempt them from these terms.
        </p>
      </li>
      <li>
        <strong>Arrival and Departure Requirements</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>a. Tour time:</strong> All tours operate on local Honduran
            time (UTC/GMT-6). Your pick-up time will be confirmed at booking or
            before port arrival.
          </li>
          <li>
            <strong>b. Meet your guide:</strong> Follow the provided meeting
            instructions. Present your booking confirmation and valid ID.
          </li>
          <li>
            <strong>c. Late arrivals:</strong> Late arrivals will be marked as
            “No Show” with no refund, unless previously notified and REHG has
            confirmed a new time.
          </li>
          <li>
            <strong>d. Return to port:</strong> All participants must return to
            the port at least one hour before ship departure. REHG is not
            responsible for missed departures or extra costs due to client
            delays.
          </li>
        </ul>
      </li>
      <li>
        <strong>Participant Verification</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            All participants must present a valid booking confirmation (digital
            or printed) and official ID.
          </li>
          <li>
            Lack of documentation may result in denial of service without refund.
          </li>
        </ul>
      </li>
      <li>
        <strong>Waiver and Release of Liability</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>a. Mandatory form:</strong> All participants must sign a
            Waiver of Liability Form before the excursion. No modifications or
            alternative forms will be accepted.
          </li>
          <li>
            <strong>b. Participant responsibilities:</strong> Each client must:
            <ul className="list-disc pl-6">
              <li>Review the terms before booking.</li>
              <li>Provide truthful information.</li>
              <li>Disclose relevant medical conditions.</li>
            </ul>
          </li>
          <li>
            <strong>c. Exclusion without refund:</strong> Participation will be
            denied if the client:
            <ul className="list-disc pl-6">
              <li>Does not sign the waiver.</li>
              <li>Alters the waiver.</li>
              <li>Provides false or incomplete information.</li>
            </ul>
          </li>
          <li>
            <strong>d. Medical conditions:</strong> Failure to disclose medical
            conditions may result in immediate removal from the tour without
            refund, and the client will assume any additional expenses.
          </li>
        </ul>
      </li>
      <li>
        <strong>Transportation and Liability</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>a. Authorized transportation:</strong> REHG works with
            carefully selected local transportation providers. However, REHG acts
            only as a booking agent, not as a direct operator.
          </li>
          <li>
            We are not responsible for: Negligence or conduct of third parties.
            Damages, losses, or accidents during transportation. Schedule
            changes or delays.
          </li>
          <li>
            <strong>b. Unauthorized transportation:</strong> Any client who uses
            transportation not arranged by REHG assumes all risks and expenses,
            loses insurance coverage, and voids their excursion without refund.
          </li>
        </ul>
      </li>
      <li>
        <strong>Participant Removal Policy</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            REHG guides may remove any participant whose behavior affects the
            safety or experience of others.
          </li>
          <li>
            Grounds for immediate removal:
            <ul className="list-disc pl-6">
              <li>Intoxication or aggressive behavior.</li>
              <li>Harassment or dangerous conduct.</li>
              <li>Property damage or illegal activities.</li>
            </ul>
          </li>
          <li>
            Removed participants will not receive a refund and will assume all
            resulting expenses.
          </li>
        </ul>
      </li>
      <li>
        <strong>Cancellations and Refunds</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            <strong>a. Procedure:</strong> All cancellation requests must be
            sent in writing to: 📧 rteastendexp@gmail.com with the subject:
            “Cancellation” or “Refund” + booking number. Verbal or automatic
            cancellations are not accepted.
          </li>
          <li className="mt-2">
            <table className="w-full text-sm border mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Notice Period</th>
                  <th className="border px-2 py-1">Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">72 hours or more</td>
                  <td className="border px-2 py-1">
                    100% - 4% transaction fee
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">48-72 hours</td>
                  <td className="border px-2 py-1">50% - 4% transaction fee</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">48 hours or less</td>
                  <td className="border px-2 py-1">No refund</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">No show</td>
                  <td className="border px-2 py-1">No refund</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <strong>b. Cruise itinerary cancellation:</strong> If your cruise
            does not dock in Roatan, you will receive a full refund minus 4%
            transaction fee.
          </li>
          <li>
            <strong>c. Processing:</strong> Approved refunds are processed
            within a maximum of 90 days and issued to the same original payment
            method.
          </li>
        </ul>
      </li>
      <li>
        <strong>Booking Transfers</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            With at least 48 hours’ notice, you may transfer your credit to
            another person or REHG service.
          </li>
          <li>
            If the new service costs less, the difference will not be refunded.
          </li>
        </ul>
      </li>
      <li>
        <strong>Weather Conditions</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            Light rain or normal tropical conditions are not grounds for
            cancellation.
          </li>
          <li>
            Only if REHG determines the weather is unsafe will the excursion be
            canceled with a full refund.
          </li>
        </ul>
      </li>
      <li>
        <strong>Recommended Insurance</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>Maintaining medical and international travel insurance is advised.</li>
          <li>REHG does not provide insurance coverage to participants.</li>
        </ul>
      </li>
      <li>
        <strong>Legal Notices</strong>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>
            REHG reserves the right to modify itineraries, cancel tours, deny
            service, or use photographic material for promotional purposes.
          </li>
        </ul>
      </li>
      <li>
        <strong>Limitations of Liability</strong>
        <ul className="list-disc pl-6">
          <li>
            REHG assumes no responsibility for:
            <ul className="list-disc pl-6">
              <li>Personal injuries, medical expenses, or property loss.</li>
              <li>Third-party services or events beyond its control.</li>
              <li>Missed departures due to client error or delay.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Animal Encounters</strong>
        <ul className="list-disc pl-6">
          <li>Participants must follow the guide’s instructions at all times.</li>
          <li>
            Those acting recklessly or dangerously may be removed without refund.
          </li>
          <li>
            If harm occurs to an animal due to participant actions, they will
            assume legal and financial consequences.
          </li>
          <li>
            REHG does not guarantee encounters with specific animals, as they
            depend on natural factors.
          </li>
          <li>
            By booking, the participant accepts all risks associated with animal
            interactions and releases REHG from all liability.
          </li>
        </ul>
      </li>
      <li>
        <strong>Official Contact</strong>
        <ContactoOficial />
      </li>
    </ol>
  </section>
);

export default ReturnPolicy;
