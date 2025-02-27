import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server';
import type { PageServerLoad } from './$types';
import { mysqlconnFn } from '$lib/db/mysql';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;




export const actions = {
    register: async({request}) => {
        const mysqlconn = await mysqlconnFn();
        const formData = await request.formData();
        console.log( ... formData);
        const genRandNum = function (min: number, max: number) {
            const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            return randNum;
        }
        const createdNumber = genRandNum(111111, 999999);
        const email = formData.get("target");

        
        
        const html = `<p>인증 번호는 ${createdNumber} 입니다.</p>`;
        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            bcc: "fundlab0302@gmail.com",
            subject: "testing",
            html: html,
        };
        const sendEmail = async (message: unknown) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err: unknown, info: unknown) => {
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
        const results = await mysqlconn.query(`INSERT INTO verifycode(email, code, expireTime) VALUES ('${email}', ${createdNumber}, ${new Date().getTime() + 300000}) ON DUPLICATE KEY UPDATE code=${createdNumber}, expireTime=${new Date().getTime() + 300000}`).then(() => {console.log('asdf')});

    },
    verify: async({request}) => {
            const mysqlconn = await mysqlconnFn();
            const formData = await request.formData();
            const inputNum = formData.get("verifyNumber");
            const results = await mysqlconn.query(`SELECT * FROM verifycode WHERE code = ${inputNum};`).then(([rows, fields]) => {
                console.log(rows);
                return rows;
            });
            console.log(results);
            if (results[0].code == inputNum) {
                console.log("success");
            } else {
                console.log("fail");
            }
        
    }
}

