package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	config "github.com/playzee/backend/user-service/config"
	"github.com/playzee/backend/user-service/handler"
	"github.com/playzee/backend/user-service/service"
)

var (
	port = flag.Int("port", 9000, "The server port")
)

func main() {
	fmt.Println("Starting server")
	flag.Parse()

	// Initialize DB Connection
	config.InitDatabase()

	// lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	// if err != nil {
	// 	log.Fatalf("failed to listen: %v", err)
	// }

	// Register GRPC services
	// s := grpc.NewServer(grpc.UnaryInterceptor(config.AuthInterceptor))
	// pb.RegisterUserServiceServer(s, &handler.UserServer{})

	// if err := s.Serve(lis); err != nil {
	// 	log.Fatalf("failed to serve: %v", err)
	// }

	userService := service.NewUserService()
	handler.SetupRoutes(userService, "/api")

	log.Fatal(http.ListenAndServe(":3000", nil))

	defer config.Cdb_Session.Close()
}
