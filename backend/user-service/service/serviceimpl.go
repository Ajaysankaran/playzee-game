package service

import (
	"errors"
	"log"

	"github.com/gocql/gocql"
	uuid "github.com/google/uuid"
	config "github.com/playzee/backend/user-service/config"
	m "github.com/playzee/backend/user-service/model"
	"golang.org/x/crypto/bcrypt"
)

type UserServiceImpl struct {
}

func (u *UserServiceImpl) GetUserById(id string) (m.UserModel, error) {
	return m.UserModel{}, nil
}

func (u *UserServiceImpl) RegisterUser(userInput m.UserModel) (m.UserModel, error) {
	log.Println("service AddUser, input:")
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

func (u *UserServiceImpl) Login(loginInput m.LoginInput) (*m.UserModel, error) {
	log.Print("login Method in service")
	if len(loginInput.LoginType) == 0 {
		return nil, errors.New("Login Type should not be empty")
	}
	if loginInput.LoginType == string(m.USER_PASSWORD) {
		return handleUserPasswordLogin(loginInput)
	}
	return nil, nil
}

func handleUserPasswordLogin(loginInput m.LoginInput) (*m.UserModel, error) {
	if loginInput.LoginType == string(m.USER_PASSWORD) {
		log.Println("Requesting Login for userName:", loginInput.Username, " | Email: ", loginInput.Email)
		if len(loginInput.Email) == 0 && len(loginInput.Username) == 0 {
			return nil, errors.New("either Username or Email has to be provided")
		}

		if len(loginInput.Password) == 0 {
			return nil, errors.New("Password is required")
		}

		user := &m.UserModel{}
		var userIdentifier string
		var query string = "SELECT id, user_name, first_name, last_name, email, password FROM user"
		if len(loginInput.Username) != 0 {
			query = query + " where user_name = ? "
			userIdentifier = loginInput.Username
		} else {
			query = query + " where email = ? "
			userIdentifier = loginInput.Email
		}

		if err := config.Cdb_Session.Query(query, userIdentifier).Consistency(gocql.One).Scan(&user.UserId, &user.Username, &user.Firstname, &user.Lastname, &user.Email, &user.Password); err != nil {
			log.Print(err)
			return nil, errors.New(err.Error())
		}

		if len(user.UserId) == 0 {
			return nil, errors.New("User doesn't exist. Please register for new user")
		}

		if len(user.Password) != 0 {
			if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(loginInput.Password)); err != nil {
				log.Print(err)
				return nil, errors.New("Incorrect Password")
			}
		}

		return user, nil
	}
	return nil, nil
}
