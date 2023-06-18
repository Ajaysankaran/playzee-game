package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	config "github.com/playzee/backend/user-service/config"
	handler "github.com/playzee/backend/user-service/handler"

	pb "github.com/playzee/backend/user-service/proto"
	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 9000, "The server port")
)

func main() {
	fmt.Println("Starting server")
	flag.Parse()

	// Initialize DB Connection
	config.InitDatabase()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Register GRPC services
	s := grpc.NewServer(grpc.UnaryInterceptor(config.AuthInterceptor))
	pb.RegisterUserServiceServer(s, &handler.UserServer{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
	defer config.Cdb_Session.Close()
}
