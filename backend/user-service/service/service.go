package service

import (
	"github.com/playzee/backend/user-service/model"
)

type UserService interface {
	GetUserById(id string) (model.UserModel, error)
	RegisterUser(userInput model.UserModel) (model.UserModel, error)
	Login(loginInput model.LoginInput) (*model.UserModel, error)
}

func NewUserService() UserService {
	return &UserServiceImpl{}
}
