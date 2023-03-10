import { websiteContent } from '@/utils/data'
const sgMail = require('@sendgrid/mail')
const { hostName, hostEmail, hostWebsite } = websiteContent.sendGrid

export const UserRegistrationEmail = ({ email, uuid }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: { email },
    from: {
      email: hostEmail,
      name: hostName,
    },
    subject: `Welcome to ${hostName}`,
    // text: '',
    html: ` <div>
        <p>
          <strong>Thank you for registration with us</strong>
        </p>
        <p>
          Please Click here to verify your email.<a href=${hostWebsite}/verify/${uuid}>
            Verify
          </a>
        </p>
      </div>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
