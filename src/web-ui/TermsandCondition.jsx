export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-[35px] border border-gray-800 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="relative p-10 md:p-14 border-b border-gray-800">
            <div className="absolute top-0 right-0 h-80 w-80 bg-green-500/10 blur-3xl rounded-full"></div>
            <div className="relative">
              <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                NanoDx Legal
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
                Terms and Conditions of Sale
              </h1>
              <p className="mt-4 text-gray-400">
                Last Updated: July 7, 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 md:p-14 space-y-12 text-gray-300">
            {/* Intro */}
            <section className="bg-gray-800/50 rounded-3xl border border-gray-700 p-8">
              <p className="leading-8">
                Please read these Terms and Conditions ("Terms") carefully before purchasing any products or services from NanoDx ("NanoDx," "we," "us," or "our"). By placing an order with NanoDx, you ("Customer," "you," or "your") agree to be bound by these Terms. These Terms constitute the entire agreement between NanoDx and you regarding the sale of Products and Services.
              </p>
            </section>

            {/* Section 1 - Definitions */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">1. Definitions</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p><span className="font-semibold text-green-400">Company/NanoDx:</span> Refers to NanoDx, a company established in 2021 in Bradenton, FL.</p>
                <p><span className="font-semibold text-green-400">Customer/You:</span> Refers to the individual, institution, company, or other entity purchasing Products or Services from NanoDx.</p>
                <p><span className="font-semibold text-green-400">Products:</span> Refers to the reagents, antibodies, nanomaterials (e.g., Gold Nanoparticles, Silica Nanoparticles, Magnetic Particles, Fusion Particles), Affinity Nano Reagents, and other physical goods manufactured or supplied by NanoDx.</p>
                <p><span className="font-semibold text-green-400">Services:</span> Refers to NanoImmunoassay Development, Immunochromatographic Assay Development, and other related services provided by NanoDx.</p>
                <p><span className="font-semibold text-green-400">Order:</span> A purchase order, written acceptance, or other form of request by the Customer for Products or Services from NanoDx.</p>
                <p><span className="font-semibold text-green-400">Agreement:</span> These Terms and Conditions, together with any written quotation, order confirmation, or other specific agreements issued by NanoDx.</p>
                <p><span className="font-semibold text-green-400">Intellectual Property Rights (IPR):</span> All patents, registered designs, copyrights, trademarks, trade secrets, know-how, and all other forms of intellectual property wherever in the world enforceable.</p>
              </div>
            </section>

            {/* Section 2 - Acceptance of Orders */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">2. Acceptance of Orders</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">2.1.</span> All Orders placed by the Customer are subject to acceptance by NanoDx. NanoDx reserves the right to accept or reject any Order in its sole discretion.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">2.2.</span> An Order shall be deemed accepted only when NanoDx issues a written order confirmation or commences performance of the Services or shipment of the Products.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">2.3.</span> No terms or conditions stated by the Customer in any Order or other communication shall be binding upon NanoDx unless expressly agreed to in writing by an authorized representative of NanoDx.</p>
              </div>
            </section>

            {/* Section 3 - Pricing and Payment Terms */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">3. Pricing and Payment Terms</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">3.1. Prices:</span> All prices for Products and Services are as quoted by NanoDx and are subject to change without prior notice. Unless otherwise stated in writing, prices are exclusive of all taxes (including sales, use, value-added, and other taxes and duties), shipping, handling, and insurance charges, all of which shall be paid by the Customer.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">3.2. Quotations:</span> Quotations provided by NanoDx are valid for the period specified therein or, if no period is specified, for fourteen (14) days from the date of quotation.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">3.3. Payment:</span> Payment terms will be specified on the invoice. Unless otherwise agreed in writing, payment for all Products and Services is due net thirty (30) days from the date of invoice. NanoDx reserves the right to require prepayment or partial payment for any Order at its discretion.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">3.4. Late Payments:</span> If the Customer fails to pay any amounts when due, NanoDx may charge interest on the overdue amount at a rate of 1.5% per month or the maximum rate permitted by applicable law, whichever is lower, from the due date until the date of full payment. The Customer shall also be responsible for all costs of collection, including reasonable attorney's fees and court costs.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">3.5. Credit Holds:</span> NanoDx reserves the right to suspend or cancel any outstanding Orders or shipments if the Customer fails to make timely payments or if NanoDx's credit assessment of the Customer changes.</p>
              </div>
            </section>

            {/* Section 4 - Shipping and Delivery */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">4. Shipping and Delivery</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">4.1. Delivery Terms:</span> Products will be shipped to the destination specified by the Customer. Unless otherwise agreed in writing, delivery terms are Ex Works (EXW) NanoDx's shipping point (Bradenton, FL, USA), meaning risk of loss and title pass to the Customer upon NanoDx's delivery of the Products to the carrier.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">4.2. Shipping Charges:</span> Shipping and handling charges will be prepaid by NanoDx and added to the Customer's invoice unless otherwise specified.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">4.3. Delivery Dates:</span> Any delivery dates provided are estimates only. NanoDx will use reasonable efforts to meet estimated delivery dates but shall not be liable for any failure to deliver by such dates.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">4.4. Partial Shipments:</span> NanoDx reserves the right to make partial shipments of Products and to invoice each shipment separately.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">4.5. Inspection and Claims:</span> The Customer must inspect all Products immediately upon receipt for damage, defects, or shortages. Any claims for shortages, damaged Products, or billing/pricing discrepancies must be reported to NanoDx in writing within five (5) business days of receipt of the Products or invoice, whichever is earlier. Failure to do so will constitute acceptance of the Products as delivered and waiver of any such claims.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">4.6. Returns:</span> Returns require prior written authorization from NanoDx. Products returned without authorization may be refused and returned at the Customer's expense. A restocking fee of 25% of the purchase price or a minimum of $25 (whichever is greater) may apply to returns not due to verified performance problems or shipping errors by NanoDx. Products must be returned in their original, unopened packaging, in saleable condition, and within a specified timeframe (e.g., 30 days of purchase).</p>
              </div>
            </section>

            {/* Section 5 - Product Use and Limitations */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">5. Product Use and Limitations</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">5.1. Intended Use:</span> Products manufactured and sold by NanoDx are intended for research, academic, and industry partners and are FOR RESEARCH USE ONLY (RUO), unless explicitly stated otherwise (e.g., "For In Vitro Diagnostic Use"). They are not intended for human therapeutic or diagnostic use, or for direct administration to humans or animals. The Customer acknowledges and agrees that the Products have not been approved or cleared by the U.S. Food and Drug Administration (FDA) or any other regulatory body for any clinical use, unless expressly indicated on the product labeling or documentation.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">5.2. Customer's Responsibility:</span> The Customer is solely responsible for determining the appropriateness of the Products for their intended application and for ensuring that the use of the Products complies with all applicable laws, regulations, and institutional policies, including those governing research involving human subjects, animal subjects, or recombinant DNA.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">5.3. Safety Data Sheets (SDS):</span> NanoDx provides Safety Data Sheets (SDS) for its Products where required. The Customer must review and understand the SDS prior to handling or using any Product and ensure that all personnel handling the Products are appropriately trained and equipped.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">5.4. Hazardous Materials:</span> The Customer is responsible for proper handling, storage, and disposal of hazardous materials in accordance with all applicable local, state, and federal regulations.</p>
              </div>
            </section>

            {/* Section 6 - Services */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">6. Services</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">6.1. Scope of Services:</span> The specific scope of Services (e.g., NanoImmunoassay Development, Immunochromatographic Assay Development) will be defined in a mutually agreed-upon statement of work, quotation, or service agreement.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">6.2. Customer Cooperation:</span> The Customer agrees to provide all necessary information, materials, and cooperation to enable NanoDx to perform the Services. Delays caused by the Customer's failure to provide such cooperation may result in additional charges or extended timelines.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">6.3. Service Outcomes:</span> While NanoDx will use commercially reasonable efforts to perform Services to a high standard, specific outcomes (e.g., assay performance) may depend on various factors outside NanoDx's control. NanoDx does not guarantee specific results unless explicitly stated in a written agreement.</p>
              </div>
            </section>

            {/* Section 7 - Limited Warranties and Disclaimers */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">7. Limited Warranties and Disclaimers</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">7.1. Product Warranty:</span> NanoDx warrants that, at the time of shipment, its Products will conform to the specifications set forth in the accompanying product literature, certificate of analysis, or on the NanoDx website. Consumable Products (reagents, chemicals, biologics, etc.) are warranted until their stated expiration date. Non-consumable goods (if any) are warranted against defects in materials and workmanship for twelve (12) months from the date of delivery, unless otherwise specified.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">7.2. Service Warranty:</span> NanoDx warrants that Services will be performed in a professional and workmanlike manner, in accordance with generally accepted industry standards.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">7.3. Exclusions:</span> The foregoing warranties do not apply to Products or Services that have been subjected to:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-400">
                  <li>Misuse, neglect, accident, or modification by the Customer.</li>
                  <li>Use of Products in a manner for which they were not intended or contrary to NanoDx's instructions.</li>
                  <li>Damage occurring as a result of the Customer's failure to follow specific instructions, including those in NanoDx's instructions for use or user manual.</li>
                  <li>Normal wear and tear.</li>
                  <li>Damage caused by force majeure events.</li>
                </ul>
                <p className="leading-8"><span className="font-semibold text-green-400">7.4. Customer's Sole Remedy:</span> If a Product or Service fails to meet the applicable warranty, NanoDx's sole obligation and the Customer's exclusive remedy shall be, at NanoDx's option, to:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-400">
                  <li>Replace the non-conforming Product.</li>
                  <li>Re-perform the non-conforming Service.</li>
                  <li>Refund the purchase price of the non-conforming Product or Service.</li>
                </ul>
                <p className="leading-8">The Customer must notify NanoDx in writing of any claimed defect within the applicable warranty period and, for Products, return the defective Product as per NanoDx's instructions.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">7.5. Disclaimer of Other Warranties:</span> EXCEPT AS EXPRESSLY PROVIDED IN THIS SECTION 7, NANODX MAKES NO OTHER WARRANTIES, EXPRESS OR IMPLIED, ORAL OR WRITTEN, WITH RESPECT TO THE PRODUCTS OR SERVICES, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. THE CUSTOMER ASSUMES ALL RISKS ASSOCIATED WITH THE USE OF THE PRODUCTS AND SERVICES.</p>
              </div>
            </section>

            {/* Section 8 - Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">8. Limitation of Liability</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">8.1.</span> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NANODX, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, LOSS OF USE, LOSS OF DATA, OR INTERRUPTIONS OF BUSINESS) ARISING OUT OF OR IN CONNECTION WITH THE SALE, USE, OR INABILITY TO USE THE PRODUCTS OR SERVICES, EVEN IF NANODX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">8.2.</span> IN NO EVENT SHALL NANODX'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE PRODUCTS OR SERVICES SOLD HEREUNDER EXCEED THE ACTUAL AMOUNT PAID BY THE CUSTOMER TO NANODX FOR THE SPECIFIC PRODUCT OR SERVICE GIVING RISE TO THE CLAIM.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">8.3.</span> The limitations of liability in this Section 8 apply whether the alleged liability is based on contract, tort (including negligence), strict liability, or any other basis.</p>
              </div>
            </section>

            {/* Section 9 - Indemnification */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">9. Indemnification</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <p className="leading-8">The Customer agrees to indemnify, defend, and hold harmless NanoDx, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorney's fees) arising out of or in connection with:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
                  <li>The Customer's use of the Products or Services, including any use not in accordance with these Terms or the intended use.</li>
                  <li>The Customer's breach of any of these Terms.</li>
                  <li>The Customer's violation of any applicable law or regulation.</li>
                  <li>Any claims by third parties related to the Customer's use of the Products or Services.</li>
                </ul>
              </div>
            </section>

            {/* Section 10 - Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">10. Intellectual Property</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">10.1. Ownership:</span> All Intellectual Property Rights related to the Products and Services (including, but not limited to, formulations, manufacturing processes, assay designs, software, trademarks, and copyrights) are and shall remain the sole and exclusive property of NanoDx or its licensors.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">10.2. Limited License:</span> NanoDx's sale of Products or provision of Services grants the Customer only a limited, non-transferable, non-sublicensable right to use the quantity of Products purchased or the results of the Services for the Customer's internal research, academic, or industry partner purposes, strictly in accordance with these Terms. No right to resell NanoDx products or any of their components is conveyed, expressly, by implication, or by estoppel.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">10.3. No Reverse Engineering:</span> The Customer shall not reverse engineer, decompile, disassemble, modify, adapt, reproduce, or create derivative works from the Products or Services, or any part thereof, without the express prior written consent of NanoDx.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">10.4. Customer's IP:</span> Any intellectual property developed by the Customer independently, without reliance on NanoDx's confidential information or IPR, shall remain the Customer's property.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">10.5. Feedback:</span> If the Customer provides any feedback, suggestions, or ideas regarding NanoDx Products or Services ("Feedback"), the Customer grants NanoDx a worldwide, perpetual, irrevocable, royalty-free license to use and incorporate such Feedback into its products and services without any obligation or compensation to the Customer.</p>
              </div>
            </section>

            {/* Section 11 - Confidentiality */}
            <section className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">11. Confidentiality</h2>
              <p className="leading-8">Any non-public information disclosed by NanoDx to the Customer, including but not limited to technical information, pricing, business plans, and product designs, is confidential and proprietary to NanoDx. The Customer agrees to use such information only for the purpose of evaluating or using NanoDx's Products and Services and not to disclose it to any third party without NanoDx's prior written consent.</p>
            </section>

            {/* Section 12 - Governing Law and Dispute Resolution */}
            <section>
              <h2 className="text-3xl font-bold text-green-400 mb-6">12. Governing Law and Dispute Resolution</h2>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 space-y-4">
                <p className="leading-8"><span className="font-semibold text-green-400">12.1. Governing Law:</span> These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the State of Florida, USA, without regard to its conflict of laws principles.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">12.2. Jurisdiction:</span> The parties agree that the state and federal courts located in Manatee County, Florida, USA, shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter or formation.</p>
                <p className="leading-8"><span className="font-semibold text-green-400">12.3. Informal Resolution:</span> The parties agree to attempt to resolve any disputes informally before resorting to litigation.</p>
              </div>
            </section>

            {/* Section 13 - Force Majeure */}
            <section className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">13. Force Majeure</h2>
              <p className="leading-8">NanoDx shall not be liable for any delay or failure in performance arising out of causes beyond its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes or shortages of transportation facilities, fuel, energy, labor, or materials.</p>
            </section>

            {/* Section 14 - Export Control */}
            <section className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">14. Export Control</h2>
              <p className="leading-8">The Customer acknowledges that Products and Services may be subject to U.S. export control laws and regulations. The Customer agrees to comply with all applicable export and import laws and regulations and will not export, re-export, or transfer, directly or indirectly, any Products or Services in violation of such laws and regulations.</p>
            </section>

            {/* Sections 15-20 */}
            {[
              { title: "15. Severability", text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect." },
              { title: "16. Waiver", text: 'No waiver of any provision of these Terms by NanoDx shall be effective unless made in writing and signed by an authorized representative of NanoDx. A waiver of any breach shall not be deemed a waiver of any subsequent breach.' },
              { title: "17. Entire Agreement", text: "These Terms, together with any applicable written quotation, order confirmation, or specific agreement, constitute the entire agreement between the Customer and NanoDx concerning the subject matter hereof and supersede all prior or contemporaneous communications, understandings, and agreements, whether oral or written." },
              { title: "18. Amendments", text: "NanoDx reserves the right to amend these Terms at any time by posting the revised Terms on its website. The updated Terms will be effective immediately upon posting. The Customer's continued use of the website or placement of Orders after such changes constitutes acceptance of the revised Terms." },
              { title: "19. Assignment", text: "The Customer may not assign or transfer any of its rights or obligations under these Terms without the prior written consent of NanoDx. NanoDx may assign its rights and obligations under these Terms without the Customer's consent." }
            ].map((item) => (
              <section key={item.title} className="bg-gray-800 rounded-3xl border border-gray-700 p-8">
                <h2 className="text-3xl font-bold text-green-400 mb-6">{item.title}</h2>
                <p className="leading-8">{item.text}</p>
              </section>
            ))}

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600/20 to-green-500/5 rounded-3xl border border-green-500/20 p-8">
              <h2 className="text-3xl font-bold text-green-400 mb-6">20. Contact Information</h2>
              <p className="leading-8">For any questions regarding these Terms or Products/Services, please contact NanoDx at:</p>
              <div className="mt-6 space-y-3">
                <p>NanoDx</p>
                <p>admin@nanodxcorp.com</p>
                <p>+91 9413022073</p>
                <p>Bradenton, FL</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}