import sgMail from "@sendgrid/mail";

const sendEmail = (body: ContactForm) => {
  const { subject, email, fullName, project } = body;
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  sgMail.setSubstitutionWrappers("{{", "}}");
  sgMail
    .send({
      from: {
        email,
        name: fullName
      },
      subject,
      html: `<html><body>
    <h1>We have a guest.</h1>
    <p>${project}</p>
    </body></html>`,
      to: "anriverax@gmail.com"
    })
    .then(function () {
      console.log("Email sent");
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch(function (error: any) {
      console.log(error);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log(error.response.body);
    });
};

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = await req.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  sendEmail(body);
  return new Response(JSON.stringify(body), { status: 200 });
}
