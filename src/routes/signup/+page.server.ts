import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async({request}) => {
        try {
            const formData = await request.formData();
            console.log( ... formData);
            const email = formData.get("target");
            const body = 'testing';
            const html = `<p>${body}</p>`;
    
            const message = {
                from: GOOGLE_EMAIL,
                to: email,
                bcc: "fundlab0302@gmail.com",
                subject: "testing",
                text: body,
                html: html,
            };
    
            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            }
    
            await sendEmail(message);
    
            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
}