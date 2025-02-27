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
            const action = formData.get("action");
            const genRandNum = function (min: number, max: number) {
                const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
                return randNum;
            }
            const verifyNumber = genRandNum(111111, 999999);

            if (action === "sendMail") {
                const email = formData.get("target");
                const html = `<p>인증 번호는 ${verifyNumber} 입니다.</p>`;
                const message = {
                    from: GOOGLE_EMAIL,
                    to: email,
                    bcc: "fundlab0302@gmail.com",
                    subject: "testing",
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
            } else if (action === "sendNumber") {
                const inputNumber = formData.get("verifyNumber");
                if (inputNumber == verifyNumber) {
                    console.log('success');
                } else {
                    console.log('fail');
                }
            }

            
            
            
    
            
    
            
        } catch (error) {
            console.error(error);
        }
    }
}