import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import DarkVeil from "@/components/dark-veil"
import { ArrowLeft, Mail, MapPin, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Use and Sale — SYLVEDHA LLP",
  description: "Sylvedha LLP Terms of Use and Sale",
}

const sections = [
  {
    id: "sec-0",
    title: "Introduction",
    content: `TERMS OF USE AND SALE


These Terms of Use and Sale (“Terms”) govern your access to and use of sylvedha.com and your interactions with the products, services, projects, content, forms, order-request facilities, waiting lists, and communication channels operated by Sylvedha LLP (“Sylvedha,” “we,” “us,” or “our”).
By accessing the website, submitting a form, joining a waiting list, requesting a product, confirming an order, or otherwise using our services, you agree to these Terms.
If you do not agree with these Terms, you should not use the website or submit an order request.
These Terms should be read together with our:
- Privacy Policy;
- Shipping and Delivery Policy, where published;
- Cancellation, Return and Refund Policy, where published;
- product-specific instructions;
- quotation or invoice terms; and
- any additional conditions communicated before an order is confirmed.
Where separate written terms apply to a particular order, project, product, service, quotation, business transaction, pilot, research engagement, or customised development, those specific written terms will prevail to the extent of any conflict.`
  },
  {
    id: "sec-1",
    title: "1. About Sylvedha",
    content: `Sylvedha LLP is an Indian limited liability partnership engaged in areas that may include agriculture, biotechnology, food and agricultural products, renewable energy, automation, engineering, research and development, technology, product development, manufacturing, and related activities.
The website may contain:
- information about Sylvedha;
- information about current or proposed projects;
- product descriptions;
- research and development updates;
- company announcements;
- educational or informational material;
- enquiry and feedback forms;
- anonymous feedback facilities;
- waiting-list or preorder facilities; and
- facilities to request products or services.
Unless expressly stated otherwise, website content is provided for general information and does not constitute a binding offer, technical guarantee, investment invitation, medical advice, agricultural advice, or professional consultancy.`
  },
  {
    id: "sec-2",
    title: "2. Eligibility",
    content: `You must be legally capable of entering into a binding agreement to place or confirm an order.
If you are under 18 years of age, you may browse the website only with appropriate supervision. Any order, payment, commercial enquiry, or submission involving personal information must be made through or with the permission of a parent or lawful guardian.
If you use the website or place an order on behalf of a company, institution, partnership, organisation, or another person, you represent that:
- you have authority to act on their behalf;
- the information you provide is accurate;
- you have authority to accept these Terms for them; and
- they will be responsible for obligations arising from the transaction.`
  },
  {
    id: "sec-3",
    title: "3. Website Access",
    content: `We may modify, suspend, restrict, or discontinue any part of the website at any time.
We do not guarantee that:
- the website will always be available;
- access will be uninterrupted;
- every feature will remain available;
- content will always be error-free;
- the website will be compatible with every device or browser; or
- enquiries or forms will always be successfully transmitted.
Temporary interruptions may occur due to maintenance, hosting issues, network failures, security events, upgrades, third-party services, or circumstances beyond our reasonable control.
You are responsible for ensuring that your device, internet connection, browser, and security settings are suitable for accessing the website.`
  },
  {
    id: "sec-4",
    title: "4. Permitted Use",
    content: `You may use the website only for lawful personal, informational, or legitimate business purposes.
You must not:
- use the website for unlawful, fraudulent, harmful, or deceptive activity;
- submit false identity, contact, order, delivery, or payment information;
- impersonate another person or organisation;
- place fake orders or deliberately submit misleading enquiries;
- submit automated spam or excessive repetitive requests;
- attempt to interfere with the website’s operation or security;
- gain or attempt to gain unauthorised access to systems, accounts, databases, or administrative areas;
- introduce malware, harmful code, scripts, bots, scraping tools, or denial-of-service activity;
- extract, scrape, reproduce, or systematically collect website information without written permission;
- reverse-engineer any restricted software, feature, or system;
- use Sylvedha’s name, logo, content, or brand in a misleading manner;
- misrepresent a relationship, partnership, approval, sponsorship, or affiliation with Sylvedha;
- submit defamatory, threatening, abusive, discriminatory, obscene, illegal, or rights-infringing content;
- upload material that violates another person’s privacy, confidentiality, copyright, trademark, or intellectual-property rights; or
- use information obtained from the website to harm Sylvedha, its customers, personnel, partners, or other users.
We may restrict or block access, reject submissions, cancel unconfirmed requests, preserve relevant records, or report activity to competent authorities where misuse is suspected.`
  },
  {
    id: "sec-5",
    title: "5. Website Information",
    content: `We attempt to present information accurately and keep important details reasonably current. However, the website may occasionally contain:
- typographical errors;
- incomplete information;
- outdated information;
- approximate specifications;
- illustrative images;
- development-stage concepts;
- estimated timelines;
- preliminary research;
- proposed products; or
- content subject to change.
Information describing a planned, experimental, prototype, research-stage, testing-stage, pilot-stage, or upcoming product does not mean that the product is commercially available or guaranteed to be released.
We may correct or update website content without prior notice.
You should obtain direct written confirmation from Sylvedha before relying on website information for a purchase, investment, partnership, technical project, commercial commitment, regulatory decision, or other material purpose.`
  },
  {
    id: "sec-6",
    title: "6. Product Images and Descriptions",
    content: `We make reasonable efforts to display products accurately. However:
- photographs may be representative;
- colours may vary depending on lighting, photography, screens, and devices;
- natural or agricultural products may vary in size, shape, colour, texture, density, flavour, freshness, or appearance;
- handmade, prototype, customised, or small-batch products may have minor variations;
- packaging may change based on availability, improvement, transportation, regulation, or supplier changes; and
- displayed dimensions, weights, quantities, and specifications may be approximate unless expressly guaranteed in writing.
Minor variations that do not materially affect the product’s intended use will not automatically make a product defective.
Nothing in this section limits rights available to a customer where goods are materially defective, unsafe, incorrectly supplied, materially different from the confirmed description, or otherwise covered by applicable law.`
  },
  {
    id: "sec-7",
    title: "7. Product Availability",
    content: `All products and services are subject to availability.
Displaying a product, project, service, price, expected quantity, or estimated launch date on the website does not guarantee that it is currently available.
We may:
- limit quantities;
- restrict delivery locations;
- pause or discontinue products;
- change packaging or specifications;
- reject unusually large or suspicious requests;
- allocate limited stock between customers;
- revise an estimated availability date; or
- withdraw an item before an order is formally accepted.
For agricultural, biological, fresh, seasonal, experimental, customised, or small-batch products, availability may depend on cultivation conditions, quality checks, raw materials, production capacity, testing, storage, transport, regulatory requirements, and other operational factors.`
  },
  {
    id: "sec-8",
    title: "8. Enquiries, Waiting Lists and Order Requests",
    content: `The website may allow you to:
- enquire about a product;
- indicate purchase interest;
- submit a requested quantity;
- join a waiting list;
- submit a preorder request; or
- ask Sylvedha to contact you.
Submitting such a form is generally a request for communication and does not itself create a confirmed order or binding sales contract.
Joining a waiting list:
- does not guarantee stock;
- does not reserve a product unless expressly confirmed;
- does not guarantee a specific price;
- does not create priority beyond what Sylvedha confirms;
- does not require you to purchase; and
- does not require Sylvedha to accept an eventual order.
After receiving your request, we may contact you to confirm:
- product availability;
- quantity;
- specifications or preferences;
- price;
- applicable taxes;
- packaging;
- delivery location;
- delivery charges;
- estimated delivery date;
- payment method;
- cancellation conditions; and
- any product-specific requirements.
You are responsible for reviewing these details before confirming the order.`
  },
  {
    id: "sec-9",
    title: "9. Formation of an Order",
    content: `A binding order is formed only when Sylvedha expressly confirms acceptance through an authorised communication, invoice, written order confirmation, payment confirmation, or another clear written acceptance.
An automated message stating that a website form was received is not necessarily an acceptance of the order.
Sylvedha may decline or cancel an unfulfilled order where reasonably necessary, including where:
- the product is unavailable;
- the requested quantity cannot be supplied;
- the price or product information contained an obvious error;
- delivery is unavailable to the supplied location;
- required information is incomplete;
- payment is not received or cannot be verified;
- fraud or misuse is suspected;
- the request violates these Terms;
- fulfilling the order would violate law or safety requirements; or
- an event beyond reasonable control prevents fulfilment.
Where we cancel an accepted order after receiving payment, we will ordinarily refund the amount received for the unfulfilled portion, subject to any lawful deduction previously disclosed and accepted.`
  },
  {
    id: "sec-10",
    title: "10. Prices and Taxes",
    content: `Prices displayed on the website, social media, promotional material, or informal communication may be indicative unless expressly stated to be final.
The final payable amount will be communicated before the order is confirmed and may include:
- product price;
- applicable taxes;
- packaging charges;
- delivery or courier charges;
- handling charges;
- customisation charges;
- installation or service charges; and
- other clearly disclosed charges connected with the order.
We may change prices before accepting an order.
Once an order is accepted, we will not ordinarily change its confirmed price unless:
- the customer changes the quantity, delivery location, specifications, or scope;
- the parties mutually agree to a change;
- a tax or government charge changes;
- there is an obvious pricing error; or
- the original confirmation clearly stated that the price was provisional or estimate-based.
Any obvious typographical, technical, or calculation error may be corrected before fulfilment. You will be informed and may choose whether to proceed at the corrected price.`
  },
  {
    id: "sec-11",
    title: "11. Payments",
    content: `Sylvedha does not currently process payments directly through sylvedha.com.
After an order is discussed and confirmed, payment may be completed separately through a mutually communicated method, which may include:
- bank transfer;
- UPI;
- payment application;
- payment link;
- cash on delivery, where offered; or
- another approved payment method.
Payment instructions should be treated as valid only when communicated through an authorised Sylvedha channel.
You must verify the recipient name, account details, UPI identifier, amount, and order reference before making payment.
Sylvedha will never ask you to disclose:
- your UPI PIN;
- OTP;
- internet-banking password;
- card security code;
- complete card credentials; or
- account password.
You are responsible for payments made to incorrect, fraudulent, impersonating, or unauthorised accounts where the payment instructions were not issued or confirmed by Sylvedha.
If you receive suspicious or changed payment instructions, contact info@sylvedha.com through a separate communication before making payment.
An order may remain unconfirmed or unprocessed until payment is received and verified, unless different written terms have been agreed.`
  },
  {
    id: "sec-12",
    title: "12. Invoices and Transaction Records",
    content: `Where applicable, Sylvedha may issue an invoice, receipt, order confirmation, or transaction acknowledgement.
You must review the document and promptly notify us of errors concerning:
- customer name;
- billing information;
- product;
- quantity;
- amount;
- tax details;
- delivery address; or
- other material particulars.
Invoices and records may be delivered electronically.
You are responsible for providing accurate information required for billing, taxation, delivery, and record-keeping.`
  },
  {
    id: "sec-13",
    title: "13. Delivery and Collection",
    content: `Delivery availability, method, estimated timeline, and charges will be communicated during order confirmation.
Delivery may be performed by:
- Sylvedha;
- an authorised representative;
- a local delivery service;
- a courier or logistics provider;
- a distributor; or
- another agreed fulfilment partner.
Delivery dates are estimates unless expressly guaranteed in writing.
Delays may occur due to:
- weather;
- traffic;
- courier operations;
- remote locations;
- incorrect addresses;
- recipient unavailability;
- product availability;
- cultivation or production conditions;
- quality-control requirements;
- strikes;
- public restrictions;
- natural events;
- system failures; or
- other events outside reasonable control.
You must provide a complete and accurate delivery address, postal code, telephone number, recipient name, and relevant delivery instructions.
Additional delivery costs resulting from an incorrect address, failed delivery, repeated delivery attempt, refusal without valid reason, or recipient unavailability may be charged where lawfully applicable and disclosed.
Where pickup is arranged, the customer must collect the product within the communicated period. Special storage, spoilage, or repeated handling resulting from delayed collection may affect eligibility for replacement or refund, particularly for fresh or perishable products.`
  },
  {
    id: "sec-14",
    title: "14. Inspection on Delivery",
    content: `You should inspect the order as soon as reasonably possible after receiving it.
For visible damage, missing items, incorrect products, packaging failure, or quantity differences, you should contact us promptly and provide:
- order or invoice reference;
- description of the issue;
- photographs or video where reasonably available;
- delivery date and time; and
- relevant packaging or label information.
For fresh, perishable, agricultural, biological, temperature-sensitive, or time-sensitive products, complaints should be raised as soon as possible after delivery because the product’s condition may change with time, storage, handling, or environmental exposure.
Failure to report an immediately visible problem promptly may make investigation difficult, but it does not remove any non-waivable legal right.
Do not consume, install, modify, process, discard, or extensively use a product that you reasonably believe is unsafe, incorrectly supplied, or materially defective before contacting us, except where disposal is reasonably necessary for immediate safety.`
  },
  {
    id: "sec-15",
    title: "15. Fresh, Agricultural and Perishable Products",
    content: `Some Sylvedha products may be fresh, agricultural, biological, naturally variable, perishable, or sensitive to temperature, light, moisture, storage, handling, or transportation.
You are responsible for following the storage, handling, washing, preparation, consumption, expiry, safety, or usage instructions supplied with the product.
Natural variation alone does not necessarily constitute a defect.
A product may not be eligible for return merely because:
- its natural appearance varies slightly;
- personal taste or preference differs;
- the customer ordered an incorrect quantity or variant;
- the customer did not follow storage instructions;
- delivery was successfully completed but collection or use was delayed;
- the product was mishandled after delivery; or
- the product has been opened, consumed, contaminated, mixed, altered, or improperly stored.
This section does not limit remedies relating to unsafe, spoiled on delivery, materially defective, contaminated, incorrectly supplied, or materially misdescribed products.`
  },
  {
    id: "sec-16",
    title: "16. Food and Consumption Information",
    content: `Where Sylvedha supplies food, agricultural produce, microgreens, ingredients, or consumable products:
- product information is intended for general informational purposes;
- nutritional information may be approximate unless based on a specific certified test;
- individual nutritional content may vary due to variety, cultivation conditions, storage, harvesting, and natural variation;
- customers are responsible for checking ingredients and suitability;
- persons with allergies, sensitivities, medical conditions, pregnancy-related concerns, dietary restrictions, or medication interactions should seek appropriate professional advice before consumption; and
- products must be stored, washed, prepared, and consumed according to supplied instructions.
Statements describing potential nutritional characteristics or general benefits are not intended to diagnose, treat, cure, or prevent a disease and are not a substitute for medical advice.
Do not consume a product that appears spoiled, contaminated, improperly sealed, unusually damaged, or otherwise unsafe.`
  },
  {
    id: "sec-17",
    title: "17. Cancellation by the Customer",
    content: `A cancellation request should be sent as early as possible to info@sylvedha.com or through the authorised contact handling the order.
Whether cancellation is possible may depend on:
- whether the order has been accepted;
- whether payment has been made;
- whether production, harvesting, procurement, preparation, packaging, dispatch, or customisation has started;
- whether delivery has already been arranged;
- whether the product is fresh, perishable, customised, made-to-order, or specially procured; and
- costs already reasonably incurred.
An enquiry or unconfirmed order request may generally be withdrawn without charge.
For a confirmed order, cancellation may be accepted before processing begins. Once processing, harvesting, customisation, packaging, or dispatch has started, cancellation may be refused or may be subject to reasonable costs already incurred, where legally permitted and previously disclosed.
Any product-specific cancellation terms communicated before confirmation will form part of the order.`
  },
  {
    id: "sec-18",
    title: "18. Returns, Replacements and Refunds",
    content: `Return, replacement, and refund eligibility will depend on the nature of the product and the reason for the request.
We may offer an appropriate remedy where a confirmed order:
- contains the wrong product;
- contains a material quantity shortage;
- arrives materially damaged;
- is materially defective;
- is materially different from the confirmed description;
- is unsafe or spoiled at the time of delivery; or
- cannot be fulfilled after payment.
Depending on the circumstances, the remedy may include:
- replacement;
- redelivery;
- supply of the missing quantity;
- repair, where appropriate;
- store credit, if voluntarily accepted;
- partial refund; or
- full refund.
We may request reasonable evidence and may need to inspect or collect the product before approving a remedy.
Returns may be refused where:
- the issue results from misuse, improper storage, mishandling, unauthorised alteration, or failure to follow instructions;
- a perishable product is reported after an unreasonable delay that prevents verification;
- the product was customised correctly according to the confirmed request;
- the customer simply changed their mind after processing or dispatch;
- the product has been substantially consumed or used without a reported defect;
- the product was damaged after delivery; or
- the request is fraudulent or abusive.
Nothing in these Terms excludes remedies that cannot lawfully be excluded under applicable consumer-protection law.
Approved refunds will ordinarily be made through the original or another mutually agreed payment method. Processing time may depend on banks and payment-service providers.`
  },
  {
    id: "sec-19",
    title: "19. Customised, Prototype and Development Products",
    content: `Customised, experimental, prototype, pilot, research-stage, engineering, software, automation, biotechnology, agricultural, or made-to-order products and services may require separate written terms.
Such terms may cover:
- specifications;
- deliverables;
- development stages;
- milestones;
- testing;
- acceptance criteria;
- dependencies;
- customer-supplied information;
- intellectual-property ownership;
- confidentiality;
- regulatory responsibility;
- payment schedule;
- support;
- warranties;
- limitations;
- change requests; and
- project termination.
Concepts, illustrations, prototypes, renders, simulations, estimated performance, and preliminary designs may not represent final production results.
No customised development, technical collaboration, research engagement, pilot, investment relationship, distributorship, partnership, or intellectual-property transfer is created merely by submitting a website enquiry.
A separate signed agreement may be required before such work begins.`
  },
  {
    id: "sec-20",
    title: "20. Feedback, Suggestions and Submissions",
    content: `You may submit feedback, suggestions, product requests, questions, complaints, or ideas.
You retain ownership of content that you lawfully own.
By submitting content, you grant Sylvedha permission to receive, store, review, reproduce internally, analyse, summarise, and use that content as reasonably necessary to:
- respond to you;
- investigate issues;
- improve products and services;
- conduct business intelligence and statistical analysis;
- understand demand and preferences;
- make operational, product, research, or strategic decisions;
- maintain records; and
- protect legal rights.
Where reasonably possible, statistical and business-intelligence uses will rely on aggregated or de-identified information.
Unless a separate confidentiality agreement has been signed, ordinary website forms and general communication channels must not be used to submit:
- trade secrets;
- patentable confidential inventions;
- unreleased proprietary research;
- confidential business strategies;
- third-party confidential information; or
- material subject to contractual secrecy obligations.
Submitting an unsolicited idea does not create:
- a confidential relationship;
- a partnership;
- an employment relationship;
- a consultancy relationship;
- an obligation to develop the idea;
- an obligation to compensate you; or
- exclusivity in your favour.
This does not permit Sylvedha to unlawfully copy protected intellectual property or claim ownership over material that legally belongs to you.`
  },
  {
    id: "sec-21",
    title: "21. Anonymous Submissions",
    content: `The website may provide an anonymous enquiry or feedback facility.
An anonymous submission may be used for internal review, statistical analysis, product improvement, operational decisions, or strategy development.
You should not include information that identifies you if you wish to remain anonymous.
We may be unable to:
- respond personally;
- verify the circumstances;
- investigate an order;
- communicate an outcome; or
- provide an individual remedy
where no identifying or contact information is provided.
Anonymous facilities must not be used to submit threats, unlawful material, harassment, spam, false allegations made maliciously, or content that violates another person’s rights.`
  },
  {
    id: "sec-22",
    title: "22. Intellectual Property",
    content: `Unless otherwise stated, the website and its contents are owned by, licensed to, or lawfully used by Sylvedha.
Protected content may include:
- the Sylvedha name and logo;
- Grevara and other product or project names;
- website designs;
- text;
- graphics;
- photographs;
- diagrams;
- illustrations;
- videos;
- research summaries;
- product concepts;
- technical material;
- software;
- interfaces;
- branding;
- documents; and
- downloadable materials.
You may view website content for personal information and legitimate evaluation of Sylvedha’s products or services.
You may not, without prior written permission:
- reproduce substantial website content;
- republish it;
- sell or commercially exploit it;
- modify or create misleading derivative material;
- remove ownership notices;
- use it to impersonate Sylvedha;
- use Sylvedha’s branding to market unauthorised products;
- train or populate a competing commercial database through systematic extraction; or
- falsely claim ownership, partnership, approval, or affiliation.
Limited sharing of unmodified public website links is permitted, provided the sharing is lawful and does not misrepresent Sylvedha.`
  },
  {
    id: "sec-23",
    title: "23. Third-Party Rights and Content",
    content: `Third-party names, trademarks, photographs, research references, platforms, technologies, and product names remain the property of their respective owners.
Reference to a third party does not necessarily imply endorsement, sponsorship, partnership, certification, or affiliation.
If you reasonably believe that content on the website infringes your rights, contact info@sylvedha.com with:
- your identity and contact information;
- identification of the protected material;
- identification of the allegedly infringing content;
- the basis of your claim; and
- supporting information.
We may request further verification before taking action.`
  },
  {
    id: "sec-24",
    title: "24. Third-Party Links and Services",
    content: `The website may link to social-media pages, external payment services, maps, communication platforms, research sources, delivery providers, or other third-party websites.
Third-party services are independently operated and governed by their own terms and privacy practices.
Sylvedha is not responsible for:
- third-party availability;
- third-party content;
- external security;
- external data handling;
- third-party transactions;
- changes made by third parties; or
- loss caused solely by an independently operated third-party service.
You should review third-party terms before using those services.`
  },
  {
    id: "sec-25",
    title: "25. No Investment or Partnership Offer",
    content: `Website descriptions of Sylvedha’s projects, technologies, research, plans, markets, funding activities, projected impact, potential products, or future operations are provided for general information unless expressly included in an authorised investment or commercial document.
Nothing on the public website by itself constitutes:
- an offer of securities;
- an invitation to invest;
- a guaranteed return;
- a financial projection on which reliance is invited;
- a partnership offer;
- a distributorship appointment;
- an agency relationship;
- a franchise;
- an employment offer; or
- a binding collaboration agreement.
Any investment, partnership, distributorship, research, licensing, or commercial arrangement requires appropriate due diligence and separate written documentation signed by authorised representatives.`
  },
  {
    id: "sec-26",
    title: "26. No Professional Advice",
    content: `General website information does not constitute legal, financial, medical, nutritional, environmental, engineering, scientific, agricultural, regulatory, or investment advice.
Research and technical content may be simplified, preliminary, experimental, or context-dependent.
You should obtain qualified professional advice before making decisions involving safety, health, substantial expenditure, legal compliance, engineering implementation, cultivation, manufacturing, investment, or regulated activity.`
  },
  {
    id: "sec-27",
    title: "27. Warranties",
    content: `Products will be subject to any warranty expressly provided in:
- the product listing;
- packaging;
- invoice;
- order confirmation;
- manufacturer documentation; or
- a separate written agreement.
Except to the extent required by law or expressly agreed in writing, Sylvedha does not provide additional implied guarantees regarding:
- uninterrupted website availability;
- suitability for every user or purpose;
- achievement of a particular commercial result;
- compatibility with third-party systems;
- experimental or prototype performance;
- natural product uniformity;
- future product availability; or
- accuracy of preliminary research or projections.
No statement by an unauthorised person changes the confirmed order terms or creates an additional warranty.
Mandatory statutory warranties and consumer rights remain unaffected.`
  },
  {
    id: "sec-28",
    title: "28. Limitation of Liability",
    content: `Nothing in these Terms excludes or limits liability where exclusion or limitation is prohibited by law.
Subject to that qualification, Sylvedha will not be liable for indirect, incidental, special, punitive, or consequential loss arising solely from use of the website, including loss of expected profit, opportunity, goodwill, or data, where such loss was not reasonably foreseeable or directly caused by Sylvedha’s breach.
Sylvedha will not be responsible for loss caused by:
- false or incomplete information supplied by the user;
- failure to follow product instructions;
- misuse or unauthorised alteration;
- improper storage or handling after delivery;
- payment made to an unauthorised account;
- third-party platforms or services outside Sylvedha’s control;
- customer delay in reporting a perishable-product issue;
- unlawful website use;
- events beyond reasonable control; or
- reliance on clearly labelled proposed, experimental, preliminary, or general informational content.
For a product order, any contractual limitation will not reduce the customer’s non-waivable rights concerning defective goods, deficient services, unfair practices, personal injury, fraud, wilful misconduct, or other liability that cannot legally be excluded.`
  },
  {
    id: "sec-29",
    title: "29. Responsibility for Loss Caused by Misuse",
    content: `You may be responsible for reasonable loss, damage, investigation costs, or third-party claims directly caused by your:
- unlawful use of the website;
- deliberate fraud;
- malicious interference;
- infringement of third-party rights;
- knowingly false submission;
- unauthorised use of Sylvedha’s identity or intellectual property; or
- material breach of these Terms.
This provision does not require an ordinary consumer to compensate Sylvedha merely for exercising a legal right, submitting a genuine complaint, leaving honest feedback, or pursuing an available consumer remedy.`
  },
  {
    id: "sec-30",
    title: "30. Events Beyond Reasonable Control",
    content: `Sylvedha will not be treated as having breached these Terms where performance is delayed or prevented by circumstances beyond reasonable control.
These may include:
- natural disasters;
- extreme weather;
- flood, drought, fire, or crop failure;
- epidemic or public-health restriction;
- war, civil disturbance, or terrorism;
- government action;
- transport disruption;
- power or communication failure;
- cyberattack;
- supplier failure;
- labour disruption;
- raw-material shortage;
- courier failure;
- regulatory delay; or
- failure of essential third-party infrastructure.
We will take reasonable steps to communicate material delays and resume performance when reasonably possible.
Where an accepted paid order cannot be fulfilled, appropriate cancellation, alternative fulfilment, credit, or refund arrangements will be communicated.`
  },
  {
    id: "sec-31",
    title: "31. Privacy",
    content: `Our collection and use of personal information are governed by the Sylvedha Privacy Policy.
By submitting information, you confirm that:
- the information is accurate to the best of your knowledge;
- you are authorised to provide it;
- it does not unlawfully violate another person’s rights; and
- you have reviewed the Privacy Policy.
Aggregated or de-identified information may be used for statistics, business intelligence, forecasting, research, product development, operational planning, performance measurement, and strategic decision-making in accordance with the Privacy Policy.`
  },
  {
    id: "sec-32",
    title: "32. Complaints and Grievance Redressal",
    content: `Questions or complaints concerning the website, an order, product, service, refund, delivery, or these Terms may be sent to:
Grievance Officer: Royson Salis
Designation: Chief Executive Officer, Sylvedha LLP
Email: info@sylvedha.com
Website: sylvedha.com
Please use an appropriate subject line, such as:
- “Order Complaint”;
- “Refund Request”;
- “Product Issue”;
- “Website Grievance”; or
- “Terms Enquiry.”
Where applicable, include:
- your name;
- contact information;
- order or invoice reference;
- product involved;
- description of the issue;
- relevant photographs or records; and
- requested resolution.
Do not send passwords, OTPs, UPI PINs, or complete banking credentials.
Sylvedha will review genuine complaints and respond within the period required by applicable law.`
  },
  {
    id: "sec-33",
    title: "33. Governing Law and Disputes",
    content: `These Terms and transactions with Sylvedha are governed by the laws of India.
The parties should first attempt to resolve a dispute through good-faith communication using the grievance process above.
Subject to mandatory consumer-protection rights and the jurisdiction of competent consumer commissions, regulatory authorities, or courts under applicable law, legal proceedings relating to these Terms will be subject to the competent courts at [Insert city and state of Sylvedha’s registered or principal office].
Nothing in these Terms prevents a consumer from approaching a forum, commission, authority, or court having jurisdiction under applicable consumer-protection law.`
  },
  {
    id: "sec-34",
    title: "34. Suspension and Termination",
    content: `We may restrict access to the website or refuse further transactions where a user:
- materially breaches these Terms;
- commits or attempts fraud;
- abuses staff or delivery personnel;
- repeatedly places fake orders;
- misuses refunds or complaints;
- threatens website or system security;
- infringes intellectual-property rights; or
- engages in unlawful conduct.
Termination does not affect:
- obligations already incurred;
- outstanding payments;
- existing legal rights;
- confirmed refunds;
- confidentiality obligations;
- intellectual-property rights; or
- provisions intended to survive termination.`
  },
  {
    id: "sec-35",
    title: "35. Changes to These Terms",
    content: `We may update these Terms to reflect changes in:
- website features;
- order processes;
- products or services;
- delivery arrangements;
- payment methods;
- business operations;
- technology;
- security requirements; or
- applicable law.
Updated Terms will be published on the website with a revised “Last Updated” date.
Changes will generally apply from the stated effective date and will not retroactively remove rights relating to an already confirmed order unless required by law or agreed by the parties.
Material order-specific changes will be communicated directly where appropriate.`
  },
  {
    id: "sec-36",
    title: "36. Severability",
    content: `If any provision of these Terms is held to be invalid, unlawful, or unenforceable, that provision will be interpreted or limited to the minimum extent necessary, and the remaining provisions will continue to apply.`
  },
  {
    id: "sec-37",
    title: "37. No Waiver",
    content: `Failure or delay by Sylvedha in enforcing a provision does not permanently waive that provision or any other right.
A waiver is effective only when clearly provided by an authorised representative in writing.`
  },
  {
    id: "sec-38",
    title: "38. Assignment",
    content: `You may not transfer a confirmed order, contractual right, or obligation to another person without Sylvedha’s consent where the transfer would materially affect payment, delivery, product suitability, customisation, or legal compliance.
Sylvedha may transfer relevant rights and obligations as part of a lawful restructuring, merger, business transfer, or succession, subject to applicable law and continued protection of customer rights.`
  },
  {
    id: "sec-39",
    title: "39. Entire Agreement",
    content: `For general website use, these Terms and the Privacy Policy constitute the agreement concerning use of the website.
For an order, the applicable agreement may additionally include:
- the final order confirmation;
- quotation;
- invoice;
- product description;
- payment terms;
- delivery terms;
- return or refund terms;
- product-specific instructions; and
- any separately signed agreement.
These documents should be interpreted together.`
  },
  {
    id: "sec-40",
    title: "40. Contact Information",
    content: `For questions regarding these Terms:
Sylvedha LLP
Email: info@sylvedha.com
Website: sylvedha.com
For complaints and grievance redressal:
Royson Salis
Chief Executive Officer and Grievance Officer
Sylvedha LLP
Email: info@sylvedha.com
© 2026 Sylvedha LLP. All rights reserved.`
  },
]

