package main

import (
	"log"
	"net/smtp"
)

func main() {
	client, err := smtp.Dial("smtp.gmail.com:587")

	if err != nil {
		log.Fatal(err)
	}

	from := "Christopherrivera384@gmail.com"
	to := "Christopherrivera384@gmail.com"

	message := []byte("Subject: Test email \n\n This is a test email")

	err = client.Mail(from)
	if err != nil {
		log.Fatal(err)
	}
}
