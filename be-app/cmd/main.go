package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

type Email struct {
	From string `json:"from"`
	Name string `json:"name"`
	Body string `json:"body"`
}

type Response struct {
	Status  string
	Message string
}

func main() {

	r := chi.NewRouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{http.MethodPost},
		AllowCredentials: true,
	})

	r.Use(middleware.Logger)
	r.Use(c.Handler)

	r.Post("/send-email", sendEmail)

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

	var email Email
	var response Response

	err := json.NewDecoder(r.Body).Decode(&email)

	if err != nil {
		log.Fatal(err)
	}

	from := email.From
	pass := os.Getenv("APP_PASSWORD")
	to := "Christopherrivera384@gmail.com"

	body := "Subject: " + email.Name + "\r\n" +
		email.Body

	smtpServer := "smtp.gmail.com"
	port := ":587"
	auth := smtp.PlainAuth("", from, pass, smtpServer)

	err = smtp.SendMail(smtpServer+port, auth, from, []string{to}, []byte(body))

	if err != nil {
		log.Fatal("Error sending email ", err)
		return
	}

	response = Response{
		Status:  "Successs",
		Message: "Email has been sent",
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}