function RichText({ text }: { text: string }) {
  const lines = text.split("\n")
  const elements: any[] = []
  let inList = false
  let listItems: any[] = []
  let ulCount = 0

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-${ulCount++}`} className="list-disc list-outside ml-6 space-y-3 text-white/80 marker:text-[#BFF202] mb-6">
          {listItems}
        </ul>
      )
      listItems = []
      inList = false
    }
  }

  lines.forEach((line, i) => {
    if (!line.trim()) {
      flushList()
      return
    }

    const isListItem = line.trim().startsWith("- ")
    
    if (isListItem) {
      inList = true
      const content = line.replace("- ", "").trim()
      const parts = content.split(/\*\*(.*?)\*\*/g)
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="font-bold text-[#BFF202]">{part}</strong> : <span key={j}>{part.replace(/'/g, "'")}</span>
      )
      listItems.push(<li key={`li-${i}`} className="pl-2 leading-relaxed">{rendered}</li>)
    } else {
      flushList()
      const parts = line.split(/\*\*(.*?)\*\*/g)
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="font-bold text-[#BFF202]">{part}</strong> : <span key={j}>{part.replace(/'/g, "'")}</span>
      )
      elements.push(
        <p key={`p-${i}`} className="leading-relaxed mb-6 last:mb-0 text-white/80">
          {rendered}
        </p>
      )
    }
  })
  
  flushList()

  return <div className="text-base sm:text-lg">{elements}</div>
}

export default function Page() {
  return (
    <div className="min-h-screen bg-transparent text-white/80 relative">
      <div className="fixed inset-0 -z-50 bg-[#000504]" />
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <DarkVeil hueShift={0} noiseIntensity={0.03} scanlineIntensity={0.1} speed={0.15} scanlineFrequency={800} warpAmount={0.5} resolutionScale={0.5} />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <div className="mx-auto flex max-w-5xl items-center px-5 py-6 sm:px-8 pointer-events-auto">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="size-5 text-white/50 transition-transform group-hover:-translate-x-1" />
            <div className="relative h-12 w-[160px]">
              <Image src="/images/logo-horizontal-dark-green.webp" alt="Sylvedha" fill sizes="160px" className="object-contain" />
            </div>
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-[#BFF202]/10">
        
        <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Terms of Use and Sale
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-base text-white/50">
            <span>Effective Date: <span className="text-[#BFF202]/80">19 July 2026</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Last Updated: <span className="text-[#BFF202]/80">19 July 2026</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>LLP ID: <span className="text-[#BFF202]/80">ACX-4015</span></span>
          </div>
        </div>
      </section>

      <nav className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-6">Contents</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sections.filter(s => s.title !== 'Introduction').map((s) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 rounded-lg px-4 py-3 text-base text-white/70 hover:bg-[#BFF202]/5 hover:text-[#BFF202] transition-colors line-clamp-1 truncate">
              <span className="h-px w-4 shrink-0 bg-[#BFF202]/30" />
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <div className="space-y-20">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              {s.title !== 'Introduction' && (
                <h2 className="font-heading text-3xl font-bold text-white mb-8 pb-4 border-b border-[#BFF202]/10">
                  {s.title}
                </h2>
              )}
              <RichText text={s.content} />
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#BFF202]/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-4 group">
              <Mail className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Email</p>
                <a href="mailto:info@sylvedha.com" className="text-base text-white/90 hover:text-[#BFF202] transition-colors">info@sylvedha.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <Globe className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Website</p>
                <Link href="/" className="text-base text-white/90 hover:text-[#BFF202] transition-colors">sylvedha.com</Link>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <MapPin className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Office</p>
                <p className="text-base text-white/70 leading-relaxed">Incubation Centre, Third Floor, PG Block, MITE, Moodabidri, Mangaluru, Karnataka — 574225</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-5 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Sylvedha LLP. All rights reserved.</p>
            <span className="text-[#BFF202]/30">|</span>
            <Link href="/privacy-policy" className="hover:text-[#BFF202] transition-colors">Privacy Policy</Link>
            <span className="text-[#BFF202]/30">|</span>
            <Link href="/terms" className="hover:text-[#BFF202] transition-colors">Terms of Use & Sale</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

