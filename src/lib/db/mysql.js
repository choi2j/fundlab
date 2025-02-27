// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import mysql from "mysql2/promise";

let mysqlconn = null;

export function mysqlconnFn() {
        if (!mysqlconn) {
            // used for development with MAMP
            // mysqlconn = mysql.createConnection({
            //   host: "127.0.0.1",
            //   user: "root",
            //   password: "",
            //   database: "statedata",
            // });
            mysqlconn = mysql.createConnection({
            host: "consol0302.kr",
            user: "root",
            password: 'trishest36',
            database: "fundlab",
        });
    }

    return mysqlconn;
}
