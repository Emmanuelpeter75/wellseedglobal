// One place for the details that appear across the site.
// Edit here and every page updates.

export const site = {
  name: 'Wellseed Global',
  tagline: 'A Kingdom Impact Movement',
  motto: 'Demonstrating the Love of Christ Through Impact.',
  description:
    'Wellseed Global is a Christ-centred impact movement bringing young Christians together to grow, build and make an impact.',
};

// Main menu. The two application pages are NOT listed here on purpose.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Vision & Mission', href: '/vision' },
  { label: 'Empowerment', href: '/empowerment' },
];

// Footer menu = main menu + Contact.
export const footerNav = [...nav, { label: 'Contact', href: '/contact' }];

// Where the two buttons on the Get Involved page lead.
export const links = {
  empowermentApply: '/join-community', // "Join the Empowerment Community"
  volunteerApply: '/volunteer',        // "Become a Volunteer"
};

// FORMSPREE: replace each "ADD FORMSPREE URL" with the real endpoint,
// for example 'https://formspree.io/f/abcdwxyz'. Use a different endpoint for each form.
// Until then the forms show a friendly "not connected yet" message instead of sending.
export const forms = {
  community: {
    endpoint: 'https://formspree.io/f/maeodqar',
    subject: 'New Empowerment Community application',
  },
  volunteer: {
    endpoint: 'https://formspree.io/f/xqpqdenz',
    subject: 'New Volunteer interest',
  },
};

// Official contact details.
// WhatsApp uses the same number as the phone (international format, no + or spaces).
export const contact = {
  email: 'wellseedglobal@gmail.com',
  phoneDisplay: '0904 706 8918',
  phoneIntl: '2349047068918',
  whatsappIntl: '2349047068918',
};

export const social = [
  { label: 'Facebook', href: null },
  { label: 'Instagram', href: null },
  { label: 'YouTube', href: null },
  { label: 'X', href: null },
];
