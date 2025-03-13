using System;
using System.IO;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using QRCoder;
using System.Drawing;

namespace FinalProjectBackend.Utility
{
    public static class EmailSender
    {
        public static void SendEmail(string sendTo)
        {
            var email = new MimeMessage();

            email.From.Add(new MailboxAddress("TicketSolution", "infoticketsolutions@gmail.com"));
            email.To.Add(new MailboxAddress("Receiver Name", sendTo));
            email.Subject = "TicketSolutions - Agradecimento";

            // Load logo image from file
            var logoPath = @"C:\Users\guga0\Desktop\Projeto\Projeto2024parte2\UI\finalprojectfrontend\public\LogoProjeto.png";
            MimePart logoPart = new MimePart("image", "png")
            {
                Content = new MimeContent(File.OpenRead(logoPath), ContentEncoding.Default),
                ContentDisposition = new ContentDisposition(ContentDisposition.Inline),
                ContentId = "<logo>",
                ContentTransferEncoding = ContentEncoding.Base64
            };

            // HTML body with embedded logo
            string htmlBody = $@"
                <html>
                <body style='text-align: center; font-size: 12px;'>
                    <p><img src='cid:logo' alt='Logo da TicketSolutions' style='max-width: 150px;'></p>
                    <p>Bem-vindo à TicketSolutions. Obrigado pela confiança em nós ao ter comprado o seu bilhete na nossa empresa. Esperamos que tenha gostado do serviço.</p>
                    <p>Em anexo irá o seu bilhete e esperamos voltar a vê-lo em breve.</p>
                    <p>Os melhores cumprimentos,</p>
                    <p>Gustavo Silva<br />TicketSolutions, CEO and Founder</p>
                </body>
                </html>
            ";

            // Create HTML part
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = htmlBody;
            bodyBuilder.LinkedResources.Add(logoPart);

            // Create the QR Code as an attachment
            byte[] qrCodeBytes = GenerateQrCodeBytes(sendTo, 100);
            var qrAttachment = new MimePart("image", "png")
            {
                Content = new MimeContent(new MemoryStream(qrCodeBytes), ContentEncoding.Default),
                ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                ContentTransferEncoding = ContentEncoding.Base64,
                FileName = "qrcode.png"
            };

            // Add the QR code attachment to a multipart/mixed container
            var multipart = new Multipart("mixed");
            multipart.Add(bodyBuilder.ToMessageBody());
            multipart.Add(qrAttachment);

            // Set the multipart/mixed container as the email body
            email.Body = multipart;

            using (var smtp = new SmtpClient())
            {
                smtp.Connect("smtp.gmail.com", 587, false);

                // Note: only needed if the SMTP server requires authentication
                smtp.Authenticate("infoticketsolutions@gmail.com", "yjghaqsyslvrwrpz");

                smtp.Send(email);
                smtp.Disconnect(true);
            }
        }

        public static byte[] GenerateQrCodeBytes(string text, int size)
        {
            using (var qrGenerator = new QRCodeGenerator())
            {
                QRCodeData qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.M);
                using (var qrCode = new QRCode(qrCodeData))
                {
                    using (Bitmap bitmap = qrCode.GetGraphic(20))
                    {
                        using (var ms = new MemoryStream())
                        {
                            bitmap.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                            return ms.ToArray();
                        }
                    }
                }
            }
        }
    }
}
