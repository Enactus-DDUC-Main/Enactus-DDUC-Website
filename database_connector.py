from pymongo import MongoClient
import dns
from os import environ 

def add_user(name , email_id):
    username = environ.get("USER_DATABASE")
    password = environ.get("PASSWORD_DATABASE")
    client = MongoClient(f"mongodb+srv://{username}:{password}@cluster0.grgw3.mongodb.net/userDatabase?retryWrites=true&w=majority")

    db = client["userDatabase"]
    col = db["newsletter_subscription"]

    record = {"name" : name ,
              "email_id" : email_id}
    
    col.insert_one(record)
    return

