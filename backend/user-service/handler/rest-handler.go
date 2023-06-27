package handler

import (
	"fmt"
	"log"
	"net/http"

	"github.com/playzee/backend/user-service/model"
	"github.com/playzee/backend/user-service/service"
	"github.com/playzee/backend/user-service/utils"
)

var userService service.UserService

func initializeService(service service.UserService) {
	userService = service
}

func RegisterUserHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("inside Register user handler")
	var requestType model.UserRegisterInput
	requestObj, ok := utils.ReadJson(w, r, requestType).(model.UserRegisterInput)
	if ok {
		userInput := &model.UserModel{
			Username:  requestObj.User.Username,
			Firstname: requestObj.User.Firstname,
			Lastname:  requestObj.Password,
			Email:     requestObj.User.Email,
			LoginType: requestObj.User.LoginType,
		}
		userOutput, err := userService.RegisterUser(*userInput)
		if err != nil {
			log.Println("Error Occured")
		}
		utils.WriteJson(userOutput, w)
	}
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {

}

func GetUserByIdHandler(w http.ResponseWriter, r *http.Request) {

}

func SetupRoutes(service service.UserService, apiBasePath string) {
	userService = service
	http.Handle(fmt.Sprintf("%s/%s", apiBasePath, "user/register-user"), http.HandlerFunc(RegisterUserHandler))
	http.Handle(fmt.Sprintf("%s/%s", apiBasePath, "user/login"), http.HandlerFunc(LoginHandler))
	http.Handle(fmt.Sprintf("%s/%s", apiBasePath, "user/:id"), http.HandlerFunc(GetUserByIdHandler))

}
