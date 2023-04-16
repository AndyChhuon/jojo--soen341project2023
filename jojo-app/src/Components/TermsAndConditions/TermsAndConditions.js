import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./TermsAndConditions.less";

export default function TermsAndConditions() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className="terms-modal">
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="terms">
          <div class="term-box">
            <div class="terms-text">
              <p>Last Edit:04/09/2022</p>
              <p>Greetings User</p>
              <h4>Introduction to jojo's terms of service</h4>
              <p>
                Each time you access or use jojo's online and/or mobile services
                and websites, including any jojo mobile application and browser
                extension or plugin, regardless of where it is downloaded from
                (collectively, the “jojo Apps”), and any software, service,
                feature, product, program and element (including e-mail
                messages, notifications, and other messages) provided by or on
                behalf of Indeed on or in connection with such services or
                websites (collectively, the “Site”), including any products,
                programs, and services described in these Terms of Service
              </p>
              <h4>For job seekers:</h4>
              <p>
                Jojo may make available Job Ads advertising employment
                opportunities and other job-related content, including links to
                third-party websites (“Job Listings” or “Job Ads”), through
                jojo’s search results or otherwise through the Site. Searching
                for Job Ads on jojo is free for Job Seekers. jojo displays Job
                Ads based on a combination of compensation paid by employers to
                jojo and relevance, such as search terms, and other information
                provided, and activities conducted on jojo. While jojo may in
                some circumstances be compensated by employers who post Job Ads,
                helping keep jojo job search free for Job Seekers, all Job Ads
                are considered advertising.
              </p>
              <p>
                Job Ads are created and provided by third parties over whom
                Indeed exercises no control; you acknowledge and understand that
                jojo has no control over the content of Job Ads, links to or
                from Job Ads, or any conditions third parties might impose once
                a Job Seeker has submitted an application or left the Site. For
                example, some of these third parties may attempt to charge Job
                Seekers a fee to apply to a particular job, although jojo
                endeavors not to make such Job Ads available on the Site. If you
                leave the jojo Site and choose to enter a third-party website,
                you accept any terms and conditions imposed by that third-party.
                Except for sponsored, featured or paid placements, the Job Ads
                contained on, or linked from, the Site are indexed or posted in
                an automated manner. Jojo has no obligation to screen any Job
                Ads, or to include any Job Ads, in its search results or other
                listings, and may exclude or remove any Job Ads from the Site or
                your search result without any obligation to provide reasoning
                for removal or exclusion. You understand and agree that jojo has
                no obligation to present you with any or all Job Ads. We cannot
                confirm the accuracy or completeness of any Job Ad or other
                information submitted by any Employer or other user, including
                the identity of such Employer or other user. Jojo assumes no
                responsibility, and disclaims all liability for the content,
                accuracy, completeness, legality, reliability, or availability
                of any Job Ads, or other information submitted by any Employer
                or other user.
              </p>
              <p>
                When you initiate a job application on a website operated by an
                Employer or its applicant tracking system, jojo may collect
                certain information about you and any actions taken by you
                during your visit using automated means, such as via Application
                Programming Interfaces (API), cookies and web beacons. The
                information collected includes, for example, information about
                job listings you viewed and job applications you started and
                completed. An Employer who uses tracker functionality is
                required under this Agreement to provide any notice, and obtain
                any prior consent, that may be required by applicable law.
                However, you acknowledge and agree that jojo has no control over
                such an Employer or its website. You agree to jojo's use of, and
                receipt of information from, any such tracker functionality.
              </p>
              <h4>For employers:</h4>
              <p>
                When you access or use the Site in your capacity as an employee
                or other representative of an Employer, or if you create an jojo
                account on behalf of an Employer, you represent and warrant that
                you have the authority to bind the Employer to this Agreement.
                When you create an account on behalf of an Employer, the account
                belongs to the Employer, and you acknowledge that any and all
                information that you provide jojo through the account, such as
                the actions you take and when you take them, will be visible to
                the Employer.
              </p>
              <p>
                In some instances, multiple users may be linked to the same
                account (“a Linked Account”). A Linked Account is created when
                the primary account owner(s) (“Admins”) of an Employer account
                invites other users to the same account. Admin(s) can provide
                these other users varying levels of access and functionality
                (“Roles”) within the account, as described on the site, such as
                accessing account data, including candidate Personal Data,
                contained in the account of the user who initiated the invite,
                or purchasing services from jojo under such account. If you are
                an Admin adding a user to a Role or several Roles, you represent
                to jojo that you are an authorized representative of this
                account and that you have the authority to allow this data and
                access to be shared. You further agree to indemnify and hold
                harmless jojo from any allegations, claims, actions, suits,
                demands, damages, liabilities, obligations, losses, settlements,
                judgments, costs and expenses (including without limitation
                attorneys’ fees and costs) that result from the sharing of this
                data, access to your account, and any purchases made under your
                account. When using a Linked Account, any users with access to
                certain Roles may have access to any or all account information,
                such as: communications and actions of all other users and
                applicants within the Linked Account, resume contacts, and
                billing information, and you consent to such access. When using
                a Linked Account, any users with access to certain Roles may
                also have the ability to purchase jojo products under your
                account, and you agree that you are responsible for the payment
                of all such purchases made. If you accept another user's
                invitation to link your Employer account to their Employer
                account, you acknowledge that any and all information about your
                activity in your Employer account, such as the actions you take
                and when you take them, will be visible to all linked users.
                Linked Account users will not be able to see your activity, such
                as your job searches, applications or preferences or your jojo
                Profile information, contained in your Job Seeker account. You
                may visit your account settings at any time to unlink your
                account. The Admin assigned to an Employer account may also
                unlink any user from that Employer account at any time, and may
                be notified if your Linked Account is used to login from too
                many devices.
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="termbutton"
          variant="secondary"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
