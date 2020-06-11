var nodemailer = require('nodemailer');

interface MailConfig {
    service?: string 
    user: string | undefined
    password: string | undefined
}

interface SendConfig {
    to: string,
    subject: string
    html: string
}

export default class Mail {

    private transporter: any
    private mailConfig: MailConfig

    constructor (mailConfig: MailConfig) {

        this.mailConfig = mailConfig
        this.setAuth()
    }

    setAuth(){
        const { service, user, password } = this.mailConfig
        if (user === undefined){
            throw new Error('You cannot enter undefined user');
        }

        if( password === undefined){
            throw new Error('You cannot enter undefined password');
        }

        this.transporter = nodemailer.createTransport({
            service: service || 'gmail',
            auth: {
                user: user,
                pass: password
            }
        });
    }

    async sendMail(sendConfig: SendConfig): Promise<Boolean> {
        const { user } = this.mailConfig

        if(this.transporter === undefined){
            throw new Error('you must specify the section start data in the constructor');
        }

        const { response } = await this.transporter.sendMail({
            from: user,
            ...sendConfig
        });

        if(/4\..*?\s/.test(response)){
            throw new Error('An error occurred, please try again');
        }

        return true
    }
}