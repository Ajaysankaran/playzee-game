package user_service

import (
	"errors"
	"log"

	uuid "github.com/google/uuid"
	config "github.com/playzee/backend/user-service/config"
	m "github.com/playzee/backend/user-service/model"
	"golang.org/x/crypto/bcrypt"
)

func GetUserById(id string) {

}

func AddUser(userInput m.UserModel) (m.UserModel, error) {
	log.Println("service AddUser, input:", userInput)
	var userOutput m.UserModel = m.UserModel{}
	if userInput == (m.UserModel{}) {
		log.Println("User object is empty")
		return userOutput, errors.New("User object is empty")
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(userInput.Password), 12)
	userObj := m.UserModel{
		UserId:    uuid.NewString(),
		Username:  userInput.Username,
		Firstname: userInput.Firstname,
		Lastname:  userInput.Lastname,
		Email:     userInput.Email,
		LoginType: m.USER_PASSWORD,
	}

	if err := config.Cdb_Session.Query("INSERT INTO USER (id, user_name, first_name, last_name, email, login_type, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
		userObj.UserId, userObj.Username, userObj.Firstname, userObj.Lastname, userObj.Email, userObj.LoginType, password).Exec(); err != nil {
		log.Fatal(err)
		return userOutput, err
	}

	userOutput.Username = userObj.Username
	userOutput.UserId = userObj.UserId

	return userOutput, nil
}
