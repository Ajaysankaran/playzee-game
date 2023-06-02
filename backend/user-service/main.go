package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "github.com/playzee/backend/user-service/proto"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 9000, "The server port")
)

type server struct {
	pb.UnimplementedUserServiceServer
}

func (s *server) GetUser(ctx context.Context, in *pb.UserId) (*pb.User, error) {
	log.Printf("Received: %v", in.Id)
	return &pb.User{Username: "Test user"}, nil
}

func main() {
	fmt.Println("Starting..")
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterUserServiceServer(s, &server{})
	fmt.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}

}
