const number = '916364629392';
const form = document.getElementById('bookingForm');
const whatsappButton = document.getElementById('whatsappButton');
const floatingWhatsapp = document.getElementById('floatingWhatsapp');

function value(name, fallback) {
  const field = form.elements[name];
  return field && field.value.trim() ? field.value.trim() : fallback;
}

function buildWhatsappLink() {
  const message = [
    'Hello Taiyabamehndiartist, I would like to book a henna appointment.',
    '',
    `Name: ${value('name', 'Not provided')}`,
    `Date: ${value('date', 'Not provided')}`,
    `Time: ${value('time', 'Not provided')}`,
    `Style: ${value('style', 'Simple Arabic Design')}`,
    `Customer address/event venue: ${value('address', 'Not provided')}`,
    `Notes: ${value('notes', 'None')}`,
  ].join('\n');

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function refreshLinks() {
  const link = buildWhatsappLink();
  whatsappButton.href = link;
  floatingWhatsapp.href = link;
}

form.addEventListener('input', refreshLinks);
form.addEventListener('change', refreshLinks);
refreshLinks();
