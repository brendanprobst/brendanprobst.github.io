// import { createSignal } from 'solid-js';
// import emailjs from '@emailjs/browser';
// {/* <script
// type="text/javascript"
// src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
// ></script>
// <script type="text/javascript">
// (function () {
//   emailjs.init("Oei7EkPgwBIu6Twf1");
// })();
// </script>
// <script type="text/javascript">
// window.onload = function () {
//   document
//     .getElementById("my-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       console.log(this);
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       // this.to_name = document.getElementById("name").value;
//       // this.to_email = document.getElementById("email").value;

//       // this.contact_me = document.getElementById("contact").value;
//       // this.message = document.getElementById("message").value;

//       // this.reply_to = "bprobst1029@gmail.com";
//       console.log(this.to_email);
//       emailjs.sendForm("service_niusmnj", "template_dgjuocy", this).then(
//         function () {
//           console.log("SUCCESS!");
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//           });
// };
// </script> */}
// export default function ContactFormComponent() {
//   const [status, setStatus] = createSignal('');

//   const handleSubmit = async (event: SubmitEvent) => {
//     event.preventDefault();
//     const form = event.target as HTMLFormElement;

//     // Set contact number
//     const contactNumberInput = form.querySelector('#contact_number') as HTMLInputElement;
//     contactNumberInput.value = Math.floor(Math.random() * 100000).toString();

//     try {
//       await emailjs.sendForm(
//         'service_niusmnj',
//         'template_dgjuocy',
//         form,
//         'Oei7EkPgwBIu6Twf1'
//       );
//       setStatus('Message sent successfully!');
//       form.reset();
//     } catch (error) {
//       console.error('FAILED...', error);
//       setStatus('Failed to send message. Please try again.');
//     }
//   };

//   return (
//     <section>
//       <form id="my-form" onSubmit={handleSubmit}>
//         <h2>Get In Touch Today</h2>
//         <div class="form-group">
//           <label for="to_name">Name *</label>
//           <input
//             required
//             type="text"
//             id="to_name"
//             name="to_name"
//             placeholder="What do people call you?"
//           />
//         </div>
//         <div class="form-group">
//           <label for="to_email">What's your email? *</label>
//           <input
//             required
//             type="email"
//             id="to_email"
//             name="to_email"
//             placeholder="yourname@email.com"
//           />
//         </div>
//         <div class="form-group">
//           <label for="contact_me">What's the best way to reach you?</label>
//           <input
//             type="text"
//             id="contact_me"
//             name="contact_me"
//             placeholder="phone, email, name of your carrier pidgeon, ect. "
//           />
//         </div>
//         <div>
//           <label for="message">What do you want to tell me?</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             placeholder="The floor is yours!"></textarea>
//         </div>

//         <div>
//           <input
//             aria-label='Contact Number'
//             type="text"
//             class="hidden"
//             name="contact_number"
//             id="contact_number"
//           />
//         </div>
//         <button id="form-button">Send</button>
//         {status() && <div class="status-message">{status()}</div>}
//       </form>
//     </section>
//   );
// } 