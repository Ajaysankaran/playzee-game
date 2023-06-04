package handler

import (
	"context"
	"log"

	"github.com/playzee/backend/user-service/model"
	pb "github.com/playzee/backend/user-service/proto"
	service "github.com/playzee/backend/user-service/service"
)

type UserServer struct {
	pb.UnimplementedUserServiceServer
}

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

	userOutput, err := service.AddUser(*userInput)

	if err != nil {
		return nil, err
	}
	return &pb.UserId{Id: userOutput.UserId}, nil
}

func (s *UserServer) LoginUser(ctx context.Context, in *pb.UserLoginInput) (*pb.LoginResponse, error) {
	//TO-DO
	return nil, nil
}

func (s *UserServer) UpdateUser(ctx context.Context, in *pb.User) (*pb.User, error) {
	// TO-DO
	return nil, nil
}
