import React from 'react';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-4 md:pt-8">
      <main className="flex-grow container mx-auto px-4 pb-12">
        <article className="max-w-4xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <header className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Return &amp; Refund Policy</h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Effective Date: 10 August 2026</p>
          </header>
          
          <div className="space-y-8 text-slate-600 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p>At LEXIP Automation Store, we want you to be completely satisfied with your purchase. This Return &amp; Refund Policy outlines the conditions under which products can be returned, replaced, or refunded. Please read this policy carefully before making a purchase.</p>
            </section>
            
            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">2. Return Eligibility</h2>
              <p className="mb-2">To be eligible for a return, the product must be:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Unused and in the same condition that you received it.</li>
                <li>In its original packaging, including all manuals, accessories, and protective materials.</li>
                <li>Accompanied by the original receipt or proof of purchase.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">3. Return Window</h2>
              <p>You may request a return within the applicable return period communicated at the time of purchase from the date of delivery. Return requests initiated outside of this window will not be accepted.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">4. Non-Returnable Products</h2>
              <p className="mb-2">Certain items cannot be returned, including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Custom-built, pre-configured, or special-order automation panels.</li>
                <li>Software licenses or downloadable digital products.</li>
                <li>Products that have been installed, wired, or physically altered.</li>
                <li>Items marked as "Final Sale" or "Clearance."</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">5. Damaged Products</h2>
              <p>If you receive a product that is physically damaged in transit or arrives with damaged packaging, please contact our support team as soon as reasonably possible. You will be required to provide your order details and clear photos/videos of the damaged item and the shipping box to facilitate the claim.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">6. Defective Products</h2>
              <p className="mb-2">If a product fails to function properly out of the box, it will be evaluated as a defective product. Please note that manufacturing defects are distinct from damage caused by:</p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Incorrect wiring or improper electrical installation.</li>
                <li>Electrical surges or voltage incompatibilities.</li>
                <li>Physical drops or misuse.</li>
                <li>Unauthorized modification or opening of the device.</li>
              </ul>
              <p>Defects will be assessed according to the applicable product/manufacturer warranty. Products damaged due to improper installation are not eligible for a return or refund.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">7. Incorrect Product Received</h2>
              <p>If you receive a product different from what you ordered, please contact us immediately. We will verify your order and the received product, and arrange for a replacement or a refund upon the return of the incorrect item.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">8. Missing Items</h2>
              <p>If your order is missing components or accessories, please report it to us immediately. Subject to verification, we will arrange to send the missing parts or provide a suitable resolution.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">9. Return Request Process</h2>
              <p className="mb-2">To initiate a return:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Contact us at Lexiptechnology@gmail.com with your order number and reason for return.</li>
                <li>Wait for our support team to verify the request and issue a Return Authorization.</li>
                <li>Pack the item securely and ship it to the address provided by our support team.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">10. Required Evidence</h2>
              <p>For returns involving damage, defects, or incorrect items, we require photo or video evidence to process the request quickly and accurately. Failure to provide requested evidence may delay or result in the denial of the return.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">11. Inspection Process</h2>
              <p>Once your returned item is received, it will undergo a physical inspection by our technical team. We will notify you of the approval or rejection of your refund or replacement based on the condition of the item and its adherence to this policy.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">12. Replacement Process</h2>
              <p>If a replacement is approved for a defective, damaged, or incorrect item, we will dispatch the replacement unit to your original shipping address at no additional shipping cost to you.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">13. Refund Process</h2>
              <p>If a refund is approved, it will be processed and automatically applied to your original method of payment.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">14. Refund Processing Timeline</h2>
              <p>Please note that the time it takes for a refund to appear in your account depends on your bank or payment provider. The processing timeline will be confirmed by LEXIP at the time of refund approval.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">15. Shipping Charges</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Defective/Incorrect Items:</strong> We will bear the return shipping costs.</li>
                <li><strong>Change of Mind/Other Returns:</strong> You will be responsible for paying the return shipping costs. Original shipping charges are non-refundable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">16. Product Packaging</h2>
              <p>Items must be returned in a shipping box that protects the product. Placing shipping labels directly onto the manufacturer’s product box may result in the item being rejected for a refund, as the packaging is considered part of the product.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">17. Warranty Claims vs Return</h2>
              <p>The return window is strictly for new, unused, or out-of-the-box defective items. If a product develops a fault after being successfully installed and used, it falls under the product's warranty coverage, not this Return Policy.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">18. Cancellation</h2>
              <p>You may cancel your order before it has been dispatched. Once an order is handed over to the logistics provider, it cannot be canceled and must be processed as a standard return upon delivery.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">19. Special / Custom Orders</h2>
              <p>Any products ordered specifically on demand or custom-configured for your automation requirements cannot be canceled once production or procurement has begun, and are generally non-returnable unless defective.</p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">20. Contact Information</h2>
              <p className="mb-2">If you have any questions regarding returns, refunds, or cancellations, please contact us:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Email:</strong> Lexiptechnology@gmail.com</li>
                <li><strong>Phone:</strong> +91 979059 8203</li>
                <li><strong>Locations:</strong> Theni | Coimbatore | Dindigul</li>
              </ul>
            </section>

          </div>
        </article>
      </main>
    </div>
  );
}
