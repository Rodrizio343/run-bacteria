import emailjs from '@emailjs/browser';
import { EMAILJS } from '@/config/emailjs'

export async function sendContactEmail(data) {
  try {
    const email = await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_ME,
      data,
      EMAILJS.USER_ID
    );
    
    await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_USER,
      data,
      EMAILJS.USER_ID
    );
    return email
  } catch (error) {
    console.log(error);
  }
}