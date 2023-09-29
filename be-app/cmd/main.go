package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/joho/godotenv"
)

func main() {

	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Post("/", sendEmail)

	err := godotenv.Load("./.env")

	if err != nil {
		log.Fatal("Error loading .env file ", err)
	}

	portString := os.Getenv("PORT")

	if portString == "" {
		log.Fatal("PORT not found within the environment")
	}

	fmt.Println("Port listening on port :", portString)
	log.Fatal(http.ListenAndServe(portString, r))
}

func sendEmail(w http.ResponseWriter, r *http.Request) {
	from := "Christopherrivera384@gmail.com"
	pass := os.Getenv("APP_PASSWORD")
	to := "Christopherrivera384@gmail.com"

	body := "Subject: Hello there!\r\n" +
		"This email is the body."

	smtpServer := "smtp.gmail.com"
	port := ":587"
	auth := smtp.PlainAuth("", from, pass, smtpServer)

	err := smtp.SendMail(smtpServer+port, auth, from, []string{to}, []byte(body))

	if err != nil {
		log.Fatal("Error sending email ", err)
		return
	}

	fmt.Println("Sent Successfully!")
}
