package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/go-chi/chi"
	"github.com/joho/godotenv"
	"github.com/rs/cors"
	gomail "gopkg.in/mail.v2"
)

type EmailForm struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`
	Message   string `json:"message"`
}

func main() {
	const PORT string = ":8080"

	r := chi.NewRouter()

	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		AllowCredentials: true,
		MaxAge:           300,
	})

	r.Use(cors.Handler)

	r.Post("/send-email", SendEmail)

	fmt.Println("Server starting at port" + PORT)
	err := http.ListenAndServe(PORT, r)

	if err != nil {
		fmt.Println("Internal Server error", err)
	}
}

func SendEmail(w http.ResponseWriter, r *http.Request) {
	var emailForm EmailForm

	err := json.NewDecoder(r.Body).Decode(&emailForm)

	if err != nil {
		fmt.Println("Error decoding email form", err)
		return
	}

	fmt.Println("Email form recieved", emailForm)

	message := gomail.NewMessage()

	message.SetHeader("From", emailForm.Email)
	message.SetHeader("To", "Christopherrivera384@gmail.com")
	message.SetHeader("Subject", "Portfolio website email")

	message.SetBody("text/plain", emailForm.Message)

	err = godotenv.Load()

	if err != nil {
		fmt.Println("Error loading .env file", err)
	}

	username := os.Getenv("MY_APP_EMAIL")
	password := os.Getenv("MY_APP_PASSWORD")

	dialer := gomail.NewDialer("smtp.gmail.com", 587, username, password)

	err = dialer.DialAndSend(message)

	if err != nil {
		fmt.Println("Error sending email", err)
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Email sent successfully"))
}
