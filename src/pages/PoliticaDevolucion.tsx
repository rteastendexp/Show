import React from "react";
import ContactoOficial from "../components/ContactoOficial";
import FloatingPDFButton from "../components/FloatingPDFButton";

const PoliticaDevolucion: React.FC = () => (
  <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
    <FloatingPDFButton />
    <div className="mb-6">
  <h1 className="text-3xl font-bold text-teal-700">BOOKING POLICY & TERMS OF SERVICE</h1>
    </div>
  <p className="mb-4">Roatan East Hidden Gem, hereinafter referred to as “REHG”</p>
    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <strong>Booking and Payment</strong>
        <ul className="list-disc pl-6">
          <li>Full payment is required at the time of booking.</li>
          <li>We accept credit cards, bank transfers, and payments via WhatsApp Business or direct link.</li>
          <li>International payments must be made by credit card.</li>
        </ul>
      </li>
      <li>
        <strong>International Transactions</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>All prices and payments are in US dollars (USD).</li>
          <li>The client is responsible for any exchange rates and international fees that may apply.</li>
          <li>For transactions originating outside Honduras, only credit card payments are accepted.</li>
        </ul>
      </li>
      <li>
        <strong>Communications and Notifications</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>All booking confirmations, receipts, instructions, and communications will be sent to the email or phone number provided during booking.</li>
          <li>The client is responsible for:
            <ul className="list-disc pl-6">
              <li>Providing accurate contact information.</li>
              <li>Maintaining a valid email and phone number.</li>
              <li>Checking their inbox (including “spam”).</li>
              <li>Ensuring receipt of text or WhatsApp messages.</li>
            </ul>
          </li>
          <li>REHG will keep a record of sent communications but is not responsible for: undelivered messages, spam blocks, incorrect data, technical failures, or lack of review by the client.</li>
        </ul>
        <p className="mt-2">📧 It is recommended to add <strong>rteastendexp@gmail.com</strong> to your safe contacts list.</p>
        <p>By completing a booking, the client accepts responsibility to review all communications. Not receiving or reviewing the information does not exempt them from these terms.</p>
      </li>
      <li>
        <strong>Arrival and Departure Requirements</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>a. Tour time:</strong> All tours operate on local Honduran time (UTC/GMT-6). Your pick-up time will be confirmed at booking or before port arrival.</li>
          <li><strong>b. Meet your guide:</strong> Follow the provided meeting instructions. Present your booking confirmation and valid ID.</li>
          <li><strong>c. Late arrivals:</strong> Late arrivals will be marked as “No Show” with no refund, unless previously notified and REHG has confirmed a new time.</li>
          <li><strong>d. Return to port:</strong> All participants must return to the port at least one hour before ship departure. REHG is not responsible for missed departures or extra costs due to client delays.</li>
        </ul>
      </li>
      <li>
        <strong>Participant Verification</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>All participants must present a valid booking confirmation (digital or printed) and official ID.</li>
          <li>Lack of documentation may result in denial of service without refund.</li>
        </ul>
      </li>
      <li>
        <strong>Exención y liberación de responsabilidad</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>a. Formulario obligatorio:</strong> Todos los participantes deben firmar un Formulario de Exención de Responsabilidad antes de la excursión. No se permitirán modificaciones o formularios alternos.</li>
          <li><strong>b. Responsabilidades del participante:</strong> Cada cliente debe:
            <ul className="list-disc pl-6">
              <li>Revisar los términos antes de reservar.</li>
              <li>Proporcionar información verídica.</li>
              <li>Revelar condiciones médicas relevantes.</li>
            </ul>
          </li>
          <li><strong>c. Exclusión sin reembolso:</strong> Se negará participación si el cliente:
            <ul className="list-disc pl-6">
              <li>No firma la exención.</li>
              <li>La modifica.</li>
              <li>Proporciona información falsa o incompleta.</li>
            </ul>
          </li>
          <li><strong>d. Condiciones médicas:</strong> No revelar condiciones médicas puede causar la expulsión inmediata del tour sin reembolso, y el cliente asumirá cualquier gasto adicional.</li>
        </ul>
      </li>
      <li>
        <strong>Transporte y responsabilidad</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>a. Transporte autorizado:</strong> REHG trabaja con proveedores locales de transporte cuidadosamente seleccionados. Sin embargo, REHG actúa solo como agente de reserva, no como operador directo.</li>
          <li>No somos responsables por: Negligencia o conducta de terceros. Daños, pérdidas o accidentes durante el transporte. Cambios de horario o retrasos.</li>
          <li><strong>b. Transporte no autorizado:</strong> Cualquier cliente que use transporte ajeno a REHG asume todos los riesgos y gastos, pierde la cobertura de seguro y anula su excursión sin reembolso.</li>
        </ul>
      </li>
      <li>
        <strong>Política de eliminación de participantes</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>Los guías de REHG pueden remover a cualquier participante cuyo comportamiento afecte la seguridad o la experiencia de otros.</li>
          <li>Motivos de expulsión inmediata:
            <ul className="list-disc pl-6">
              <li>Intoxicación o conducta agresiva.</li>
              <li>Acoso o comportamiento peligroso.</li>
              <li>Daños a la propiedad o actividades ilegales.</li>
            </ul>
          </li>
          <li>Participantes expulsados no recibirán reembolso y asumirán todos los gastos derivados.</li>
        </ul>
      </li>
      <li>
        <strong>Cancelaciones y reembolsos</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>a. Procedimiento:</strong> Toda solicitud de cancelación debe enviarse por escrito a: 📧 rteastendexp@gmail.com con el asunto: “Cancelación” o “Reembolso” + número de reserva. No se aceptan cancelaciones verbales ni automáticas.</li>
          <li className="mt-2">
            <table className="w-full text-sm border mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Aviso previo</th>
                  <th className="border px-2 py-1">Reembolso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">72 horas o más</td>
                  <td className="border px-2 py-1">100% - 4% comisión transacción</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">48-72 horas</td>
                  <td className="border px-2 py-1">50% - 4% comisión transacción</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">48 horas o menos</td>
                  <td className="border px-2 py-1">Sin reembolso</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">No show</td>
                  <td className="border px-2 py-1">Sin reembolso</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li><strong>b. Cancelación por itinerario de crucero:</strong> Si su crucero no atraca en Roatán, recibirá reembolso completo menos 4% de comisión.</li>
          <li><strong>c. Procesamiento:</strong> Los reembolsos aprobados se procesan en un plazo máximo de 90 días, y se emiten a la misma forma de pago original.</li>
        </ul>
      </li>
      <li>
        <strong>Transferencias de reserva</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>Con al menos 48 horas de aviso, puede transferir su crédito a otra persona o servicio de REHG.</li>
          <li>Si el nuevo servicio cuesta menos, no se reembolsa la diferencia.</li>
        </ul>
      </li>
      <li>
        <strong>Condiciones climáticas</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>La lluvia ligera o condiciones tropicales normales no son motivo de cancelación.</li>
          <li>Solo si REHG determina que el clima es inseguro se cancelará la excursión con reembolso completo.</li>
        </ul>
      </li>
      <li>
        <strong>Seguros recomendados</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>Se recomienda mantener seguro médico y de viaje internacional.</li>
          <li>REHG no proporciona cobertura de seguro a los participantes.</li>
        </ul>
      </li>
      <li>
        <strong>Avisos legales</strong>
  <ul className="list-disc pl-6 leading-relaxed">
          <li>REHG se reserva el derecho de modificar itinerarios, cancelar tours, negar servicio o usar material fotográfico con fines promocionales.</li>
        </ul>
      </li>
      <li>
        <strong>Limitaciones de responsabilidad</strong>
        <ul className="list-disc pl-6">
          <li>REHG no asume responsabilidad por:
            <ul className="list-disc pl-6">
              <li>Lesiones personales, gastos médicos o pérdidas de propiedad.</li>
              <li>Servicios de terceros o eventos fuera de su control.</li>
              <li>Salidas perdidas por error o tardanza del cliente.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Encuentros con animales</strong>
        <ul className="list-disc pl-6">
          <li>Los participantes deben seguir las instrucciones del guía en todo momento.</li>
          <li>Quienes actúen de forma imprudente o peligrosa podrán ser expulsados sin reembolso.</li>
          <li>Si ocurre daño a un animal por acciones del participante, este asumirá las consecuencias legales y económicas.</li>
          <li>REHG no garantiza encuentros con animales específicos, ya que dependen de factores naturales.</li>
          <li>Al reservar, el participante acepta todos los riesgos asociados con interacciones con animales y libera a REHG de toda responsabilidad.</li>
        </ul>
      </li>
      <li>
        <strong>Contacto oficial</strong>
        <ContactoOficial />
      </li>
    </ol>
  </section>
);

export default PoliticaDevolucion;
