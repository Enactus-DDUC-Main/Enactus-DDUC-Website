import smtplib
from email.message import EmailMessage
from email.utils import formataddr
from os import environ

receiver_email_id = environ.get("EMAIL_ID")
receiver_email_password = environ.get("PASSWORD")

def send_email(email_body, sender_name = "" , sender_email_id = ""):
    body = email_body
    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com" , 465)
        server.ehlo()
        server.login(receiver_email_id, receiver_email_password)
        
        msg = EmailMessage()
        msg['Subject'] = ""
        msg['From'] = formataddr((sender_name , sender_email_id))
        msg.set_content(body)
        msg['To'] = receiver_email_id
        
        server.send_message(msg)
        

    except Exception as e:
        print ("Something went wrong")

    finally:
        print ("Shutting down the server")
        server.quit()
