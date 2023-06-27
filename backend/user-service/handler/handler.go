package handler

import (
	"context"
	"log"

	"github.com/playzee/backend/user-service/model"
	pb "github.com/playzee/backend/user-service/proto"
	service "github.com/playzee/backend/user-service/service"
	"github.com/playzee/backend/user-service/utils"
)

type UserServer struct {
	pb.UnimplementedUserServiceServer
}

var usrService service.UserService

func (s *UserServer) TestRpc(ctx context.Context, in *pb.Empty) (*pb.TestMessage, error) {
	return &pb.TestMessage{Text: "RPC is working fine"}, nil
}

func (s *UserServer) GetUser(ctx context.Context, in *pb.UserId) (*pb.User, error) {
	//TO-DO

	log.Printf("Received: %v", in.Id)

	return nil, nil
}

func (s *UserServer) RegisterUser(ctx context.Context, in *pb.UserRegisterInput) (*pb.UserId, error) {
	// TO-DO
	userInput := &model.UserModel{
		Username:  in.User.Username,
		Firstname: in.User.Firstname,
		Lastname:  in.User.Lastname,
		Email:     in.User.Email,
		Password:  in.Password,
	}

	userOutput, err := usrService.RegisterUser(*userInput)

	if err != nil {
		return nil, err
	}
	return &pb.UserId{Id: userOutput.UserId}, nil
}

func (s *UserServer) UserLogin(ctx context.Context, in *pb.UserLoginInput) (*pb.UserLoginResponse, error) {
	log.Print("Entering user login")
	loginInput := model.LoginInput{
		Username:  in.Username,
		Password:  in.Password,
		LoginType: in.LoginType,
		Email:     in.EmailId,
	}

	if user, err := usrService.Login(loginInput); err != nil {
		return nil, err
	} else {
		authToken := utils.GenerateJwtToken(utils.Claims{
			UserId:    user.UserId,
			Username:  user.Username,
			LoginType: string(user.LoginType),
		})

		loginResponse := &pb.UserLoginResponse{
			AuthToken:    authToken,
			RefreshToken: "",
			User: &pb.User{
				Username:  user.Username,
				Firstname: user.Firstname,
				Lastname:  user.Lastname,
				Email:     user.Email,
				LoginType: string(user.LoginType),
			},
		}
		return loginResponse, nil
	}
}

func (s *UserServer) UpdateUser(ctx context.Context, in *pb.User) (*pb.User, error) {
	// TO-DO
	return nil, nil
}
